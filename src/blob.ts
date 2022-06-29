type _BlobType = {
  prototype: Blob;
  new (
    blobParts?: BlobPart[] | undefined,
    options?: BlobPropertyBag | undefined,
  ): Blob;
};
let _Blob: _BlobType;
if ((globalThis as unknown as { Blob: _BlobType }).Blob) {
  _Blob = (globalThis as unknown as { Blob: _BlobType }).Blob;
} else {
  const nodeUrl = "node:buffer";
  const nb = await import(nodeUrl);
  _Blob = nb.Blob;
}
export { _Blob };
