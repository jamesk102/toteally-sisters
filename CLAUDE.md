# Toteally Sisters website

Rebuilding **toteallysisters.org**, currently on WordPress + Elementor, as a new site in this repo, deployed on **Vercel**. It is a survivor-founded community for women affected by gynecologic cancers.

**Status:** pre-build. The source has been captured, skills are installed, and PRODUCT.md is written. Do not start building until the owner says go.

## Read first

- `PRODUCT.md`: audience, purpose, the OCRA partnership, voice, accessibility, and what not to fabricate. **This is the top authority for every design decision.**
- `_source/README.md`: snapshot of the current site (media, fonts, brand colors, page inventory, links). Page copy is in `_source/content/text/`, and all media is indexed in `_source/media/INDEX.md`.

## Decisions already made

- **Direction:** keep the feel of the current site and make it better. This is a refinement of the existing identity, not a rebrand. Keep the palette (purple `#673B98`, pink `#EBBAD9`, peach `#FFDCBC`, teal `#0DA7A7`), the Instrument Serif headings and Satoshi body text, the real photos and the warm tone.
- **Stack:** Astro on Vercel. Events, team members and press items live as content files.
- **Get Involved is the contact page.** Its 11-field intake form (listed in PRODUCT.md) is the site's main conversion. Submissions are **emailed to a team member**, with no Google Sheet or CRM. The old empty Contact Us page is dropped.
- **OCRA:** Toteally Sisters is independent and partners with OCRA. All Donate and Register links go to OCRA's Ovarian Fitness Orlando pages. Never imply Toteally Sisters takes donations itself or is part of OCRA.

### Decided after the Impeccable critique (Nov 2026; current site scored 16/36)

The full critique is in `.impeccable/critique/`.

- **The monthly Zoom meetup is the centerpiece.** Sister Support becomes a "Monthly Meetup / What to expect" page: when, how long, cameras optional, caregivers welcome, and answers to first-timer questions. Home and every "Join" button lead there. Say outright that **all gynecologic cancers are welcome**, not only ovarian.
- **Navigation:** "Join a meetup" (Get Involved) is the main button everywhere, including the phone menu, and opens in the same tab. **Donate becomes a smaller text link labeled "Donate via OCRA ↗"** and must never appear twice.
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

## Open items before launch

- [ ] Upcoming events. Every event on the current site has passed (as of Nov 2026).
- [ ] Monthly meetup details: usual day, time, length, platform link policy, and who hosts.
- [ ] Email address that receives Get Involved submissions.
- [ ] Privacy Policy and Terms of Use text. Both are empty on the current site, and the form collects health information.
- [ ] Alt text for the images. Most have none, so write it.
- [ ] Compress or externally host the 49 MB awareness video (`_source/media/2025/05/ovarianCancerAwareness.mp4`).
- [ ] Create a `main` branch for Vercel production. Right now `claude/peaceful-lovelace-oaug59` is the only (and default) branch.

## Next step when the owner says go

Run `/impeccable critique` on the live site to define what "better" means, then `/impeccable document` to record the current visual system, then build.

## Conventions

- Commit and push to the session's designated branch. Don't create PRs unless asked.
- `_source/` is reference material only. Copy assets into the app (optimized) instead of linking to `_source/` from the site.
