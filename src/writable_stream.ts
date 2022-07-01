let _WritableStream: {
  prototype: WritableStream;
  new <T>(
    underlyingSink?: UnderlyingSink<T> | undefined,
    strategy?: QueuingStrategy<T> | undefined,
  ): WritableStream<T>;
};
if (globalThis.WritableStream) {
  _WritableStream = globalThis.WritableStream;
} else {
  const nodeUrl = "node:stream/web";
  const nsw = await import(nodeUrl);
  _WritableStream = nsw.WritableStream;
}
export { _WritableStream };
