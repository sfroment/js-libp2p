/* eslint-env mocha */

import { webSockets } from '@libp2p/websockets'
import * as filters from '@libp2p/websockets/filters'
import { createLibp2p } from 'libp2p'
import { isBrowser, isWebWorker } from 'wherearewe'
import { createBaseOptions } from './fixtures/base-options.js'
import type { Libp2p } from '@libp2p/interface'

describe('websocket many peers', () => {
  if (isBrowser || isWebWorker) {
    return
  }

  let nodes: Libp2p[]

  beforeEach(async () => {
    nodes = await Promise.all([
      createLibp2p(createBaseOptions({
        addresses: { listen: ['/ip4/127.0.0.1/tcp/0/ws'] },
        transports: [webSockets({ filter: filters.all })]
      }))
    ])
  })

  afterEach(async () => Promise.all(nodes.map(async n => { await n.stop() })))

  const makeTest = (n: number) => async () => {
    nodes.push(...await Promise.all(Array.from({ length: n }, async () => createLibp2p(createBaseOptions({
      addresses: { listen: ['/ip4/127.0.0.1/tcp/0/ws'] },
      transports: [webSockets({ filter: filters.all })]
    })))))

    const baseNode = nodes[0]
    const baseMAs = baseNode.getMultiaddrs()

    for (let i = 1; i < nodes.length; i++) {
      await nodes[i].dial(baseMAs)
    }
  }

  it('should not crash 5 nodes', makeTest(5))

  it('should not crash 10 nodes', makeTest(10))
})
