//

import * as x from "./x.ts";

/**
 * The `ProgressEvent` for Node.js
 *
 * Implements the [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.
 */
class _ProgressEvent extends Event implements ProgressEvent<EventTarget> {
  #lengthComputable: boolean;
  #loaded: number /* integer */;
  #total: number /* integer */;

  /**
   * Creates a new `_ProgressEvent`.
   *
   * @param type The name of the event.
   * @param init The `ProgressEventInit` object.
   */
  constructor(type: string, init?: ProgressEventInit) {
    super(type, init);

    this.#lengthComputable =
      (init && (typeof init.lengthComputable === "boolean"))
        ? init.lengthComputable
        : false;
    this.#loaded = (init && (typeof init.loaded === "number") &&
        x._isNonNegativeInteger(init.loaded))
      ? init.loaded
      : 0;
    this.#total = (init && (typeof init.total === "number") &&
        x._isNonNegativeInteger(init.total))
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
  get loaded(): number /* integer */ {
    return this.#loaded;
  }

  /**
   * @see [ProgressEvent.total](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total)
   */
  get total(): number /* integer */ {
    return this.#total;
  }
}
const _PE = (globalThis as unknown as {
  ProgressEvent: new (
    type: string,
    eventInitDict?: ProgressEventInit,
  ) => ProgressEvent;
}).ProgressEvent ??
  _ProgressEvent;

export { _PE as _ProgressEvent };
