# Pokémon TCG Collector (Under construction)

(This is the current state of the idea I don't know if it will stay like this or will change along the way)

A personal project by a self-taught web developer who loves the Pokémon TCG. The goal: build a collection tracker I’ll actually use, while learning real-world skills along the way. It’s built with Next.js, uses shadcn/ui for the interface, next-intl for multi-language support, and pulls card data from TCGdex (either via their TypeScript SDK or REST API).

## Features

- Track which Pokémon cards you own (sets, rarities, conditions—extensible)
- Search/browse cards from TCGdex
- Multilingual UI with next-intl (EN by default; more languages easy to add)
- Accessible, modern UI with shadcn/ui + Tailwind CSS
- App directory (Next.js) with server components where it makes sense
- Typed data flow with TypeScript

## Tech Stack

- Framework: Next.js (TypeScript)
- UI: shadcn/ui + Tailwind CSS
- i18n: next-intl
- Data source: TCGdex
  - Option A: TCGdex TypeScript SDK
  - Option B: TCGdex REST API
- State/Data Fetching: Next.js data fetching (RSC/route handlers) + React Query or SWR (optional)
- Storage: TBD (file-based JSON during dev, or a DB like PostgreSQL/Supabase later)
- Tooling: ESLint, Prettier

## Project Goals

- Learn and implement multi-language support from scratch
- Build a clean, maintainable Next.js app with modern patterns
- Explore TCGdex and decide between SDK vs REST API based on DX and performance
- Ship a useful, usable Pokémon card collection tracker

## Directory Structure (proposed)

- app/
  - [locale]/ (next-intl routing, e.g., en, de, fr)
  - layout.tsx
  - page.tsx
  - collection/
  - cards/
  - api/ (route handlers for server-side TCGdex calls, caching, etc.)
- components/ (UI components, shadcn primitives, shared widgets)
- lib/ (TCGdex client, helpers, i18n config)
- messages/ (next-intl messages per locale)
- styles/
- types/
- scripts/

## Internationalization (next-intl)

- URL routing with locales: e.g., /en/cards, /de/cards
- Message catalogs in messages/{locale}.json
- Server and client components both localized with next-intl
- Fallback language: English (en)

To add a language:

1. Create messages/{locale}.json
2. Add locale to next-intl config and middleware
3. Translate navigation, page titles, and UI strings

## TCG Data (TCGdex)

There are two ways to fetch data:

- TypeScript SDK
  - Pros: Types, convenience methods
  - Cons: Bundle size and server-only vs client usage constraints
- REST API
  - Pros: Lightweight, flexible; good for server route handlers
  - Cons: Manual typing and data guards

Recommended approach: Use TCGdex from server-side route handlers (Next.js app/api routes) to avoid leaking API details to the client and to enable caching. Export a small typed client in lib/tcgdex.ts.

## Getting Started

Prerequisites:

- Node.js 18+ (LTS recommended)
- pnpm, npm, or yarn
- (Optional) An .env file for any keys or base URLs if needed

1. Clone and install

```bash
git clone <your-repo-url> pokemon-tcg-collector
cd pokemon-tcg-collector
pnpm install
# or: npm install / yarn
```

2. Environment variables
   Create a .env.local file at the project root. Add variables as needed. Examples:

```bash
# Example: Override TCGdex base URL if needed
NEXT_PUBLIC_TCGDEX_BASE_URL=https://api.tcgdex.net/v2

# If a key is needed in the future (placeholder)
TCGDEX_API_KEY=
```

3. Generate shadcn components (if using on-demand generation)
   If you haven’t pre-committed components, run shadcn generator as per project scripts. Otherwise, skip.

4. Run the dev server

```bash
pnpm dev
# or: npm run dev / yarn dev
```

The app will be available at http://localhost:3000

5. Build and run production

```bash
pnpm build
pnpm start
# or npm run build && npm start
```

## Scripts

- dev: Start Next.js in development
- build: Create a production build
- start: Run production server
- lint: Lint code with ESLint
- format: Format with Prettier

Example:

```bash
pnpm lint
pnpm format
```

## Localization: How to add a new language

1. Duplicate messages/en.json to messages/<locale>.json
2. Translate strings
3. Add locale to middleware and locales array
4. Verify pages render at /<locale>

## State and Storage

- MVP: Local state + persisted JSON (or localStorage) for personal use
- Later: Database (PostgreSQL/Supabase/Prisma/Convex) to sync collections across devices
- Optional: Authentication (NextAuth/Auth.js/Clerk) if multi-user support is needed

## Roadmap

- MVP: Browse sets/cards, mark owned cards, basic filters, EN + 1 more language
- v1: Persisted user collections, search, sorting, basic stats
- v1.1: Card conditions, variants (reverse holo, promo), export/import
- v1.2: Caching and offline-friendly pages, image optimization
- v2: User accounts, cloud DB, sharing, advanced filters, mobile PWA

## Contributing

This is a learning project first. Suggestions, issues, and PRs are welcome. Please:

- Don't go to hard on me. I'm just learning more/new stuff
- Keep code typed and formatted
- Use accessible components and semantics
- Prefer server data fetching where possible
- Keep i18n strings up to date

## License

MIT

## Acknowledgements

- TCGdex for card data and assets
- shadcn/ui for excellent UI primitives
- next-intl for straightforward multi-language support
- Next.js team and community

If you have questions or ideas, open an issue or reach out. Gotta catalog ’em all!
