# Toteally Sisters website

Rebuilding **toteallysisters.org**, currently on WordPress + Elementor, as a new site in this repo, deployed on **Vercel**. It is a survivor-founded community for women affected by gynecologic cancers.

**Status (Nov 2026): launched.** A faithful clone of the original WordPress site, live at **toteallysisters.org** on Vercel (DNS switched from Elementor; the WordPress site is no longer served). Every push to `main` deploys to production. URLs use trailing slashes, like the original (`trailingSlash: 'always'`).

> **The owner's direction overrides everything below it:** keep the existing site essentially **verbatim**: same pages, same original URLs, same layout, same copy word for word, same photos at **full original resolution (never downscale or re-encode photos)**. Only subtle improvements: gentle fade-ins on scroll, the new mobile menu, accessibility (alt text, focus, labels) and speed. An earlier redesign ("the community board") was rejected and replaced; don't bring it back. Ask before changing any wording, layout or imagery.

## Read first

- `PRODUCT.md`: audience, purpose, the OCRA partnership, voice, accessibility, and what not to fabricate. **This is the top authority for every design decision.**
- `DESIGN.md`: the clone's visual system (tokens measured from the original site).
- `_source/README.md`: snapshot of the current site (media, fonts, brand colors, page inventory, links). Page copy is in `_source/content/text/`, and all media is indexed in `_source/media/INDEX.md`.

## Decisions already made

- **Faithful clone** (see the owner's direction above). Pages and URLs match WordPress: `/`, `/our-story/`, `/sister-support/`, `/events/`, `/ovarian-fitness-orlando/`, `/get-involved/`, `/press-news/`, `/privacy-policy/`, `/terms-of-use/`. `/contact-us/` forwards to Get Involved, and the redesign's short-lived URLs (`/join`, `/monthly-meetup`, `/in-the-news`, `/privacy`, `/terms`, `/events/ovarian-fitness-orlando`) forward to the originals.
- **Owner-approved deviations from verbatim:** the Get Involved form keeps the same 11 fields and wording, but its three dropdowns start on "Choose one" (no pre-filled answers) and the Last Name placeholder says "Enter your last name". Privacy Policy and Terms of Use use Claude's plain-language drafts (blank on the original). On the Events page, an event moves to "Past Events" automatically once its date passes (the home page's Ovarian Fitness Orlando section always shows, as on the original).
- **Other subtle fixes:** the Jeni's event card links to its own Instagram post (the original's image and title linked to the OFO page by mistake); the "Fueling Hope" heading comes before its text on phones; Get Involved opens in the same tab.
- **OCRA:** Toteally Sisters is independent and partners with OCRA. Donate links go to OCRA's Ovarian Fitness Orlando pages.
- **Stack:** Astro on Vercel. Form submissions are emailed via Resend.

## Design skills: priority when they conflict

Installed in `.claude/skills/`. When guidance conflicts, follow this order:

0. **The owner's verbatim-clone direction (top of this file) beats every skill.** Skills apply only to the subtle-improvement layer (motion polish, accessibility, performance), never to restyling or rewriting.
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
- **Pages** are in `src/pages/`, one file per original page, with the original copy written directly in them. Shared styles and the original type sizes and colors are in `src/styles/global.css`. Header, footer, slideshow, icon cards and event cards are in `src/components/`.
- **Photos** are the original full-resolution files in `public/images/`, served as-is (no resizing). Line icons copied from the original are in `src/icons/`.
- **Slideshows** (home hero, home OFO, OFO page) crossfade every 5 seconds, pause when off screen, and show only the first photo under reduced motion.
- **Fade-ins:** add `data-fade` (and optional `style="--fade-delay:120ms"`) to any block. Content stays visible without JavaScript or with reduced motion.
- **Events** are Markdown files in `src/content/events/` (title, start/end, the card's date label exactly as written, summary, image path, link, `hidden`).
- **Get Involved form** posts to `src/pages/api/join.ts`, which emails the team via **Resend**. Vercel environment variables: `RESEND_API_KEY` (secret), `JOIN_TO_EMAIL`, `JOIN_FROM_EMAIL` (a sender on a domain verified in Resend). Without them, the form shows a "didn't send" message pointing to Instagram. The endpoint only accepts same-site posts, caps bodies at 16 KB, rate-limits 5 posts per 10 minutes per IP (in memory, per instance; a 429 shows the same "didn't send" message), strips line breaks from the subject, and never returns Resend's error details to the browser.
- The news video is the original at full 1280×720, re-encoded for streaming (`public/media/`).
- **Security and cache headers** (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, plus caching for `/images`, `/fonts` and `/media`) are added to `.vercel/output/config.json` by `integrations/vercel-headers.mjs`, because `vercel.json` isn't applied with this adapter. Any new third-party script, font, embed or API must be allowed in its CSP. It also 308-redirects every request on `toteally-sisters.vercel.app` to the same path on `toteallysisters.org` (preview URLs are unaffected).
- **SEO:** each page passes `description` (and optionally `image`) to `Base.astro`, which renders the title, description, canonical, Open Graph and Twitter tags. Utility pages pass `noindex`. `src/pages/sitemap.xml.ts` lists the indexable pages (add new pages there), and `public/robots.txt` points to it.
- **Cookies:** none. Vercel Web Analytics is cookie-free, so no consent banner is needed. Adding anything that sets cookies or tracks visitors (reCAPTCHA, Meta Pixel, Google Analytics, YouTube embeds) would require a consent banner and CSP changes.
- **Contrast fix (owner-approved):** the Sister Support "Core Values" section and its "EMPOWER" label use `--teal-dark` (`#0A8080`, 4.76:1 with white) instead of the brand teal `#0DA7A7`, which failed WCAG AA. Brand teal stays everywhere else.

## Open items before launch

- [ ] Upcoming events. Every event on the current site has passed (as of Nov 2026).
- [x] Resend set up and tested (sender `support@toteallysisters.org`). Test mode: a submission using `delivered@resend.dev` as the email goes only to Resend's test inbox.
- [x] Privacy Policy and Terms of Use: short, broad, website-only versions (owner asked to keep them general, not about meetups or services). Not legal advice.
- [x] Domain pointed at Vercel.
- [x] Alt text written for every content image.
- [x] News video kept at full 1280×720 (`public/media/ovarian-cancer-awareness.mp4`).
- [x] `main` is the production branch and the GitHub default branch.

## Next steps

Rollback if ever needed: set the DNS A record `@` back to `162.159.137.9` and the `www` CNAME back to `oxfvlquw.elementor.cloud`.

## Conventions

- Commit and push to the session's designated branch. Don't create PRs unless asked.
- `_source/` is reference material only. Copy assets into the app (optimized) instead of linking to `_source/` from the site.
