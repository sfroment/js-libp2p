:robot: I have created a release *beep* *boop*
---


<details><summary>autonat: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/autonat-v1.1.5...autonat-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>bootstrap: 11.0.0</summary>

## [11.0.0](https://github.com/libp2p/js-libp2p/compare/bootstrap-v10.1.5...bootstrap-v11.0.0) (2024-09-11)


###   BREAKING CHANGES

* the autodialer has been removed as well as the corresponding config keys

### Bug Fixes

* remove autodialer ([#2639](https://github.com/libp2p/js-libp2p/issues/2639)) ([ab90179](https://github.com/libp2p/js-libp2p/commit/ab901790810d8ce59724af1706c9a9e74341b8ee))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.3 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>circuit-relay-v2: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/circuit-relay-v2-v1.1.5...circuit-relay-v2-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/peer-record bumped from ^7.0.25 to ^8.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
</details>

<details><summary>crypto: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/crypto-v4.1.9...crypto-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
</details>

<details><summary>dcutr: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/dcutr-v1.1.5...dcutr-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
</details>

<details><summary>devtools-metrics: 1.0.0</summary>

## [1.0.0](https://github.com/libp2p/js-libp2p/compare/devtools-metrics-v0.2.5...devtools-metrics-v1.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead

### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/simple-metrics bumped from ^1.1.5 to ^1.1.6
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
</details>

<details><summary>echo: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/echo-v1.1.5...echo-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>fetch: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/fetch-v1.1.5...fetch-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>floodsub: 10.0.0</summary>

## [10.0.0](https://github.com/libp2p/js-libp2p/compare/floodsub-v9.1.5...floodsub-v10.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/pubsub bumped from ^9.0.26 to ^10.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>identify: 3.0.0</summary>

## [3.0.0](https://github.com/libp2p/js-libp2p/compare/identify-v2.1.5...identify-v3.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/peer-record bumped from ^7.0.25 to ^8.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>interface: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/interface-v1.7.0...interface-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* instead of `CodeError`, use `TimeoutError`, `UnexpectedPeerError`, etc
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add optional generics to metric groups ([#2665](https://github.com/libp2p/js-libp2p/issues/2665)) ([df33069](https://github.com/libp2p/js-libp2p/commit/df330695a0ee627f79c51c1ab737cbf3278a91e8))
* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove CodeError class ([#2688](https://github.com/libp2p/js-libp2p/issues/2688)) ([81ebe4e](https://github.com/libp2p/js-libp2p/commit/81ebe4e47e82508a847bb3af0af36cc249b78765))
* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)
</details>

<details><summary>interface-compliance-tests: 6.0.0</summary>

## [6.0.0](https://github.com/libp2p/js-libp2p/compare/interface-compliance-tests-v5.4.12...interface-compliance-tests-v6.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/multistream-select bumped from ^5.1.17 to ^6.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
</details>

<details><summary>interface-internal: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/interface-internal-v1.3.4...interface-internal-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Bug Fixes

* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
</details>

<details><summary>kad-dht: 13.0.0</summary>

## [13.0.0](https://github.com/libp2p/js-libp2p/compare/kad-dht-v12.1.5...kad-dht-v13.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-store bumped from ^10.1.5 to ^11.0.0
</details>

<details><summary>keychain: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/keychain-v4.1.6...keychain-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>logger: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/logger-v4.0.20...logger-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
  * devDependencies
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>mdns: 11.0.0</summary>

## [11.0.0](https://github.com/libp2p/js-libp2p/compare/mdns-v10.1.5...mdns-v11.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Bug Fixes

* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>mplex: 11.0.0</summary>

## [11.0.0](https://github.com/libp2p/js-libp2p/compare/mplex-v10.1.5...mplex-v11.0.0) (2024-09-11)


###   BREAKING CHANGES

* instead of `CodeError`, use `TimeoutError`, `UnexpectedPeerError`, etc
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add deprecation warning to mplex ([3b43a37](https://github.com/libp2p/js-libp2p/commit/3b43a373dc81f3d4f619e0ff7929161ec5370e97))
* remove CodeError class ([#2688](https://github.com/libp2p/js-libp2p/issues/2688)) ([81ebe4e](https://github.com/libp2p/js-libp2p/commit/81ebe4e47e82508a847bb3af0af36cc249b78765))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>multistream-select: 6.0.0</summary>

## [6.0.0](https://github.com/libp2p/js-libp2p/compare/multistream-select-v5.1.17...multistream-select-v6.0.0) (2024-09-11)


###   BREAKING CHANGES

* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>peer-collections: 6.0.0</summary>

## [6.0.0](https://github.com/libp2p/js-libp2p/compare/peer-collections-v5.2.9...peer-collections-v6.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead

### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
</details>

<details><summary>peer-id: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/peer-id-v4.2.4...peer-id-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
</details>

<details><summary>peer-record: 8.0.0</summary>

## [8.0.0](https://github.com/libp2p/js-libp2p/compare/peer-record-v7.0.25...peer-record-v8.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
</details>

<details><summary>peer-store: 11.0.0</summary>

## [11.0.0](https://github.com/libp2p/js-libp2p/compare/peer-store-v10.1.5...peer-store-v11.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/peer-record bumped from ^7.0.25 to ^8.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>perf: 4.0.0</summary>

## [4.0.0](https://github.com/libp2p/js-libp2p/compare/perf-v3.1.5...perf-v4.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Bug Fixes

* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Documentation

* remove mplex from docs ([b6681bd](https://github.com/libp2p/js-libp2p/commit/b6681bd2505ac2749192042c3f16b14a88a8656d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>ping: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/ping-v1.1.6...ping-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>plaintext: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/plaintext-v1.1.6...plaintext-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>pnet: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/pnet-v1.0.0...pnet-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* the `minSendBytes` option has been removed from Mplex since the transport can now decide how to optimise sending data
* imports from `libp2p/dcutr` now need to be from `@libp2p/dcutr`
* the `isStarted` method has been removed from the `Startable` interface

### Features

* allow stream muxers and connection encrypters to yield lists ([#2256](https://github.com/libp2p/js-libp2p/issues/2256)) ([4a474d5](https://github.com/libp2p/js-libp2p/commit/4a474d54d3299e0ac30fa143b57436b3cf45e426))
* check service dependencies on startup ([#2586](https://github.com/libp2p/js-libp2p/issues/2586)) ([d1f1c2b](https://github.com/libp2p/js-libp2p/commit/d1f1c2be78bd195f404e62627c2c9f545845e5f5))
* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add @libp2p/record module to monorepo ([#2466](https://github.com/libp2p/js-libp2p/issues/2466)) ([3ffecc5](https://github.com/libp2p/js-libp2p/commit/3ffecc5bfe806a678c1b0228ff830f1811630718))
* align dependency versions and update project config ([#2357](https://github.com/libp2p/js-libp2p/issues/2357)) ([8bbd436](https://github.com/libp2p/js-libp2p/commit/8bbd43628343f995804eea3102d0571ddcebc5c4))
* do not wait for stream reads and writes at the same time ([#2290](https://github.com/libp2p/js-libp2p/issues/2290)) ([10ea197](https://github.com/libp2p/js-libp2p/commit/10ea19700ae0c464734c88eb5922e2faeb27446a))
* mark all packages side-effect free ([#2360](https://github.com/libp2p/js-libp2p/issues/2360)) ([3c96210](https://github.com/libp2p/js-libp2p/commit/3c96210cf6343b21199996918bae3a0f60220046))
* remove extra deps ([#2340](https://github.com/libp2p/js-libp2p/issues/2340)) ([53e83ee](https://github.com/libp2p/js-libp2p/commit/53e83eea50410391ec9cff4cd8097210b93894ff))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* restore lost commits ([#2268](https://github.com/libp2p/js-libp2p/issues/2268)) ([5775f1d](https://github.com/libp2p/js-libp2p/commit/5775f1df4f5561500e622dc0788fdacbc74e2755))
* update patch versions of deps ([#2397](https://github.com/libp2p/js-libp2p/issues/2397)) ([0321812](https://github.com/libp2p/js-libp2p/commit/0321812e731515558f35ae2d53242035a343a21a))
* update project config ([48444f7](https://github.com/libp2p/js-libp2p/commit/48444f750ebe3f03290bf70e84d7590edc030ea4))
* use logging component everywhere ([#2228](https://github.com/libp2p/js-libp2p/issues/2228)) ([e5dfde0](https://github.com/libp2p/js-libp2p/commit/e5dfde0883191c93903ca552433f177d48adf0b3))


### Documentation

* add doc-check to all modules ([#2419](https://github.com/libp2p/js-libp2p/issues/2419)) ([6cdb243](https://github.com/libp2p/js-libp2p/commit/6cdb24362de9991e749f76b16fcd4c130e8106a0))
* fix broken links in docs site ([#2497](https://github.com/libp2p/js-libp2p/issues/2497)) ([fd1f834](https://github.com/libp2p/js-libp2p/commit/fd1f8343db030d74cd08bca6a0cffda93532765f)), closes [#2423](https://github.com/libp2p/js-libp2p/issues/2423)


### Dependencies

* bump aegir from 42.2.11 to 43.0.1 ([#2571](https://github.com/libp2p/js-libp2p/issues/2571)) ([757fb26](https://github.com/libp2p/js-libp2p/commit/757fb2674f0a3e06fd46d3ff63f7f461c32d47d2))
* bump aegir from 43.0.3 to 44.0.1 ([#2603](https://github.com/libp2p/js-libp2p/issues/2603)) ([944935f](https://github.com/libp2p/js-libp2p/commit/944935f8dbcc1083e4cb4a02b49a0aab3083d3d9))
* bump uint8arrays from 4.0.10 to 5.0.0 ([#2307](https://github.com/libp2p/js-libp2p/issues/2307)) ([6d11e82](https://github.com/libp2p/js-libp2p/commit/6d11e8268b16e0bf4bc520f42abb71a228d5dc57))
* update sibling dependencies ([178fe26](https://github.com/libp2p/js-libp2p/commit/178fe2671a7af9870bdd111de9073843a2a29b34))
## [2.0.0](https://github.com/libp2p/js-libp2p/compare/pnet-v1.0.0...pnet-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* the `minSendBytes` option has been removed from Mplex since the transport can now decide how to optimise sending data
* imports from `libp2p/dcutr` now need to be from `@libp2p/dcutr`
* the `isStarted` method has been removed from the `Startable` interface

### Features

* allow stream muxers and connection encrypters to yield lists ([#2256](https://github.com/libp2p/js-libp2p/issues/2256)) ([4a474d5](https://github.com/libp2p/js-libp2p/commit/4a474d54d3299e0ac30fa143b57436b3cf45e426))
* check service dependencies on startup ([#2586](https://github.com/libp2p/js-libp2p/issues/2586)) ([d1f1c2b](https://github.com/libp2p/js-libp2p/commit/d1f1c2be78bd195f404e62627c2c9f545845e5f5))
* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add @libp2p/record module to monorepo ([#2466](https://github.com/libp2p/js-libp2p/issues/2466)) ([3ffecc5](https://github.com/libp2p/js-libp2p/commit/3ffecc5bfe806a678c1b0228ff830f1811630718))
* align dependency versions and update project config ([#2357](https://github.com/libp2p/js-libp2p/issues/2357)) ([8bbd436](https://github.com/libp2p/js-libp2p/commit/8bbd43628343f995804eea3102d0571ddcebc5c4))
* do not wait for stream reads and writes at the same time ([#2290](https://github.com/libp2p/js-libp2p/issues/2290)) ([10ea197](https://github.com/libp2p/js-libp2p/commit/10ea19700ae0c464734c88eb5922e2faeb27446a))
* mark all packages side-effect free ([#2360](https://github.com/libp2p/js-libp2p/issues/2360)) ([3c96210](https://github.com/libp2p/js-libp2p/commit/3c96210cf6343b21199996918bae3a0f60220046))
* remove extra deps ([#2340](https://github.com/libp2p/js-libp2p/issues/2340)) ([53e83ee](https://github.com/libp2p/js-libp2p/commit/53e83eea50410391ec9cff4cd8097210b93894ff))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* restore lost commits ([#2268](https://github.com/libp2p/js-libp2p/issues/2268)) ([5775f1d](https://github.com/libp2p/js-libp2p/commit/5775f1df4f5561500e622dc0788fdacbc74e2755))
* update patch versions of deps ([#2397](https://github.com/libp2p/js-libp2p/issues/2397)) ([0321812](https://github.com/libp2p/js-libp2p/commit/0321812e731515558f35ae2d53242035a343a21a))
* update project config ([48444f7](https://github.com/libp2p/js-libp2p/commit/48444f750ebe3f03290bf70e84d7590edc030ea4))
* use logging component everywhere ([#2228](https://github.com/libp2p/js-libp2p/issues/2228)) ([e5dfde0](https://github.com/libp2p/js-libp2p/commit/e5dfde0883191c93903ca552433f177d48adf0b3))


### Documentation

* add doc-check to all modules ([#2419](https://github.com/libp2p/js-libp2p/issues/2419)) ([6cdb243](https://github.com/libp2p/js-libp2p/commit/6cdb24362de9991e749f76b16fcd4c130e8106a0))
* fix broken links in docs site ([#2497](https://github.com/libp2p/js-libp2p/issues/2497)) ([fd1f834](https://github.com/libp2p/js-libp2p/commit/fd1f8343db030d74cd08bca6a0cffda93532765f)), closes [#2423](https://github.com/libp2p/js-libp2p/issues/2423)


### Dependencies

* bump aegir from 42.2.11 to 43.0.1 ([#2571](https://github.com/libp2p/js-libp2p/issues/2571)) ([757fb26](https://github.com/libp2p/js-libp2p/commit/757fb2674f0a3e06fd46d3ff63f7f461c32d47d2))
* bump aegir from 43.0.3 to 44.0.1 ([#2603](https://github.com/libp2p/js-libp2p/issues/2603)) ([944935f](https://github.com/libp2p/js-libp2p/commit/944935f8dbcc1083e4cb4a02b49a0aab3083d3d9))
* bump uint8arrays from 4.0.10 to 5.0.0 ([#2307](https://github.com/libp2p/js-libp2p/issues/2307)) ([6d11e82](https://github.com/libp2p/js-libp2p/commit/6d11e8268b16e0bf4bc520f42abb71a228d5dc57))
* update sibling dependencies ([178fe26](https://github.com/libp2p/js-libp2p/commit/178fe2671a7af9870bdd111de9073843a2a29b34))


### Refactors

* extract DCUtR into separate module ([#2220](https://github.com/libp2p/js-libp2p/issues/2220)) ([d2c3e72](https://github.com/libp2p/js-libp2p/commit/d2c3e7235b64558c6cace414c54a42659fee2970))
* remove isStarted method from Startable ([#2145](https://github.com/libp2p/js-libp2p/issues/2145)) ([fca208f](https://github.com/libp2p/js-libp2p/commit/fca208f3763af041aa37b1cb915d2bc777acb96d))


### Refactors

* extract DCUtR into separate module ([#2220](https://github.com/libp2p/js-libp2p/issues/2220)) ([d2c3e72](https://github.com/libp2p/js-libp2p/commit/d2c3e7235b64558c6cace414c54a42659fee2970))
* remove isStarted method from Startable ([#2145](https://github.com/libp2p/js-libp2p/issues/2145)) ([fca208f](https://github.com/libp2p/js-libp2p/commit/fca208f3763af041aa37b1cb915d2bc777acb96d))
</details>

<details><summary>prometheus-metrics: 4.0.0</summary>

## [4.0.0](https://github.com/libp2p/js-libp2p/compare/prometheus-metrics-v3.1.5...prometheus-metrics-v4.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead

### Bug Fixes

* add optional generics to metric groups ([#2665](https://github.com/libp2p/js-libp2p/issues/2665)) ([df33069](https://github.com/libp2p/js-libp2p/commit/df330695a0ee627f79c51c1ab737cbf3278a91e8))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>pubsub: 10.0.0</summary>

## [10.0.0](https://github.com/libp2p/js-libp2p/compare/pubsub-v9.0.26...pubsub-v10.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>simple-metrics: 1.1.6</summary>

## [1.1.6](https://github.com/libp2p/js-libp2p/compare/simple-metrics-v1.1.5...simple-metrics-v1.1.6) (2024-09-11)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>tcp: 10.0.0</summary>

## [10.0.0](https://github.com/libp2p/js-libp2p/compare/tcp-v9.1.6...tcp-v10.0.0) (2024-09-11)


###   BREAKING CHANGES

* instead of `CodeError`, use `TimeoutError`, `UnexpectedPeerError`, etc
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add optional generics to metric groups ([#2665](https://github.com/libp2p/js-libp2p/issues/2665)) ([df33069](https://github.com/libp2p/js-libp2p/commit/df330695a0ee627f79c51c1ab737cbf3278a91e8))
* remove CodeError class ([#2688](https://github.com/libp2p/js-libp2p/issues/2688)) ([81ebe4e](https://github.com/libp2p/js-libp2p/commit/81ebe4e47e82508a847bb3af0af36cc249b78765))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>tls: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/tls-v1.1.5...tls-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>upnp-nat: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/upnp-nat-v1.2.5...upnp-nat-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
</details>

<details><summary>utils: 6.0.0</summary>

## [6.0.0](https://github.com/libp2p/js-libp2p/compare/utils-v5.4.9...utils-v6.0.0) (2024-09-11)


###   BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* remove while loop for setbit & getbit ([#2687](https://github.com/libp2p/js-libp2p/issues/2687)) ([a142bb6](https://github.com/libp2p/js-libp2p/commit/a142bb642b3a232479c79a7da235508f0022dd94))
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>webrtc: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/webrtc-v4.1.10...webrtc-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* the autodialer has been removed as well as the corresponding config keys
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove autodialer ([#2639](https://github.com/libp2p/js-libp2p/issues/2639)) ([ab90179](https://github.com/libp2p/js-libp2p/commit/ab901790810d8ce59724af1706c9a9e74341b8ee))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Dependencies

* bump react-native-webrtc from 118.0.7 to 124.0.4 ([#2685](https://github.com/libp2p/js-libp2p/issues/2685)) ([5214dec](https://github.com/libp2p/js-libp2p/commit/5214dec4a0b7e7cb82056b9a681f1c77e82d34a2))
* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/circuit-relay-v2 bumped from ^1.1.5 to ^2.0.0
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/identify bumped from ^2.1.5 to ^3.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/websockets bumped from ^8.2.0 to ^9.0.0
    * libp2p bumped from ^1.9.4 to ^2.0.0
</details>

<details><summary>websockets: 9.0.0</summary>

## [9.0.0](https://github.com/libp2p/js-libp2p/compare/websockets-v8.2.0...websockets-v9.0.0) (2024-09-11)


###   BREAKING CHANGES

* The `.code` property has been removed from most errors, use `.name` instead

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
</details>

<details><summary>webtransport: 5.0.0</summary>

## [5.0.0](https://github.com/libp2p/js-libp2p/compare/webtransport-v4.1.9...webtransport-v5.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* the autodialer has been removed as well as the corresponding config keys
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove autodialer ([#2639](https://github.com/libp2p/js-libp2p/issues/2639)) ([ab90179](https://github.com/libp2p/js-libp2p/commit/ab901790810d8ce59724af1706c9a9e74341b8ee))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Documentation

* remove mplex from docs ([b6681bd](https://github.com/libp2p/js-libp2p/commit/b6681bd2505ac2749192042c3f16b14a88a8656d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/ping bumped from ^1.1.6 to ^2.0.0
    * libp2p bumped from ^1.9.4 to ^2.0.0
</details>

<details><summary>libp2p: 2.0.0</summary>

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/libp2p-v1.9.4...libp2p-v2.0.0) (2024-09-11)


###   BREAKING CHANGES

* the `connectionEncryption` option has been renamed `connectionEncrypters`
* instead of `CodeError`, use `TimeoutError`, `UnexpectedPeerError`, etc
* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* the final argument to `secureOutbound` and `secureInbound` in the `ConnectionEncrypter` interface is now an options object
* the autodialer has been removed as well as the corresponding config keys
* The `.code` property has been removed from most errors, use `.name` instead
* removes `localPeer: PeerId` first parameter from `secureInbound` and `secureOutbound` in `ConnectionEncrypter`
* * The `notifyOnTransient` property of `libp2p.register` has been renamed `notifyOnLimitedConnection`
* `@libp2p/interface` no longer exports a `CustomEvent` polyfill

### Features

* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* abort connection only when abortConnectionOnPingFailure is true ([#2684](https://github.com/libp2p/js-libp2p/issues/2684)) ([2022036](https://github.com/libp2p/js-libp2p/commit/2022036dfcbbd32289beac28f2fa4c1810f39f2b))
* make connection securing abortable ([#2662](https://github.com/libp2p/js-libp2p/issues/2662)) ([51f7b57](https://github.com/libp2p/js-libp2p/commit/51f7b570c3a5bae8dd7da7edbc4145893328400e))
* remove autodialer ([#2639](https://github.com/libp2p/js-libp2p/issues/2639)) ([ab90179](https://github.com/libp2p/js-libp2p/commit/ab901790810d8ce59724af1706c9a9e74341b8ee))
* remove CodeError class ([#2688](https://github.com/libp2p/js-libp2p/issues/2688)) ([81ebe4e](https://github.com/libp2p/js-libp2p/commit/81ebe4e47e82508a847bb3af0af36cc249b78765))
* remove CustomEvent export from `@libp2p/interface` ([#2656](https://github.com/libp2p/js-libp2p/issues/2656)) ([fab6fc9](https://github.com/libp2p/js-libp2p/commit/fab6fc960b6bc03a6bc00ae5a4b3551d7d080c73))
* remove localPeer from secureInbound and secureOutbound ([#2304](https://github.com/libp2p/js-libp2p/issues/2304)) ([b435a21](https://github.com/libp2p/js-libp2p/commit/b435a214cf342c6015f474d26143fc27f0f673e9))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* rename "transient" connections to "limited" ([#2645](https://github.com/libp2p/js-libp2p/issues/2645)) ([2988602](https://github.com/libp2p/js-libp2p/commit/29886022eddc8a793217b2c888beac8aef63f1be)), closes [#2622](https://github.com/libp2p/js-libp2p/issues/2622)
* rename connectionEncryption option to connectionEncrypters ([#2691](https://github.com/libp2p/js-libp2p/issues/2691)) ([6d72709](https://github.com/libp2p/js-libp2p/commit/6d72709ba5959388777610e2f71b8ba9522139b6))


### Documentation

* remove mplex from docs ([b6681bd](https://github.com/libp2p/js-libp2p/commit/b6681bd2505ac2749192042c3f16b14a88a8656d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^4.1.9 to ^5.0.0
    * @libp2p/interface bumped from ^1.7.0 to ^2.0.0
    * @libp2p/interface-internal bumped from ^1.3.4 to ^2.0.0
    * @libp2p/logger bumped from ^4.0.20 to ^5.0.0
    * @libp2p/multistream-select bumped from ^5.1.17 to ^6.0.0
    * @libp2p/peer-collections bumped from ^5.2.9 to ^6.0.0
    * @libp2p/peer-id bumped from ^4.2.4 to ^5.0.0
    * @libp2p/peer-store bumped from ^10.1.5 to ^11.0.0
    * @libp2p/utils bumped from ^5.4.9 to ^6.0.0
  * devDependencies
    * @libp2p/circuit-relay-v2 bumped from ^1.1.5 to ^2.0.0
    * @libp2p/identify bumped from ^2.1.5 to ^3.0.0
    * @libp2p/interface-compliance-tests bumped from ^5.4.12 to ^6.0.0
    * @libp2p/mplex bumped from ^10.1.5 to ^11.0.0
    * @libp2p/plaintext bumped from ^1.1.6 to ^2.0.0
    * @libp2p/tcp bumped from ^9.1.6 to ^10.0.0
    * @libp2p/websockets bumped from ^8.2.0 to ^9.0.0
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).