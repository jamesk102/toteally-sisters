# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro**, deployed on **Vercel**. Chosen because this is a content site: a static build is fast on phones and cheap to host. Events, team members and press items live as content files, so updates are small, low-risk edits. A visual CMS can be added later if non-technical editors need one; that decision is open.

## Users

**Primary: women affected by gynecologic cancer** (ovarian, uterine, cervical and others). That means survivors ("thrivers"), women currently in treatment, and their caregivers. Many arrive frightened, tired or recently diagnosed, and often on a phone. Their job is to find out whether this is a safe, real community of people who understand, and then to reach out. Success is a submitted Get Involved intake form, which leads to a team member following up and an invitation to the free monthly Zoom meetup.

**Secondary: supporters.** Friends, family, local businesses and community members who come to events (Ovarian Fitness Orlando, give-back nights) or donate. They are served, but never at the expense of the primary visitor.

## Product Purpose

Toteally Sisters is a survivor-founded community for women navigating gynecologic cancers. It exists so that "no woman should walk through this journey alone." It provides:
- free monthly virtual meetups (Zoom)
- in-person gatherings and awareness events, mostly in the Orlando, FL area
- awareness and education, including support for research fundraising

The website succeeds when a woman who needs the community finds it, trusts it, and reaches out.

## Positioning

The organization was founded and is led by survivors: Sherry Baird (stage 3C ovarian cancer, multiple recurrences) and Mai Linh Nguyen Achong (granulosa cell tumor, diagnosed at 26, ten major surgeries). It is a peer community, not a clinic, charity bureaucracy or research body. Its value is lived experience and belonging ("sisterhood"), shared in teal, the awareness color of ovarian cancer.

## Operating Context

- **Get Involved intake form**, which is the de facto contact page. Fields: first name*, last name*, email*, phone, city & state, "I am a..." (Survivor / Currently in treatment / Caregiver / Other), type of cancer ("if comfortable"), what they hope to get from joining, how they heard about us (Instagram / Facebook / Event / A flyer / A friend / OCRA / Other), whether they'd join the monthly virtual meetup (Yes / No / Maybe), and anything else. *Required. Submissions are **emailed to a team member**; no spreadsheet or CRM for now. The recipient address is still to be provided.
- **Events** are dated, local and change often: Ovarian Fitness Orlando (spin, dance fitness and yoga fundraiser, $20,000 goal), Jeni's Ice Cream social, the Kendra Scott give-back.
- **Social channels:** Instagram and Facebook (`toteallysisters`).

## Capabilities and Constraints

- **Independent organization that partners with OCRA** (Ovarian Cancer Research Alliance). Donations go to OCRA on purpose: Donate and Register link to OCRA's Ovarian Fitness Orlando pages (`orlando.ocrafit.ocrahope.org`). Toteally Sisters does **not** take donations directly. Never imply it does, or that it is part of OCRA.
- The intake form collects **sensitive health information**. It must be transmitted securely and never stored in client-side analytics or logs. A privacy policy is required before launch.
- Pages (original URLs kept): Home, Our Story, Sister Support, Events, Ovarian Fitness Orlando, Get Involved, In The News, Privacy Policy, Terms of Use. The old empty Contact Us page forwards to Get Involved.
- **Open:** the form submission recipient email; Privacy Policy and Terms text (both empty on the current site); whether a CMS is needed; whether to compress or externally host the 49 MB awareness video.
- **Event content is stale:** as of November 2026, every event listed on the current site has passed. Upcoming events need confirming before launch.

## Brand Commitments

- Name: **Toteally Sisters** (a pun on "teal"). Tagline on the current site: "united in teal, stronger together." Site description: "A group of women who are gynecological cancer survivors and fighters."
- Logo and ribbon mark: `_source/media/2025/04/toteallySistersLogo.svg`, `_source/media/2025/04/toteallyRibbon.svg`.
- **The owner wants the current site cloned essentially verbatim:** same pages, URLs, layout and copy, with original full-resolution photos. The only changes allowed are subtle ones: fade-ins, the mobile menu, accessibility and speed. An earlier redesign was rejected. See CLAUDE.md for the approved deviations.
- Voice: warm, hopeful, sisterly, plain-spoken. Second person ("you are not alone"), never clinical or pitying. Survivors are "survivors," "fighters" and "thrivers."

## Evidence on Hand

- Real founder stories and quotes (Our Story): `_source/content/text/our-story.md`.
- Real event details and photos: `_source/content/text/events.md`, `_source/media/`.
- Press: WESH 2 segment on Ovarian Cancer Awareness Month (OCRA, BEACH symptoms acronym).
- Statistics cited on the site come from that press item ("nearly 20,000 women… only 17% caught in Stage 1"). Reuse them only with that attribution.
- 52 media originals (founder portraits, event photos, hero images, awareness video), indexed in `_source/media/INDEX.md`. Most images have **no alt text**, so it must be written.
- **Absent, so don't fabricate:** member testimonials, member counts, meetup attendance numbers, partner logos beyond OCRA, any outcome or medical claims.

## Product Principles

1. **The woman seeking support comes first.** Every page should make the next step toward connection obvious and low-pressure.
2. **Real faces, real stories.** Trust comes from the founders' lived experience and real photos, never from stock imagery or invented proof.
3. **Gentle, not clinical.** Readers may be in the hardest moment of their lives. Calm pacing, plain language, nothing alarming or salesy.
4. **Honest about the partnership.** Toteally Sisters supports OCRA. Fundraising always clearly routes to OCRA.
5. **Easy to keep current.** Events and team change. Stale content erodes trust, so updates must be simple.

## Accessibility & Inclusion

Target **WCAG 2.2 AA**. Visitors include people in treatment who may have fatigue, neuropathy, "chemo brain" or vision changes. That calls for generous type sizes, large tap targets, clear focus states, simple forms with forgiving validation, and respect for reduced-motion preferences. Write meaningful alt text for every content image.
