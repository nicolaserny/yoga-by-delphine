---
name: write-route-tests
description: >-
  Write or extend a unit test for a route, loader, action, model, or component
  in this repo (Vitest + RTL + MSW). Use when adding test coverage so the test
  follows the project's established structure without re-deriving it.
---

# Writing tests in this repo

Procedure only. Rationale: see `docs/adr/0001-testing-strategy.md`.

## File naming & location

Tests live next to their source under `app/`.

- **Loader/action tests** → `*.loader.test.ts` (or a co-located `*.test.ts`)
  that imports `loader` / `action` from the route module directly.
- **Component tests** → `*.test.tsx`.

## Helpers — always reuse, never hand-roll

- Loaders/actions: `createLoaderArgs` / `createActionArgs` from
  `test/utils/createDataFunctionArgs.ts`. Pass `{ ip: "127.0.0.1" }`
  when the data function reads the IP (via `getBuyerIP` from
  `~/utils/netlify-context`).
- Components: `render`, `screen`, `waitFor`, `within`, `userEvent` from
  `test/test-utils.tsx`. `render(ui, { path, loader: () => fixture })` — never
  mock `react-router` or build your own router.

## Fixtures & network (MSW)

- Reuse / extend `test/fixtures/*` and `test/fixtures/shopify/*`. The fixture is
  the contract — assert parsed data with `toEqual(fixture)`, not field-by-field.
- Any new endpoint needs a branch in `test/mocks/handlers.ts` first. There is no
  fallback: an unhandled request fails the test (`onUnhandledRequest: "error"`).
- Failure paths: `server.use(...errorHandlers)` (from `test/mocks/handlers.ts`)
  at the top of the test.

## Action error contract

Actions may `throw` a `Response` instead of returning one. Assert it with the
try / `instanceof Response` / `.status` pattern — see the
`callActionAndExpectStatus` helper in `app/routes/api.checkout.test.ts`.

## Reference examples

- Loader: `app/routes/schedule.loader.test.ts`
- Action (incl. thrown `Response`): `app/routes/api.checkout.test.ts`
- Component: `app/routes/schedule.test.tsx`

## Before submitting

1. `pnpm run typecheck`
2. `pnpm run lint`
3. `pnpm run test` — green, with no unhandled-request errors.
