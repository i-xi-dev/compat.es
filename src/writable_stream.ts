/**
 * If the `globalThis` has a [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream), or if the `node:stream/web` package has a `WritableStream`, then the `WritableStream` constructor.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser
 * References the `globalThis.WritableStream`
 *
 * - Deno
 * References the `globalThis.WritableStream`
 *
 * - Node.js 18.0+
 * References the `globalThis.WritableStream`
 *
 * - Node.js 15.7+ or 14.18+
 * References the [`WritableStream`](https://nodejs.org/api/webstreams.html#class-writablestream) of `node:stream/web` package
 */
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
