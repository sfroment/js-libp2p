/* eslint-env mocha */

import { type GossipSub, gossipsub } from '@chainsafe/libp2p-gossipsub'
import { createPeerScoreParams, createTopicScoreParams } from '@chainsafe/libp2p-gossipsub/score'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { bootstrap } from '@libp2p/bootstrap'
import { circuitRelayServer, circuitRelayTransport } from '@libp2p/circuit-relay-v2'
import { dcutr } from '@libp2p/dcutr'
import { identify, identifyPush } from '@libp2p/identify'
import { ping } from '@libp2p/ping'
import {
  type PubSubPeerDiscoveryComponents,
  pubsubPeerDiscovery
} from '@libp2p/pubsub-peer-discovery'
import { webRTC } from '@libp2p/webrtc'
import { webSockets } from '@libp2p/websockets'
import * as filters from '@libp2p/websockets/filters'
import { webTransport } from '@libp2p/webtransport'
import { WebRTC } from '@multiformats/multiaddr-matcher'
import { createLibp2p } from 'libp2p'
import { raceEvent } from 'race-event'
import { isBrowser, isWebWorker } from 'wherearewe'
import { createBaseOptions } from './fixtures/base-options.js'
import type { Address, IdentifyResult, Libp2p } from '@libp2p/interface'

describe('websocket many peers', () => {
  if (isBrowser || isWebWorker) {
    return
  }

  let btNode: Libp2p
  const nodes: Libp2p[] = []

  beforeEach(async () => {
    btNode = await createLibp2p(createBaseOptions({
      addresses: { listen: ['/ip4/0.0.0.0/tcp/0/ws'] },
      transports: [circuitRelayTransport(), webRTC(), webSockets({ filter: filters.all })],
      connectionEncrypters: [noise()],
      streamMuxers: [yamux()],
      connectionManager: {
        addressSorter: (a: Address, b: Address) => {
          const localRegex =
          /(^\/ip4\/127\.)|(^\/ip4\/10\.)|(^\/ip4\/172\.1[6-9]\.)|(^\/ip4\/172\.2[0-9]\.)|(^\/ip4\/172\.3[0-1]\.)|(^\/ip4\/192\.168\.)/
          //
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          const aLocal = localRegex.test(a.toString())
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          const bLocal = localRegex.test(b.toString())
          const aWebrtc = WebRTC.matches(a.multiaddr)
          const bWebrtc = WebRTC.matches(b.multiaddr)
          if (aLocal && !bLocal) return 1
          if (!aLocal && bLocal) return -1
          if (aWebrtc && !bWebrtc) return -1
          if (!aWebrtc && bWebrtc) return 1
          return 0
        }
      },
      connectionGater: { denyDialMultiaddr: () => false },
      peerDiscovery: [pubsubPeerDiscovery({
        topics: ['discovery'],
        interval: 5000
      })],
      services: {
        pubsub: gossipsub({
          D: 0,
          Dlo: 0,
          Dhi: 0,
          Dout: 0,
          doPX: true,
          ignoreDuplicatePublishError: true,
          allowPublishToZeroTopicPeers: true,
          scoreParams: createPeerScoreParams({
            IPColocationFactorWeight: 0,
            topicScoreCap: 50
          }),
          fallbackToFloodsub: false
        }),
        relay: circuitRelayServer({ reservations: { maxReservations: Infinity } }),
        identify: identify(),
        identifyPush: identifyPush(),
        ping: ping()
      }
    }))
    await btNode.start()
    const pubsub = btNode.services.pubsub as GossipSub
    pubsub.subscribe('test')
  })

  afterEach(async () => {
    await Promise.all(nodes.map(async n => { await n.stop() }))
    await btNode.stop()
  })

  const makeTest = (n: number) => async () => {
    setInterval(() => {
      console.log(`unhandled rejections: ${process.hasUncaughtExceptionCaptureCallback}`)
    }, 1000)
    for (let i = 0; i < n; i++) {
      const btNodeCopy = btNode
      nodes.push(await createLibp2p(createBaseOptions({
        start: false,
        addresses: { listen: ['/p2p-circuit', '/webrtc'] },
        transports: [circuitRelayTransport(), webRTC(), webSockets({ filter: filters.all })],
        connectionEncrypters: [noise()],
        streamMuxers: [yamux()],
        connectionGater: { denyDialMultiaddr: () => false },
        connectionManager: {
          addressSorter: (a: Address, b: Address) => {
            const localRegex =
            /(^\/ip4\/127\.)|(^\/ip4\/10\.)|(^\/ip4\/172\.1[6-9]\.)|(^\/ip4\/172\.2[0-9]\.)|(^\/ip4\/172\.3[0-1]\.)|(^\/ip4\/192\.168\.)/
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            const aLocal = localRegex.test(a.toString())
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            const bLocal = localRegex.test(b.toString())
            const aWebrtc = WebRTC.matches(a.multiaddr)
            const bWebrtc = WebRTC.matches(b.multiaddr)
            if (aLocal && !bLocal) return 1
            if (!aLocal && bLocal) return -1
            if (aWebrtc && !bWebrtc) return -1
            if (!aWebrtc && bWebrtc) return 1
            return 0
          }
        },
        peerDiscovery: [pubsubPeerDiscovery({
          topics: ['discovery'],
          interval: 5000
        }),
        bootstrap({
          list: btNode.getMultiaddrs().map(ma => ma.toString())
        })
        ],
        services: {
          pubsub: gossipsub({
          // doPX: true,
            fallbackToFloodsub: false,
            scoreParams: createPeerScoreParams({
              IPColocationFactorWeight: 0,
              topics: {
                discovery: createTopicScoreParams({
                  topicWeight: 1
                })
              },
              appSpecificScore: (p) => {
                if (btNodeCopy.peerId.equals(p)) {
                  return 1000
                }
                return 0
              }

            })
          }),
          identify: identify(),
          identifyPush: identifyPush(),
          ping: ping()
        }
      })))
      await Promise.all([
        raceEvent(btNode, 'peer:identify', undefined, {
          filter: (evt: CustomEvent<IdentifyResult>) => {
            return Boolean(evt.detail.signedPeerRecord) && evt.detail.peerId.equals(nodes[i].peerId)
          }
        }),
        (async () => {
          // await new Promise(resolve => setTimeout(resolve, 500))
          await nodes[i].start()
        })()
      ])

      // const pubsub = nodes[i].services.pubsub as GossipSub
      // pubsub.subscribe('test')
    }
    const baseMAs = btNode.getMultiaddrs()

    for (let i = 1; i < nodes.length; i++) {
    }
    await new Promise(resolve => setTimeout(resolve, 10000))
    for (let i = 0; i < nodes.length; i++) {
      console.log('node', i, nodes[i].getPeers().length)
    }
  }

  it('should not crash 10 nodes', makeTest(300)).timeout(30000)
})
