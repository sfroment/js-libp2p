/* eslint-env mocha */

import { type GossipSub, gossipsub } from '@chainsafe/libp2p-gossipsub'
import { createPeerScoreParams } from '@chainsafe/libp2p-gossipsub/score'
import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { circuitRelayServer, circuitRelayTransport } from '@libp2p/circuit-relay-v2'
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
import { createLibp2p } from 'libp2p'
import { raceEvent } from 'race-event'
import { isBrowser, isWebWorker } from 'wherearewe'
import { createBaseOptions } from './fixtures/base-options.js'
import type { IdentifyResult, Libp2p } from '@libp2p/interface'
import { dcutr } from '@libp2p/dcutr'

describe('websocket many peers', () => {
  if (isBrowser || isWebWorker) {
    return
  }

  let btNode: Libp2p
  const nodes: Libp2p[] = []

  beforeEach(async () => {
    btNode = await createLibp2p(createBaseOptions({
      addresses: { listen: ['/ip4/0.0.0.0/tcp/0/ws'] },
      transports: [webSockets({ filter: filters.all }), webRTC(), circuitRelayTransport(), webTransport()],
      connectionEncrypters: [noise()],
      streamMuxers: [yamux()],
      connectionGater: { denyDialMultiaddr: () => false },
      connectionManager: { dialTimeout: 10 },
      peerDiscovery: [pubsubPeerDiscovery({
        topics: ['discovery'],
        interval: 100
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
            IPColocationFactorWeight: 0
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
    nodes.push(...await Promise.all(Array.from({ length: n }, async () => createLibp2p(createBaseOptions({
      addresses: { listen: ['/p2p-circuit', '/webrtc'] },
      transports: [webSockets({ filter: filters.all }), webRTC(), circuitRelayTransport()],
      connectionEncrypters: [noise()],
      streamMuxers: [yamux()],
      connectionGater: { denyDialMultiaddr: () => false },
      peerDiscovery: [pubsubPeerDiscovery({
        topics: ['discovery'],
        interval: 100
      })],
      services: {
        pubsub: gossipsub({
          doPX: true,
          fallbackToFloodsub: false,
          scoreParams: createPeerScoreParams({
            IPColocationFactorWeight: 0,
            appSpecificScore: (p) => {
              if (btNode.peerId.equals(p)) {
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
    })))))

    const baseMAs = btNode.getMultiaddrs()

    for (let i = 1; i < nodes.length; i++) {
      await Promise.all([
        nodes[i].start(),
        nodes[i].dial(baseMAs)
      ])
      const pubsub = nodes[i].services.pubsub as GossipSub
      pubsub.subscribe('test')
    }
    for (let i = 0; i < nodes.length; i++) {
      console.log('node', i, nodes[i].getPeers().length)
    }
  }

  it('should not crash 10 nodes', makeTest(30)).timeout(100000)
})
