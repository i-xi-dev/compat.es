/**
 * If the `globalThis` has a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream), or if the `node:stream/web` package has a `ReadableStream`, then the `ReadableStream` constructor.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser  
 * References the `globalThis.ReadableStream`
 *
 * - Deno  
 * References the `globalThis.ReadableStream`
 *
 * - Node.js 18.0+  
 * References the `globalThis.ReadableStream`
 * 
 * - Node.js 15.7+ or 14.18+  
 * References the [`ReadableStream`](https://nodejs.org/api/webstreams.html#class-readablestream) of `node:stream/web` package
 */
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
