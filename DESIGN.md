---
name: Toteally Sisters
description: A faithful clone of the original toteallysisters.org (WordPress + Elementor), with gentle fade-ins and a better mobile menu.
colors:
  purple: "#673b98"
  pink: "#ebbad9"
  peach: "#ffdcbc"
  teal: "#0da7a7"
  navy: "#004369"
  ocean: "#1b7895"
  black: "#000000"
  white: "#ffffff"
typography:
  display: "Instrument Serif 400, letter-spacing -2px"
  body: "Satoshi (variable)"
---

# Toteally Sisters design system

**This site is a verbatim clone of the original Elementor site.** The system below was measured from toteallysisters.org, not designed fresh. Match the original; don't "improve" the look. Tokens live in `src/styles/global.css`.

## Color

| Token | Value | Use on the original |
|---|---|---|
| purple | `#673B98` | Buttons, the "Together" and "Classes" sections |
| pink | `#EBBAD9` | 8px image and card borders; section grounds at 21–46% opacity |
| peach | `#FFDCBC` | Sister Support hero, pill labels, the OFO slideshow border, active nav item |
| teal | `#0DA7A7` | Sister Support values section, footer column titles |
| navy | `#004369` | Home "Fueling Hope" section |
| ocean | `#1B7895` | Our Story "Together, They Formed…" section |
| black / white | | Header, footer, text |

## Type (desktop → tablet ≤1024px → phone ≤767px)

- **Section headings:** Instrument Serif 80/90 → 70/80 → 40/50, letter-spacing -2px, often capitalized.
- **Purple-section headings:** 85/95. **Page titles on Events and In The News:** 90/90.
- **Story headings (Our Story):** italic 60/70 → 35/40.
- **Card titles:** 45/50 (home and OFO cards), 40/45–50 (events, team, small boxes).
- **Lead text:** Satoshi 26/39 → 18/27. **Story and card text:** 20/30 → 16/24.
- **Buttons:** Satoshi 700, 16px (12px on phones), uppercase, 1.4px tracking, 15px radius, 18px 30px padding, with an arrow icon.
- **Pill labels** ("Together", "Empower", "Classes"): 14px, weight 900, uppercase, peach or white pill.

## Shapes

- Photos: 8px pink border with a 100px radius (60px on phones). The OFO page's large slideshow has a peach border.
- Cards: white, 8px pink border, 50px radius (icon cards); white, 30px radius (event cards); white, 50px radius (team).
- Hero bottoms on Our Story and Sister Support: 50px bottom corners.
- A white dotted divider closes the navy and ocean sections.
- The teal ribbon pattern (`public/images/tealRibbons.png`) backs the home OFO section and the OFO intro.

## Motion (the only additions to the original look)

- **Fade-in:** blocks marked `data-fade` rise 18px and fade in over 700ms as they enter the viewport, with an optional `--fade-delay` stagger.
- **Slideshows:** 1.2s crossfade every 5s, paused off-screen.
- **Hover:** buttons swap fill, nav links underline, event photos zoom slightly (1.03).
- Everything is static under `prefers-reduced-motion`.

## Images

Original full-resolution files from the WordPress media library, served unmodified from `public/images/`. Never downscale or recompress them.
