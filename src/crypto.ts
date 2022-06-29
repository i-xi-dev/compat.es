let _crypto: Crypto;
if (globalThis.crypto) {
  _crypto = globalThis.crypto;
} else {
  const nodeUrl = "node:crypto";
  const nc = await import(nodeUrl);
  _crypto = nc.webcrypto;
}
export { _crypto };
