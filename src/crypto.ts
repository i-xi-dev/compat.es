/**
 * If the `globalThis` has a [`crypto`](https://developer.mozilla.org/en-US/docs/Web/API/crypto_property), or if the `node:crypto` package has a `webcrypto`, then the `Crypto` object.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser  
 * References the `globalThis.crypto`
 *
 * - Deno  
 * References the `globalThis.crypto`
 *
 * - Node.js 19.0+  
 * References the `globalThis.crypto`
 *
 * - Node.js 15.0+  
 * References the [`webcrypto`](https://nodejs.org/api/webcrypto.html#class-crypto) of `node:crypto` package
 */
let _crypto: Crypto;

if (globalThis.crypto) {
  _crypto = globalThis.crypto;
} else {
  const nodeUrl = "node:crypto";
  const nc = await import(nodeUrl);
  _crypto = nc.webcrypto;
}
export { _crypto };
