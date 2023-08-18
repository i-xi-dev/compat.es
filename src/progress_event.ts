//

import { NonNegativeInteger } from "../deps.ts";

/**
 * The `ProgressEvent` for Node.js
 *
 * Implements the [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.
 */
class _ProgressEventFN extends Event implements ProgressEvent<EventTarget> {
  #lengthComputable: boolean;
  #loaded: NonNegativeInteger;
  #total: NonNegativeInteger;

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
    this.#loaded = ((typeof init?.loaded === "number") &&
        NonNegativeInteger.isNonNegativeInteger(init.loaded))
      ? init.loaded
      : 0;
    this.#total = ((typeof init?.total === "number") &&
        NonNegativeInteger.isNonNegativeInteger(init.total))
      ? init.total
      : 0;
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
  get loaded(): NonNegativeInteger {
    return this.#loaded;
  }

  /**
   * @see [ProgressEvent.total](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total)
   */
  get total(): NonNegativeInteger {
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
