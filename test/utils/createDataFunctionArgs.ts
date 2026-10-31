import {
  RouterContextProvider,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import { netlifyRouterContext } from "~/utils/netlify-context";

interface Options {
  ip?: string;
  params?: Record<string, string>;
}

function createContext(ip?: string): RouterContextProvider {
  const context = new RouterContextProvider();
  if (ip) {
    context.set(netlifyRouterContext, { ip });
  }
  return context;
}

export function createActionArgs(
  request: Request,
  options: Options = {},
): ActionFunctionArgs {
  return {
    request,
    url: new URL(request.url),
    pattern: "/",
    params: options.params ?? {},
    context: createContext(options.ip),
  };
}

export function createLoaderArgs(
  request: Request,
  options: Options = {},
): LoaderFunctionArgs {
  return {
    request,
    url: new URL(request.url),
    pattern: "/",
    params: options.params ?? {},
    context: createContext(options.ip),
  };
}
