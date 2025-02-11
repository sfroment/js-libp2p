/* eslint-env mocha */

import { yamux } from '@chainsafe/libp2p-yamux'
import { circuitRelayServer, circuitRelayTransport } from '@libp2p/circuit-relay-v2'
import { identify, identifyPush } from '@libp2p/identify'
import { ping } from '@libp2p/ping'
import { plaintext } from '@libp2p/plaintext'
import { webRTC } from '@libp2p/webrtc'
import { webSockets } from '@libp2p/websockets'
import * as filters from '@libp2p/websockets/filters'
import { createLibp2p } from 'libp2p'
import { raceEvent } from 'race-event'
import { isBrowser, isWebWorker } from 'wherearewe'
import { createBaseOptions } from './fixtures/base-options.js'
import type { IdentifyResult, Libp2p } from '@libp2p/interface'

describe('websocket many peers', () => {
  if (isBrowser || isWebWorker) {
    return
  }

  let btNode: Libp2p
  const nodes: Libp2p[] = []

  beforeEach(async () => {
    btNode = await createLibp2p(createBaseOptions({
      addresses: { listen: ['/ip4/127.0.0.1/tcp/0/ws'] },
      transports: [webSockets({ filter: filters.all })],
      connectionEncrypters: [plaintext()],
      streamMuxers: [yamux()],
      connectionGater: { denyDialMultiaddr: () => false },
      connectionManager: { dialTimeout: 10 },
      services: {
        relay: circuitRelayServer({ reservations: { maxReservations: Infinity } }),
        identify: identify(),
        ping: ping()
      }
    }))
    await btNode.start()
  })

  afterEach(async () => {
    await Promise.all(nodes.map(async n => { await n.stop() }))
    await btNode.stop()
  })

  const makeTest = (n: number) => async () => {
    nodes.push(...await Promise.all(Array.from({ length: n }, async () => createLibp2p(createBaseOptions({
      addresses: { listen: ['/p2p-circuit', '/webrtc'] },
      transports: [webSockets({ filter: filters.all }), webRTC(), circuitRelayTransport()],
      connectionEncrypters: [plaintext()],
      streamMuxers: [yamux()],
      connectionGater: { denyDialMultiaddr: () => false },
      services: { identify: identify(), identifyPush: identifyPush(), ping: ping() }
    })))))

    const baseMAs = btNode.getMultiaddrs()

    for (let i = 1; i < nodes.length; i++) {
      await Promise.all([
        raceEvent(btNode, 'peer:identify', undefined, {
          filter: (evt: CustomEvent<IdentifyResult>) => Boolean(evt.detail.signedPeerRecord)
        }),
        nodes[i].start(),
        nodes[0].dial(baseMAs)
      ])
    }
  }

  it('should not crash 10 nodes', makeTest(10))
})
