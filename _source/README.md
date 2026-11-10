# Source snapshot: toteallysisters.org (WordPress + Elementor)

Pulled on 2026-11-10 from the live site's public REST API and rendered pages.
This folder is **reference material for the rebuild**. It is not the site itself.

## Contents

| Path | What it is |
|---|---|
| `media/` | Full-resolution originals from the WordPress media library (`wp-content/uploads` layout kept). See `media/INDEX.md`. |
| `fonts/` | Brand fonts that were self-hosted on WordPress: Satoshi (variable) and Instrument Serif (regular and italic). |
| `content/text/*.md` | Plain-text copy of each page. |
| `content/*.json` | Raw REST API responses: pages, media metadata, site info. |
| `html/` | Rendered HTML of every page, used as the layout reference. |
| `css/` | Theme and Elementor stylesheets, including global colors and typography. |

## Brand tokens (from Elementor global settings)

**Colors**
- Purple (accent): `#673B98`
- Pink: `#EBBAD9`
- Peach: `#FFDCBC`
- Teal: `#0DA7A7`
- Black/text: `#000000`, White: `#FFFFFF`

**Typography**
- Headings: *Instrument Serif* (regular and italic), large display sizes (100px / 80px desktop), tight letter-spacing.
- Body: *Satoshi*, 18px.
- Accent/labels: *Satoshi* 900 weight, uppercase, 1.4px tracking.

## Pages on the live site

| Page | Slug | Notes |
|---|---|---|
| Home | `/` | |
| Our Story | `/our-story/` | |
| Sister Support | `/sister-support/` | |
| Events | `/events/` | |
| Ovarian Fitness Orlando | `/ovarian-fitness-orlando/` | Links out to the OCRA Fit Orlando signup/donate pages. |
| Get Involved | `/get-involved/` | Has an Elementor form (name and email). It needs a replacement form backend. |
| In The News | `/press-news/` | Links to a WESH article. |
| Contact Us | `/contact-us/` | **Empty on the live site.** |
| Privacy Policy | `/privacy-policy/` | **Empty on the live site.** |
| Terms of Use | `/terms-of-use/` | **Empty on the live site.** |

## External links and integrations
- Donate → `https://orlando.ocrafit.ocrahope.org/` (and `/donate`, `/signup`)
- Instagram: `instagram.com/toteallysisters`
- Facebook: `facebook.com/toteallysisters`
- No analytics, payment, or newsletter scripts were found.

## Gaps
- The API reports 55 media items, but only 51 are public. The other 4 are likely drafts or private.
- `media/2025/05/ovarianCancerAwareness.mp4` is 49 MB. Compress it or move it to a video host before launch.
- The Elementor templates (header/footer library) are not public. They were rebuilt from the rendered HTML instead.
