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
