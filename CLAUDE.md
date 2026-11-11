# Toteally Sisters website

Rebuilding **toteallysisters.org**, currently on WordPress + Elementor, as a new site in this repo, deployed on **Vercel**. It is a survivor-founded community for women affected by gynecologic cancers.

**Status:** built (Nov 2026). The Astro site is complete, passed Impeccable's finish review (verdict: ship after one fix round), and is waiting on the owner's content items below and on the Vercel connection. The current WordPress site stays live until the owner approves the switch.

## Read first

- `PRODUCT.md`: audience, purpose, the OCRA partnership, voice, accessibility, and what not to fabricate. **This is the top authority for every design decision.**
- `DESIGN.md` (once written) and `.impeccable/surfaces/src-pages-index-astro.md` (the home page direction contract: "the community board").
- `_source/README.md`: snapshot of the current site (media, fonts, brand colors, page inventory, links). Page copy is in `_source/content/text/`, and all media is indexed in `_source/media/INDEX.md`.

## Decisions already made

- **Direction:** keep the feel of the current site and make it better. This is a refinement of the existing identity, not a rebrand. Keep the palette (purple `#673B98`, pink `#EBBAD9`, peach `#FFDCBC`, teal `#0DA7A7`), the Instrument Serif headings and Satoshi body text, the real photos and the warm tone.
- **Stack:** Astro on Vercel. Events, team members and press items live as content files.
- **Get Involved is the contact page.** Its 11-field intake form (listed in PRODUCT.md) is the site's main conversion. Submissions are **emailed to a team member**, with no Google Sheet or CRM. The old empty Contact Us page is dropped.
- **OCRA:** Toteally Sisters is independent and partners with OCRA. All Donate and Register links go to OCRA's Ovarian Fitness Orlando pages. Never imply Toteally Sisters takes donations itself or is part of OCRA.

### Decided after the Impeccable critique (Nov 2026; current site scored 16/36)

The full critique is in `.impeccable/critique/`.

- **The monthly Zoom meetup is the centerpiece.** Sister Support becomes a "Monthly Meetup / What to expect" page: when, how long, cameras optional, caregivers welcome, and answers to first-timer questions. Home and every "Join" button lead there. Say outright that **all gynecologic cancers are welcome**, not only ovarian.
- **Navigation:** "Join a meetup" (Get Involved) is the main button everywhere, including the phone menu, and opens in the same tab. **Donate becomes a smaller text link labeled "Donate via OCRA (with an out-arrow icon)"** and must never appear twice.
- **Intake form:** keep all 11 fields, made gentler. No pre-selected answers, add "Prefer not to say", autocomplete attributes, a visible focus ring, plain-language inline errors, a privacy and "what happens next" note above the button, and a warm confirmation after sending.
- **Scope: fix everything** the critique found while rebuilding, keeping the same look. Copy changes outside Our Story go to the owner for approval.
- **Events:** past events go into an automatic "Past events" section. Show a friendly empty state when nothing is scheduled. Home features the next upcoming event, falling back to the meetup.
- **Accessibility baseline:** one H1 per page, real alt text, labeled icon controls, a focus outline visible on dark and light backgrounds, and no white text on `#0DA7A7`.

## Design skills: priority when they conflict

Installed in `.claude/skills/`. When guidance conflicts, follow this order:

1. **PRODUCT.md:** audience first, real content only, gentle tone, WCAG 2.2 AA.
2. **Impeccable** (`/impeccable`): overall design direction, typography, color, layout, critique, audit and polish.
3. **Emil Kowalski skills** (`emil-design-eng`, `animate`, `choreograph`, `review-animations`, `mobile-native`, `break-ui`, …): motion and interaction craft.
4. **Taste-skill** (`design-taste-frontend`): the anti-generic quality bar and the in-browser finish checks. **Overrides for this site:**
   - **No stock or stand-in photos.** Use only the real photos in `_source/media/`. If a photo is missing, ask the owner.
   - **Real contact details and links**, not `.example` placeholders.
   - **Calm, sparing motion.** Visitors may be exhausted or in treatment. No showy scroll effects or "dealt moments" for their own sake. Always honor `prefers-reduced-motion`.
   - The "one section per screen" rule doesn't apply to long-form story content like Our Story.
   - No shader effects, 3D scenes or tech-style visuals.

`write-swift`, `animate-expo`, `ask-sonner` and `gestures` are installed but mostly irrelevant to this site.

## Tooling

- **Impeccable design-check hook** is on for every session (`.claude/settings.json`). It scans UI files after each edit and runs a deeper pass at the end of each turn. Its engine binary is gitignored and re-downloads automatically from `impeccable.style`.
- **Playwright CLI** (`playwright-cli`) is installed by the cloud environment's setup script. Use it to view pages and take screenshots at 390, 768, 1024 and 1440 wide.
- **Cloud environment:** use the **toteally-sisters** environment. It allows `toteallysisters.org`, `impeccable.style` and Vercel.
- Impeccable's anonymous telemetry is **on** (the owner hasn't decided). Turn it off with `npx impeccable telemetry off`.

## How the site works

- `npm run dev` (port 4321), `npm run build`, `npx astro check`. Node 22.23+.
- **Site facts** live in `src/data/site.ts`: social links, OCRA links, and the **meetup schedule** (`meetup.schedule`, `time`, `length`, `next`). While those are null, pages say the date and link are emailed after joining.
- **Events** are Markdown files in `src/content/events/`. Each has `start`/`end`, place, summary, image and alt text. Past events move to "Past events" automatically (at build time, and re-checked in the browser). `hasPage: true` gives an event its own page at `/events/<file-name>`.
- **Join form** (`src/pages/join/index.astro`, fields in `src/lib/join-form.ts`) posts to `src/pages/api/join.ts`, which emails the team via **Resend**. Vercel environment variables: `RESEND_API_KEY` (secret), `JOIN_TO_EMAIL` (recipient(s), comma-separated), `JOIN_FROM_EMAIL` (sender on a domain verified in Resend). Without them, the form shows a friendly "didn't send" message that points to Instagram. Spam protection: honeypot field plus a minimum time on page.
- Old WordPress URLs redirect (`astro.config.mjs`).
- Photos live in `src/assets/photos/` and are optimized by Astro. Each one has its origin embedded (`impeccable embed-prompt --scan src/assets public/media` should report 0 missing). Copy new photos from `_source/media/` and embed their origin.

## Open items before launch

- [ ] Upcoming events. Every event on the current site has passed (as of Nov 2026).
- [ ] Monthly meetup details: usual day, time, length, platform link policy, and who hosts.
- [ ] Email address that receives Get Involved submissions.
- [ ] **Owner review of the drafted Privacy and Terms pages** (`src/pages/privacy.astro`, `terms.astro`). They're written in plain language but aren't legal advice.
- [ ] Owner approval of the new copy outside Our Story (home sections, Monthly Meetup FAQs, Events, Join).
- [ ] Founders' personal social links were dropped. Confirm that's intended.
- [ ] Resend account, a verified sending domain, and the Vercel env vars above.
- [x] Alt text written for every content image.
- [x] Awareness video compressed to 12 MB (`public/media/wesh-ovarian-awareness.mp4`).
- [ ] Create a `main` branch for Vercel production. Right now `claude/peaceful-lovelace-oaug59` is the only (and default) branch.

## Next steps

Owner connects Vercel to `main`, then preview, then fill in the open items above, then point the domain at Vercel.

## Conventions

- Commit and push to the session's designated branch. Don't create PRs unless asked.
- `_source/` is reference material only. Copy assets into the app (optimized) instead of linking to `_source/` from the site.
