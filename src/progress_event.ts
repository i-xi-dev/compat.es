//

import { Integer } from "./deps.ts";

type int = number;

/**
 * The `ProgressEvent` for Node.js
 *
 * Implements the [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.
 */
class _ProgressEventFN extends Event implements ProgressEvent<EventTarget> {
  #lengthComputable: boolean;
  #loaded: int;
  #total: int;

  /**
   * Creates a new `_ProgressEventFN`.
   *
   * @param type - The name of the event.
   * @param init - The `ProgressEventInit` object.
   */
  constructor(type: string, init?: ProgressEventInit) {
    super(type, init);

    this.#lengthComputable =
      (init && (typeof init.lengthComputable === "boolean"))
        ? init.lengthComputable
        : false;
    this.#loaded = (init && (typeof init.loaded === "number") &&
        Integer.isNonNegativeInteger(init.loaded))
      ? init.loaded
      : 0;
    this.#total = (init && (typeof init.total === "number") &&
        Integer.isNonNegativeInteger(init.total))
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
  get loaded(): int {
    return this.#loaded;
  }

  /**
   * @see [ProgressEvent.total](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total)
   */
  get total(): int {
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
