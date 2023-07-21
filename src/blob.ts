type _BlobConstructor = {
  prototype: Blob;
  new (
    blobParts?: BlobPart[] | undefined,
    options?: BlobPropertyBag | undefined,
  ): Blob;
};

/**
 * If the `globalThis` has a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), or if the `node:buffer` package has a `Blob`, then the `Blob` constructor.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser
 * References the `globalThis.Blob`
 *
 * - Deno
 * References the `globalThis.Blob`
 *
 * - Node.js 18.0+
 * References the [`globalThis.Blob`](https://nodejs.org/api/globals.html#class-blob)
 *
 * - Node.js 15.7+ or 14.18+
 * References the [`Blob`](https://nodejs.org/api/buffer.html#class-blob) of `node:buffer` package
 */
let _Blob: _BlobConstructor;

if ((globalThis as unknown as { Blob: _BlobConstructor }).Blob) {
  _Blob = (globalThis as unknown as { Blob: _BlobConstructor }).Blob;
} else {
  const nodeUrl = "node:buffer";
  const nb = await import(nodeUrl);
  _Blob = nb.Blob;
}
export { _Blob };
