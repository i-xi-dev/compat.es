type _FileConstructor = {
  prototype: File;
  new (
    fileBits: BlobPart[],
    fileName: string,
    options?: FilePropertyBag,
  ): File;
};

/**
 * If the `globalThis` has a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File), or if the `node:buffer` package has a `File`, then the `File` constructor.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser
 * References the `globalThis.File`
 *
 * - Deno
 * References the `globalThis.File`
 *
 * - Node.js 20.0+
 * References the [`globalThis.File`](https://nodejs.org/api/globals.html#class-file)
 *
 * - Node.js 19.2+ or 18.13+
 * References the [`File`](https://nodejs.org/api/buffer.html#class-file) of `node:buffer` package
 */
let _File: _FileConstructor;

if ((globalThis as unknown as { File: _FileConstructor }).File) {
  _File = (globalThis as unknown as { File: _FileConstructor }).File;
} else {
  const nodeUrl = "node:buffer";
  const nb = await import(nodeUrl);
  _File = nb.File;
}
export { _File };
