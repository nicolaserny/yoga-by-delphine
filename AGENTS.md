# AGENTS.md - Development Guidelines

## Commands

- **Build**: `pnpm run build`
- **Dev**: `pnpm run dev`
- **Lint**: `pnpm run lint`
- **Typecheck**: `pnpm run typecheck`
- **Test**: `pnpm run test` (Vitest + React Testing Library + MSW)
- **Test Watch**: `pnpm run test -- --watch`

## Code Style

- **Package Manager**: Use `pnpm` exclusively
- **Imports**: Use `~/` for app imports, group external imports first
- **Components**: Export as default, use PascalCase for component names
- **Props**: Use TypeScript interfaces, destructure in function signature
- **Styling**: Use Tailwind CSS classes, prefer utility-first approach
- **File Structure**: Components in `/app/components/`, routes in `/app/routes/`, models in `/app/models/`, utilities in `/app/utils/`, generated files in `/app/generated/`
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Types**: Import types with `import type`, use explicit return types for exported functions
- **Error Handling**: Use React Router error boundaries and proper HTTP status codes

## Framework

- **React Router v7** with React 19, TypeScript, Tailwind CSS v4
- **Deployment**: Netlify with edge functions
- **State**: React hooks (useState, useEffect), no external state management
- **Node.js**: Version 22.x required

## Agent skills

### Issue tracker

Issues tracked in GitHub (`nicolaserny/yoga-by-delphine`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default triage labels: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout. See `docs/agents/domain.md`.
