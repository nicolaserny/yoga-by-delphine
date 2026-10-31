# Yoga by Delphine — design system conventions

A small React component set styled entirely with **Tailwind CSS v4 utility
classes** over a fixed brand token scale. Components are imported from
`window.YogaByDelphine.*` and render the real shipped code.

## Setup

- **Load `styles.css`.** It is the whole look: the `@import` closure pulls in
  every Tailwind utility, the `@theme` token variables (`:root` custom
  properties), and the **Montserrat** `@font-face` rules. Without it components
  render unstyled. The default font family is Montserrat (`--font-sans`).
- **Router context.** Several components render react-router elements and must
  be inside a react-router router:
  - `Announcement` (renders a `Link`) and `GiftCard` (renders a `Form`) always
    need it.
  - `Button` and `AnchorLink` need it **only when** you pass `as={Link}`; with
    the default element (`button` / `a`, e.g. `href="…"`) they need nothing.
  - `ClassFormatCard` renders its CTA as `Button as={Link}`, so it needs it too.
    Render these inside the app's router. `GiftCard`'s `Form` posts to
    `/api/checkout` (Shopify checkout) — a data router is required for that path.

## Styling idiom — Tailwind utilities + brand tokens

Style your own layout glue with Tailwind utility classes; pass extra classes to
any component via `className`. The token scale (use these names, don't invent
colors):

| Family       | Names                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| Brand purple | `purple-100 200 300 400 500 600 700 800 900 1000` (e.g. `bg-purple-600`, `text-purple-700`, `fill-purple-500`) |
| Neutral gray | `gray-100 … gray-1000` (text/borders, e.g. `text-gray-800`)                                                    |
| Accent red   | `red-100 … red-1000` (used in the announcement gradient)                                                       |
| Surface      | `light` (`bg-light`, the page background `#f5f7fa`)                                                            |
| Type scale   | `text-xs sm base lg xl 2xl 3xl 4xl 5xl 6xl`                                                                    |
| Font         | `font-sans` = Montserrat                                                                                       |

Primary action color is **purple-600/700**. Cards use `bg-white rounded-lg/xl
shadow`. The brand has no dark theme.

## Component API highlights

- **`Button`** — `variant` (`solid` | `outline` | `link`) and `colorScheme`
  (`purple` | `gray` | `white`) are **required**; `size`
  (`small`→`hero`, default `base`), `responsive` (default true, bumps size at
  larger breakpoints). Polymorphic via `as`. `white` colorScheme is for dark
  backgrounds.
- **`AnchorLink`** — a `link`-variant Button preset for in-page anchors.
- **`Input` / `Textarea` / `Label`** — thin wrappers over the native elements;
  accept all standard attributes plus `className`. Full-width by default.
- **`Quote`** — fixed testimonial block, layout-only props.
- **`Announcement`** — fixed full-width promo banner (purple→red gradient).
- **`ClassFormatCard`** — marketing card: `title`, `details`, `illustration`
  (a component), `features: string[]`, `buttonText`, `buttonVariant`,
  `buttonHref`.
- **`GiftCard`** — `giftCard: { shopifyId, title, description, price }`.

Read each component's `<Name>.d.ts` for the full prop contract and
`<Name>.prompt.md` for usage. The compiled stylesheets to read before styling
are `styles.css` → `_ds_bundle.css` (utilities + token vars) and
`fonts/fonts.css`.

## Example

```tsx
const { Label, Input, Textarea, Button } = window.YogaByDelphine;

<form className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-6 shadow-sm">
  <div>
    <Label htmlFor="email">Adresse e-mail</Label>
    <Input id="email" type="email" placeholder="vous@example.com" />
  </div>
  <div>
    <Label htmlFor="msg">Message</Label>
    <Textarea id="msg" rows={4} placeholder="Votre message…" />
  </div>
  <Button variant="solid" colorScheme="purple">
    Envoyer
  </Button>
</form>;
```
