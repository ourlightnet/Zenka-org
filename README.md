# zenka-org

Source for [zenka.org](https://zenka.org), Zenka Caro's personal website.

## What's where

```
zenkacaroweb/
├── site/          ← The Next.js app (this is what gets deployed)
├── content/       ← Source-of-truth bio, brief, project notes (Markdown)
├── mockups/       ← Design reference (not committed, local only)
└── archive/       ← Scrape of the old Squarespace site (not committed, ~19 MB)
```

Only `site/` and `content/` are committed to git. The `archive/` and `mockups/` folders are gitignored.

## Run locally

```bash
cd site
npm install        # first time only
npm run dev        # opens http://localhost:3000
```

## Build

```bash
cd site
npm run build      # static production build
npm start          # serve the build
```

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

Fonts: Inter Tight (display), Newsreader (italic emphasis), JetBrains Mono (kicker / meta). Loaded via `next/font/google`.

Brand tokens are defined in `site/app/globals.css` under `:root` and `@theme inline`.

## Deploying to Vercel (first time)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. **Important:** in "Configure Project", set **Root Directory** to `site`. Vercel will then auto-detect Next.js.
4. Click Deploy. You'll get a `*.vercel.app` URL within a minute.
5. Once you've reviewed it and want to point zenka.org at it: in Vercel project → Settings → Domains → add `zenka.org`. Vercel gives you the DNS records to set at your registrar. **Do NOT change DNS until you've reviewed the deploy.**

## Pushing to GitHub (first time)

From the repo root (`zenkacaroweb/`):

```bash
git init -b main
git add .
git commit -m "Initial commit, Next.js scaffold + bold red design"
gh repo create zenka-org --public --source=. --remote=origin --push
```

If you don't have the GitHub CLI (`gh`), create the repo manually at github.com/new (named `zenka-org`), then:

```bash
git remote add origin git@github.com:YOUR_USERNAME/zenka-org.git
git push -u origin main
```

## Structure of `site/`

```
site/
├── app/
│   ├── layout.tsx       ← Root layout (fonts, header, footer)
│   ├── page.tsx         ← Homepage (the Direction D design)
│   ├── globals.css      ← Brand tokens + base styles
│   ├── about/page.tsx   ← Placeholder
│   ├── work/page.tsx    ← Placeholder (will become projects index)
│   ├── press/page.tsx   ← Placeholder
│   └── contact/page.tsx ← Placeholder
├── components/
│   ├── header.tsx       ← Top nav
│   └── footer.tsx
└── public/
    └── images/          ← Site imagery
```
