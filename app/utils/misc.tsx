import React from "react";

export const useSSRLayoutEffect =
  typeof window === "undefined" ? () => {} : React.useLayoutEffect;

export function notNullOrUndefined<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
