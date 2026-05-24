# 0001 — Testing strategy

Status: accepted

## Context

The repo has a unit-test suite (added in `039d628`, `8640dc3`) covering routes,
loaders, actions, models and components. It encodes several deliberate choices
that are not obvious from the code alone. This ADR records _why_, so they are
not relitigated. The repeatable _how_ lives in
`.claude/skills/write-route-tests/SKILL.md`.

## Decision

**Stack (foundation).** Vitest + happy-dom + React Testing Library + MSW. See
`vitest.config.ts`: `~` aliases to `app`, globals on, `test/setup.ts` as the
setup file, coverage excludes generated code, `root.tsx` and `routes.ts`. This
is the conventional stack for a Vite / React Router 7 app and is recorded only
as the basis for the decisions below.

**A — Loaders and actions are tested in isolation.** Import the route module's
`loader`/`action` directly and invoke it with `createLoaderArgs` /
`createActionArgs` (`test/utils/createDataFunctionArgs.ts`) — not through a
rendered route. Trade-off: a fast, precise unit boundary on data functions, at
the cost of less end-to-end coverage of route wiring (covered separately by
component tests). Examples: `app/routes/schedule.loader.test.ts`,
`app/routes/api.checkout.test.ts`.

**B — MSW with fixtures as the single source of truth.** All network is mocked
in `test/mocks/handlers.ts` (Shopify GraphQL routed by query string).
`test/setup.ts` sets `onUnhandledRequest: "error"`, so every outbound call must
be explicitly handled. Parsed results are asserted with `toEqual` against a
shared fixture (`test/fixtures/*`); failure paths use `server.use(
...errorHandlers)`. Trade-off: centralized, realistic fixtures and one source
of truth, at the cost of coupling many tests to one fixture shape.

**C — Component tests render through a routes stub.** Components are rendered
via `render()` in `test/test-utils.tsx`, which wraps React Router's
`createRoutesStub` and accepts a `loader: () => fixture`. We do not mock
`react-router`. Trade-off: realistic router/loader context, at the cost of a
thin layer of indirection. Example: `app/routes/schedule.test.tsx`.

## Consequences

- Hitting a new endpoint in a test requires adding an MSW handler first;
  otherwise the test fails on the unhandled request (by design).
- A fixture change ripples across every test that asserts against it — this is
  intentional, the fixture is the contract.
- Data-function bugs surface in `*.loader.test.ts` / `*.test.ts`, not in
  component tests; component tests assume the loader's fixture output.
