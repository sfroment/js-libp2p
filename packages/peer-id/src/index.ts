/**
 * @packageDocumentation
 *
 * An implementation of a peer id
 *
 * @example
 *
 * ```TypeScript
 * import { peerIdFromString } from '@libp2p/peer-id'
 * import { base36 } from 'multiformats/bases/base36'
 *
 * const peer = peerIdFromString('k51qzi5uqu5dkwkqm42v9j9kqcam2jiuvloi16g72i4i4amoo2m8u3ol3mqu6s', base36.decoder)
 *
 * console.log(peer.toCID()) // CID(bafzaa...)
 * console.log(peer.toString()) // "12D3K..."
 * ```
 */

import { publicKeyFromMultihash } from '@libp2p/crypto/keys'
import { InvalidCIDError, InvalidMultihashError, InvalidParametersError, UnsupportedKeyTypeError } from '@libp2p/interface'
import { base58btc } from 'multiformats/bases/base58'
import { type MultibaseDecoder } from 'multiformats/cid'
import { CID } from 'multiformats/cid'
import * as Digest from 'multiformats/hashes/digest'
import { identity } from 'multiformats/hashes/identity'
import { sha256 } from 'multiformats/hashes/sha2'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import { RSAPeerId as RSAPeerIdClass, Ed25519PeerId as Ed25519PeerIdClass, Secp256k1PeerId as Secp256k1PeerIdClass, URLPeerId as URLPeerIdClass } from './peer-id.js'
import type { Ed25519PeerId, RSAPeerId, URLPeerId, Secp256k1PeerId, PeerId, PublicKey, Ed25519PublicKey, Secp256k1PublicKey, RSAPublicKey, Ed25519PrivateKey, Secp256k1PrivateKey, RSAPrivateKey, PrivateKey } from '@libp2p/interface'
import type { MultihashDigest } from 'multiformats/hashes/interface'

// these values are from https://github.com/multiformats/multicodec/blob/master/table.csv
const LIBP2P_KEY_CODE = 0x72
const TRANSPORT_IPFS_GATEWAY_HTTP_CODE = 0x0920

export function peerIdFromString (str: string, decoder?: MultibaseDecoder<any>): Ed25519PeerId | Secp256k1PeerId | RSAPeerId | URLPeerId {
  let multihash: MultihashDigest

  if (str.charAt(0) === '1' || str.charAt(0) === 'Q') {
    // identity hash ed25519/secp256k1 key or sha2-256 hash of
    // rsa public key - base58btc encoded either way
    multihash = Digest.decode(base58btc.decode(`z${str}`))
    return peerIdFromMultihash(multihash)
  }

  if (decoder == null) {
    throw new InvalidParametersError('Please pass a multibase decoder for strings that do not start with "1" or "Q"')
  }

  let buf: Uint8Array
  try {
    buf = decoder.decode(str)
  } catch (err) {
    throw new InvalidParametersError('The passed PeerID string could not be decoded using the provided multibase decoder')
  }

  try {
    multihash = Digest.decode(buf)
    return peerIdFromMultihash(multihash)
  } catch (err) {
    return peerIdFromCID(CID.decode(buf))
  }
}

export function peerIdFromPublicKey (publicKey: Ed25519PublicKey): Ed25519PeerId
export function peerIdFromPublicKey (publicKey: Secp256k1PublicKey): Secp256k1PeerId
export function peerIdFromPublicKey (publicKey: RSAPublicKey): RSAPeerId
export function peerIdFromPublicKey (publicKey: PublicKey): PeerId
export function peerIdFromPublicKey (publicKey: PublicKey): PeerId {
  if (publicKey.type === 'Ed25519') {
    return new Ed25519PeerIdClass({
      multihash: publicKey.toCID().multihash,
      publicKey
    })
  } else if (publicKey.type === 'secp256k1') {
    return new Secp256k1PeerIdClass({
      multihash: publicKey.toCID().multihash,
      publicKey
    })
  } else if (publicKey.type === 'RSA') {
    return new RSAPeerIdClass({
      multihash: publicKey.toCID().multihash,
      publicKey
    })
  }

  throw new UnsupportedKeyTypeError()
}

export function peerIdFromPrivateKey (privateKey: Ed25519PrivateKey): Ed25519PeerId
export function peerIdFromPrivateKey (privateKey: Secp256k1PrivateKey): Secp256k1PeerId
export function peerIdFromPrivateKey (privateKey: RSAPrivateKey): RSAPeerId
export function peerIdFromPrivateKey (privateKey: PrivateKey): PeerId
export function peerIdFromPrivateKey (privateKey: PrivateKey): PeerId {
  return peerIdFromPublicKey(privateKey.publicKey)
}

export function peerIdFromMultihash (multihash: MultihashDigest): PeerId {
  if (isSha256Multihash(multihash)) {
    return new RSAPeerIdClass({ multihash })
  } else if (isIdentityMultihash(multihash)) {
    try {
      const publicKey = publicKeyFromMultihash(multihash)

      if (publicKey.type === 'Ed25519') {
        return new Ed25519PeerIdClass({ multihash, publicKey })
      } else if (publicKey.type === 'secp256k1') {
        return new Secp256k1PeerIdClass({ multihash, publicKey })
      }
    } catch (err) {
      // was not Ed or secp key, try URL
      const url = uint8ArrayToString(multihash.digest)

      return new URLPeerIdClass(new URL(url))
    }
  }

  throw new InvalidMultihashError('Supplied PeerID Multihash is invalid')
}

export function peerIdFromCID (cid: CID): Ed25519PeerId | Secp256k1PeerId | RSAPeerId | URLPeerId {
  if (cid?.multihash == null || cid.version == null || (cid.version === 1 && (cid.code !== LIBP2P_KEY_CODE) && cid.code !== TRANSPORT_IPFS_GATEWAY_HTTP_CODE)) {
    throw new InvalidCIDError('Supplied PeerID CID is invalid')
  }

  if (cid.code === TRANSPORT_IPFS_GATEWAY_HTTP_CODE) {
    const url = uint8ArrayToString(cid.multihash.digest)

    return new URLPeerIdClass(new URL(url))
  }

  return peerIdFromMultihash(cid.multihash)
}

function isIdentityMultihash (multihash: MultihashDigest): multihash is MultihashDigest<0x0> {
  return multihash.code === identity.code
}

function isSha256Multihash (multihash: MultihashDigest): multihash is MultihashDigest<0x12> {
  return multihash.code === sha256.code
}
