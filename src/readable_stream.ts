let _ReadableStream: {
  prototype: ReadableStream;
  new <T>(
    underlyingSource?: UnderlyingSource<T> | undefined,
    strategy?: QueuingStrategy<T> | undefined,
  ): ReadableStream<T>;
};
if (globalThis.ReadableStream) {
  _ReadableStream = globalThis.ReadableStream;
} else {
  const nodeUrl = "node:stream/web";
  const nsw = await import(nodeUrl);
  _ReadableStream = nsw.ReadableStream;
}
export { _ReadableStream };
