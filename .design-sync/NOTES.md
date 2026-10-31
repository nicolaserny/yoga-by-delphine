# design-sync notes — yoga-by-delphine

This repo is the **Yoga by Delphine website** (React Router 7 + Tailwind v4), not
a packaged design system. It is synced in the **package** shape via a
hand-written barrel entry. Only **9 reusable primitives** are scoped in
(`Button`, `Input`, `Textarea`, `Label`, `Quote`, `AnchorLink`, `Announcement`,
`ClassFormatCard`, `GiftCard`). Page-section components (footer, course,
bookingSection, navBar, etc.) are intentionally excluded — they depend on route
data/Cloudinary and aren't design-system parts.

## How this build works (non-obvious bits)

- **Barrel entry** `.design-sync/entry.tsx` re-exports the app's _default_-export
  components as **named** exports (a synthesized `export *` entry would miss
  defaults). Pulled in via `cfg.entry` / `--entry`. Add/remove a component here
  AND in `cfg.componentSrcMap` together.
- **Provider** = `DesignProvider` in the barrel: a react-router **data** memory
  router that renders the card as its catch-all route. Required because
  `GiftCard`→`BuyButton` renders `<Form>` (needs a data router) and
  `Announcement`/`ClassFormatCard` render `<Link>`. A plain `MemoryRouter` is
  NOT enough (`useSubmit must be used within a data router`).
- **CSS** is compiled standalone by `.design-sync/build-css.sh` (= `cfg.buildCmd`)
  using the Tailwind CLI from the staged `.ds-sync` deps →
  `.design-sync/tailwind-compiled.css` (= `cfg.cssEntry`). The script also
  rewrites the app's absolute `/fonts/...` `@font-face` urls to
  `../public/fonts/...` so the converter copies the woff2 into `fonts/`.
- **Safelist**: `.design-sync/tailwind-input.css` `@source inline(...)` force-emits
  the full brand token matrix + a layout-utility vocabulary. This matters
  because claude.ai/design ships the compiled CSS **statically** — utilities the
  design agent writes only resolve if they're already in `_ds_bundle.css`.
- **`dtsPropsFor`** is hand-written for all 9 — ts-morph can't recover props
  through the default-export re-export pattern (it produced `[key:string]:
unknown`).
- `GiftCard` uses `cardMode: column` (wider than a grid cell).

## Known render warns

- None outstanding. (Before previews were authored, several showed the floor
  card / `[RENDER_THIN]` — resolved by authoring `.design-sync/previews/*.tsx`.)

## Re-sync risks (what can silently go stale)

- **`tailwind-compiled.css` is generated** — never hand-edit; re-run
  `bash .design-sync/build-css.sh` before re-syncing. If `app/tailwind.css`'s
  `@theme` tokens change, mirror them into `.design-sync/tailwind-input.css`
  (the safelist + theme are duplicated there on purpose for standalone compile).
- **`dtsPropsFor` bodies are manual snapshots** of each component's API. If a
  component's props change in `app/components/*`, update the matching
  `dtsPropsFor` entry — it does not auto-track source.
- **Font rewrite** depends on `app/custom-base-styles.css` using `/fonts/*.woff2`
  with the 5 Montserrat weights in `public/fonts/`. If those paths/weights
  change, update the `perl` rewrite in `build-css.sh`.
- **Playwright + Chromium** live in `.ds-sync/` (gitignored) — re-install on a
  fresh clone (`cd .ds-sync && npm i && npx playwright install chromium`).
- Components are real app code importing `react-router`, `clsx`, etc. A breaking
  upgrade of `react-router` (Form/Link API) could break the provider or
  `GiftCard`/`Announcement` previews.
