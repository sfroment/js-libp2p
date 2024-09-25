import { InvalidParametersError, InvalidPublicKeyError } from '@libp2p/interface'
import { sha256 } from '@noble/hashes/sha256'
import * as asn1js from 'asn1js'
import { create } from 'multiformats/hashes/digest'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import * as pb from '../keys.js'
import { RSAPrivateKey as RSAPrivateKeyClass, RSAPublicKey as RSAPublicKeyClass } from './rsa.js'
import { generateRSAKey, rsaKeySize } from './index.js'
import type { JWKKeyPair } from '../interface.js'
import type { RSAPrivateKey, RSAPublicKey } from '@libp2p/interface'

export const MAX_RSA_KEY_SIZE = 8192
const SHA2_256_CODE = 0x12

/**
 * Convert a PKCS#1 in ASN1 DER format to a JWK key
 */
export function pkcs1ToJwk (bytes: Uint8Array): JsonWebKey {
  const { result } = asn1js.fromBER(bytes)

  // @ts-expect-error this looks fragile but DER is a canonical format so we are
  // safe to have deeply property chains like this
  const values: asn1js.Integer[] = result.valueBlock.value

  const key = {
    n: uint8ArrayToString(bnToBuf(values[1].toBigInt()), 'base64url'),
    e: uint8ArrayToString(bnToBuf(values[2].toBigInt()), 'base64url'),
    d: uint8ArrayToString(bnToBuf(values[3].toBigInt()), 'base64url'),
    p: uint8ArrayToString(bnToBuf(values[4].toBigInt()), 'base64url'),
    q: uint8ArrayToString(bnToBuf(values[5].toBigInt()), 'base64url'),
    dp: uint8ArrayToString(bnToBuf(values[6].toBigInt()), 'base64url'),
    dq: uint8ArrayToString(bnToBuf(values[7].toBigInt()), 'base64url'),
    qi: uint8ArrayToString(bnToBuf(values[8].toBigInt()), 'base64url'),
    kty: 'RSA',
    alg: 'RS256'
  }

  return key
}

/**
 * Convert a JWK key into PKCS#1 in ASN1 DER format
 */
export function jwkToPkcs1 (jwk: JsonWebKey): Uint8Array {
  if (jwk.n == null || jwk.e == null || jwk.d == null || jwk.p == null || jwk.q == null || jwk.dp == null || jwk.dq == null || jwk.qi == null) {
    throw new InvalidParametersError('JWK was missing components')
  }

  const root = new asn1js.Sequence({
    value: [
      new asn1js.Integer({ value: 0 }),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.n, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.e, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.d, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.p, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.q, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.dp, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.dq, 'base64url'))),
      asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.qi, 'base64url')))
    ]
  })

  const der = root.toBER()

  return new Uint8Array(der, 0, der.byteLength)
}

/**
 * Convert a PKIX in ASN1 DER format to a JWK key
 */
export function pkixToJwk (bytes: Uint8Array): JsonWebKey {
  const { result } = asn1js.fromBER(bytes)

  // @ts-expect-error this looks fragile but DER is a canonical format so we are
  // safe to have deeply property chains like this
  const values: asn1js.Integer[] = result.valueBlock.value[1].valueBlock.value[0].valueBlock.value

  return {
    kty: 'RSA',
    n: uint8ArrayToString(bnToBuf(values[0].toBigInt()), 'base64url'),
    e: uint8ArrayToString(bnToBuf(values[1].toBigInt()), 'base64url')
  }
}

/**
 * Convert a JWK key to PKIX in ASN1 DER format
 */
export function jwkToPkix (jwk: JsonWebKey): Uint8Array {
  if (jwk.n == null || jwk.e == null) {
    throw new InvalidParametersError('JWK was missing components')
  }

  const root = new asn1js.Sequence({
    value: [
      new asn1js.Sequence({
        value: [
          // rsaEncryption
          new asn1js.ObjectIdentifier({
            value: '1.2.840.113549.1.1.1'
          }),
          new asn1js.Null()
        ]
      }),
      // this appears to be a bug in asn1js.js - this should really be a Sequence
      // and not a BitString but it generates the same bytes as node-forge so 🤷‍♂️
      new asn1js.BitString({
        valueHex: new asn1js.Sequence({
          value: [
            asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.n, 'base64url'))),
            asn1js.Integer.fromBigInt(bufToBn(uint8ArrayFromString(jwk.e, 'base64url')))
          ]
        }).toBER()
      })
    ]
  })

  const der = root.toBER()

  return new Uint8Array(der, 0, der.byteLength)
}

function bnToBuf (bn: bigint): Uint8Array {
  let hex = bn.toString(16)

  if (hex.length % 2 > 0) {
    hex = `0${hex}`
  }

  const len = hex.length / 2
  const u8 = new Uint8Array(len)

  let i = 0
  let j = 0

  while (i < len) {
    u8[i] = parseInt(hex.slice(j, j + 2), 16)
    i += 1
    j += 2
  }

  return u8
}

function bufToBn (u8: Uint8Array): bigint {
  const hex: string[] = []

  u8.forEach(function (i) {
    let h = i.toString(16)

    if (h.length % 2 > 0) {
      h = `0${h}`
    }

    hex.push(h)
  })

  return BigInt('0x' + hex.join(''))
}

/**
 * Turn PCKS#1 DER bytes to a PrivateKey
 */
export function pkcs1ToRSAPrivateKey (bytes: Uint8Array): RSAPrivateKey {
  const jwk = pkcs1ToJwk(bytes)

  return jwkToRSAPrivateKey(jwk)
}

/**
 * Turn PKIX bytes to a PublicKey
 */
export function pkixToRSAPublicKey (bytes: Uint8Array): RSAPublicKey {
  const jwk = pkixToJwk(bytes)

  if (rsaKeySize(jwk) > MAX_RSA_KEY_SIZE) {
    throw new InvalidPublicKeyError('Key size is too large')
  }

  const hash = sha256(pb.PublicKey.encode({
    Type: pb.KeyType.RSA,
    Data: bytes
  }))
  const digest = create(SHA2_256_CODE, hash)

  return new RSAPublicKeyClass(jwk, digest)
}

export function jwkToRSAPrivateKey (jwk: JsonWebKey): RSAPrivateKey {
  if (rsaKeySize(jwk) > MAX_RSA_KEY_SIZE) {
    throw new InvalidParametersError('Key size is too large')
  }

  const keys = jwkToJWKKeyPair(jwk)
  const hash = sha256(pb.PublicKey.encode({
    Type: pb.KeyType.RSA,
    Data: jwkToPkix(keys.publicKey)
  }))
  const digest = create(SHA2_256_CODE, hash)

  return new RSAPrivateKeyClass(keys.privateKey, new RSAPublicKeyClass(keys.publicKey, digest))
}

export async function generateRSAKeyPair (bits: number): Promise<RSAPrivateKey> {
  if (bits > MAX_RSA_KEY_SIZE) {
    throw new InvalidParametersError('Key size is too large')
  }

  const keys = await generateRSAKey(bits)
  const hash = sha256(pb.PublicKey.encode({
    Type: pb.KeyType.RSA,
    Data: jwkToPkix(keys.publicKey)
  }))
  const digest = create(SHA2_256_CODE, hash)

  return new RSAPrivateKeyClass(keys.privateKey, new RSAPublicKeyClass(keys.publicKey, digest))
}

/**
 * Takes a jwk key and returns a JWK KeyPair
 */
export function jwkToJWKKeyPair (key: JsonWebKey): JWKKeyPair {
  if (key == null) {
    throw new InvalidParametersError('Missing key parameter')
  }

  return {
    privateKey: key,
    publicKey: {
      kty: key.kty,
      n: key.n,
      e: key.e
    }
  }
}