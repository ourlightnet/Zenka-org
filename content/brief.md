# zenka.org rebuild, discovery brief

> Draft v1 · 2026-04-25 · pending user review.
> Source materials: `bio-source.md`, `linked-projects.md`, `archive/` (snapshot of current Squarespace site).

## What this site is

**Zenka Caro's personal website.** Not a hub for any one of her projects. The site exists to:

1. Establish Zenka's credibility and current mission to press, partners, and funders evaluating her.
2. Surface the active programs/ventures she leads (LightNet and its labs/programs) as proof of the work.
3. Make it easy for the right inquiries, speaking, partnership, collaboration, lab participation, to reach her.

## Primary audience

**Press, partners, funders.** Journalists writing about consciousness/futurism, conference bookers considering keynotes, foundation officers and donors evaluating LightNet, potential collaborators (filmmakers, scientists, technologists). Treat secondary audiences (community, curious newcomers) as inheriting from a strong primary audience build, not as separate optimization targets.

## Primary CTA

**Apply / book / contact Zenka.** Every page should have a clear path to a contact action. The Mailchimp list signup is a *secondary* CTA, kept, but not the headline.

## Positioning & voice

- **Tagline (locked):** "She makes the invisible impossible to ignore."
- **Lead voice (first person, hero):** the LinkedIn "reality hacker / future architect" voice, direct, confident, claim-staking. Example: *"I'm a reality hacker and future architect on a mission to upgrade human consciousness."*
- **Supporting voice (about/purpose):** the "PURPOSE" statement from `bio-source.md`, first-person, claim-staking, about Zenka's own mission. We'll likely also need fresh About-page copy written in Zenka's voice (TBD with user).
- **Do NOT use:** the "Love in Action" piece, that copy is Holomovement-branded, not Zenka-branded, and would mis-attribute Holomovement's voice to her personal site.
- **Avoid:** woo-y or vague spiritual language without grounding. The differentiator is *evidence-based wonder*, keep the rigor and measurability up front so press/funders take it seriously.

## Proposed site structure

Updated 2026-04-25 (v2): Art is NOT a separate top-level tab. Art pieces are projects, living under `/work/` alongside the programs. Two art projects total: Street Art and Augmented Reality Art (which encompasses both the AR Prints and the Raku-fired heads, since the heads receive AR overlays).

### Top-level pages

| Page | Purpose |
|---|---|
| `/` Home | Hook + tagline, programs + art preview, top-line CTA |
| `/about` | Long bio, PURPOSE statement, full identity |
| `/work` | Index of EVERYTHING she does: programs + art projects, each as a card |
| `/press` | Press mentions, talks, media kit |
| `/contact` | Contact form / email, optional Mailchimp signup |

### Detail pages (one per item, all under `/work/`)

| Slug | Title | Type |
|---|---|---|
| `/work/lightnet` | LightNet | Active program |
| `/work/spoon-bending-lab` | Spoon Bending Lab | Active program |
| `/work/holomovement-purpose-lab` | Holomovement Purpose Lab | Active program |
| `/work/starseed-academy` | Starseed Academy | Active program |
| `/work/global-awakening-tracker` | Global Awakening Tracker (NOC) | In development |
| `/work/dream-machine` | The Dream Machine | In development |
| `/work/augmented-reality-art` | Augmented Reality Art | Art project (includes AR Prints + Raku-fired heads) |
| `/work/street-art` | Street Art | Art project |

### Estimated page count

- 5 top-level pages
- ~8-12 work subpages (programs + art projects, plus any additional from LinkedIn bio)
- **Total: ~15-20 pages**

Much smaller than the v1 estimate. Single content folder: `content/work/*.mdx`. Build time on Vercel trivial.

**Open structure question:** merge `/talks` into `/press`? Recommend merging, they serve the same audience action.

## Content inventory status

- Bio copy: ✅ have (3 versions in `bio-source.md`)
- Project list: ⚠️ have names, ❌ need URLs (5 active + 5 in-dev + 2 unclear = ~12 URLs)
- Project descriptions: ❌ none yet, we'll need a 1-2 sentence blurb per project
- Press mentions: ⚠️ scraped from current site, may need to refresh with newer items
- Photos of Zenka: ❌ need 1 high-quality hero photo
- Project hero images/logos: ❌ need one per project (or pull from each project's site)

## Visual direction

**Deferred to mockup phase.** Will produce 2-3 distinct directions for user reaction. Constraints already known:
- Must work on mobile
- Must feel rigorous AND wondrous (not pure science, not pure mysticism)
- Type-driven hero is recommended given the strength of the tagline + bio voice
- The current Squarespace site is image-heavy and feels portfolio-ish, we'll deliberately move away from that

## Tech direction (from earlier decisions)

- Next.js (App Router) + Tailwind, deployed to Vercel
- Content stored as MDX/markdown files in repo (no headless CMS)
- Edits done by code (Claude Code or Cowork) and redeployed
- DNS cutover only after explicit user approval

## Blockers before build can start

1. URLs for all 12 listed projects (see `linked-projects.md`)
2. Confirmation: merge `/talks` into `/press`?
3. Hero photo of Zenka (or use a current one from the archive)
4. 1-2 sentence description per project, do you want to write these, or should I draft and you edit?

## Out of scope (explicitly)

- E-commerce / donations on zenka.org (donations live on lightnet.org or wherever, this site links out)
- Blog / regular content cadence (the site is largely static; updates are infrequent per user input)
- Multilingual / internationalization
- Analytics platform decision (defer; can add Plausible/Vercel Analytics in build phase)
