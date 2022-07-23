/**
 * If the `globalThis` has a [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream), or if the `node:stream/web` package has a `TransformStream`, then the `TransformStream` constructor.
 * Otherwise referencing it will throw a `ReferenceError`.
 *
 * - Browser  
 * References the `globalThis.TransformStream`
 *
 * - Deno  
 * References the `globalThis.TransformStream`
 *
 * - Node.js 18.0+  
 * References the `globalThis.TransformStream`
 * 
 * - Node.js 15.7+ or 14.18+  
 * References the [`TransformStream`](https://nodejs.org/api/webstreams.html#class-transformstream) of `node:stream/web` package
 */
let _TransformStream: {
  prototype: TransformStream;
  new <I, O>(
    transformer?: Transformer<I, O>,
    writableStrategy?: QueuingStrategy<I>,
    readableStrategy?: QueuingStrategy<O>,
  ): TransformStream<I, O>;
};
if (globalThis.TransformStream) {
  _TransformStream = globalThis.TransformStream;
} else {
  const nodeUrl = "node:stream/web";
  const nsw = await import(nodeUrl);
  _TransformStream = nsw.TransformStream;
}
export { _TransformStream };
