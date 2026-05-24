# AGENTS.md

This is a Next.js 16 personal website. Key facts for agents:

## Project Type

- **Framework**: Next.js 16.2.6 (React 19.2.6)
- **Styling**: Tailwind CSS 4.3.0 with PostCSS
- **Build**: `next build`, dev server: `next dev`
- **Lint**: ESLint (extends eslint-config-next)

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |
| `pnpm postbuild` | Generate sitemap (via next-sitemap) |

## Architecture

- **Entry point**: `src/app/page.tsx` (Server Component)
- **Root layout**: `src/app/layout.tsx` (Server Component with font config)
- **Pages**: Next.js App Router, standard `page.tsx` conventions
- **API routes**: `src/app/api/*/route.ts`
- **Components**: `components/` (reusable,可 client/server)
- **Public assets**: `public/` ( images, sitemap.xml, robots.txt)

## Structure

```
src/app/
├── layout.tsx        # Root layout with font + SpeedInsights
├── page.tsx          # Home page
├── globals.css       # Global styles (imported in layout)
├── api/
│   ├── contributions/route.ts
│   └── recently-played/route.ts
 components/
├── Headline.tsx
├── Experience.tsx
├── Contacts.tsx
├── Contributions.tsx
└── Footer.tsx
public/
├── stefano.jpeg      # Profile image
├── stefano_og.jpg    # OG image (512x512)
├── sitemap.xml
└── robots.txt
```

## Important Patterns

- **Always use `next/image`** for images (optimized, lazy-loaded)
- **Metadata**: Defined in `page.tsx` via `export const metadata: Metadata`
- **CSS**: Import `globals.css` in layout, use Tailwind utility classes
- **No `src/` in imports**: Configured with `baseUrl: "."` and `@/*` path alias
- **Robots**: `follow, index` on home page

## Tech Constraints

- No custom server (Next.js default)
- No client-side routing config (App Router defaults)
- No custom webpack/babel (use Next.js defaults)
-pnpm@9.8.0 for dependency management

## URLs

- **Production**: https://stefanocislaghi.com
- **Repo**: https://github.com/LunaticMuch/stefanocislaghi.com
