import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

interface Options {
  context?: Record<string, unknown>;
  params?: Record<string, string>;
}

export function createActionArgs(
  request: Request,
  options: Options = {},
): ActionFunctionArgs {
  return {
    request,
    unstable_url: new URL(request.url),
    unstable_pattern: "/",
    params: options.params ?? {},
    context: options.context ?? {},
  };
}

export function createLoaderArgs(
  request: Request,
  options: Options = {},
): LoaderFunctionArgs {
  return {
    request,
    unstable_url: new URL(request.url),
    unstable_pattern: "/",
    params: options.params ?? {},
    context: options.context ?? {},
  };
}
