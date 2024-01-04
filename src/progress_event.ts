//

import { RoundingMode, SafeInteger } from "../deps.ts";

/**
 * The `ProgressEvent` for Node.js
 *
 * Implements the [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.
 */
class _ProgressEventFN extends Event implements ProgressEvent<EventTarget> {
  #lengthComputable: boolean;
  #loaded: SafeInteger;
  #total: SafeInteger;

  /**
   * Creates a new `_ProgressEventFN`.
   *
   * @param type - The name of the event.
   * @param init - The `ProgressEventInit` object.
   */
  constructor(type: string, init?: ProgressEventInit) {
    super(type, init);

    this.#lengthComputable = (typeof init?.lengthComputable === "boolean")
      ? init.lengthComputable
      : false;
    const options: SafeInteger.FromOptions = {
      fallback: 0,
      clampRange: [0, Number.MAX_SAFE_INTEGER],
      roundingMode: RoundingMode.TRUNCATE, // ブラウザの実装に合わせた
    };
    this.#loaded = SafeInteger.fromNumber(init?.loaded, options);
    this.#total = SafeInteger.fromNumber(init?.total, options);
  }

  /**
   * @see [ProgressEvent.lengthComputable](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable)
   */
  get lengthComputable(): boolean {
    return this.#lengthComputable;
  }

  /**
   * @see [ProgressEvent.loaded](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded)
   */
  get loaded(): SafeInteger {
    return this.#loaded;
  }

  /**
   * @see [ProgressEvent.total](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total)
   */
  get total(): SafeInteger {
    return this.#total;
  }
}

/**
 * If the `globalThis` has a [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent), then the `ProgressEvent` constructor.
 * Otherwise the polyfill of `ProgressEvent` constructor.
 *
 * - Browser
 * References the `globalThis.ProgressEvent`
 *
 * - Deno
 * References the `globalThis.ProgressEvent`
 *
 * - Node.js
 * References the polyfill
 */
const _ProgressEvent = (globalThis as unknown as {
  ProgressEvent: new (
    type: string,
    eventInitDict?: ProgressEventInit,
  ) => ProgressEvent;
}).ProgressEvent ??
  _ProgressEventFN;

export { _ProgressEvent };
