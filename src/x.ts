//TODO

export function _isNonNegativeInteger(value: unknown): boolean {
  if (typeof value === "number") {
    return Number.isSafeInteger(value) && value >= 0;
  }
  return false;
}
