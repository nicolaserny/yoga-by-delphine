import * as React from "react";

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const useSSRLayoutEffect = canUseDOM ? React.useLayoutEffect : () => {};

export function notNullOrUndefined<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
