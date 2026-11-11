---
name: Toteally Sisters
description: A survivor-run community board for women facing gynecologic cancer, and the people who love them.
colors:
  purple: "#673b98"
  purple-deep: "#4f2b78"
  pink: "#f6ddee"
  pink-strong: "#ebbad9"
  peach: "#ffdcbc"
  teal: "#0da7a7"
  teal-ink: "#05605f"
  ink: "#1d1320"
  ink-soft: "#4a3b4e"
  night: "#120c14"
  paper: "#ffffff"
  line: "rgb(29 19 32 / 0.14)"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(3rem, 2rem + 4.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 1.7rem + 2.6vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 1.4rem + 1.3vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.5vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.94rem, 0.9rem + 0.15vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.09em"
  numeral:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 0.8
rounded:
  card: "4px"
  panel: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 3vw, 4rem)"
  section: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  measure: "36rem"
  container: "1312px"
components:
  button-primary:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.6em"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.purple-deep}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.purple}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.6em"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.purple}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.6em"
    height: "52px"
  button-light-hover:
    textColor: "{colors.purple-deep}"
  chip-welcome:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem"
  choice-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
    height: "48px"
  choice-chip-checked:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.paper}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1rem"
    height: "54px"
  print:
    backgroundColor: "{colors.paper}"
    padding: "clamp(8px, 0.9vw, 13px) clamp(8px, 0.9vw, 13px) clamp(10px, 1.1vw, 16px)"
  invite-card:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    padding: "clamp(1.4rem, 1rem + 1.2vw, 1.8rem)"
    width: "22rem"
  form-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(1.4rem, 0.8rem + 2.5vw, 2.75rem)"
  site-header:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    height: "84px"
---

# Design System: Toteally Sisters

## Overview

**Creative North Star: "The Community Corkboard"**

The site is a pinboard kept by the sisters themselves. Pages open on pink ribbon-pattern paper (the board), and real photographs are pinned to it as white-bordered prints at slight angles, held by translucent strips of teal or pink tape. The next meetup is always pinned on top as a peach invitation card with a purple pin. Everything that is not the board is quiet: white paper sections, warm plum-black text, and a near-black header and footer that frame the board the way a wall frames a corkboard.

Type does the emotional work. Instrument Serif headlines run large and tight, and on page titles and signature lines a single italic phrase turns purple ("this *alone.*", "*We'll save you a seat.*"). Satoshi carries everything readable at a generous 17 to 19px with 1.6 leading, because visitors may be tired, in treatment, or reading through vision changes. Purple is the voice of action: every primary button, the pin, the focus ring, the step numerals.

Density is relaxed and one-idea-per-section. Sections alternate grounds (board, white, peach, plain pink) so whole bands of brand color own the page, and each section closes on one obvious next step. Motion is a single authored moment: prints settle onto the board once on first load, and nothing else performs.

**Key Characteristics:**
- Pink ribbon-pattern board ground (`ground-board`) behind page openings and gatherings.
- Real photos only, framed as white-bordered taped prints at -3 to 3 degrees of tilt.
- Peach invitation card with a purple pin as the recurring home of the primary action.
- Instrument Serif display with one purple italic phrase on titles; Satoshi body.
- Purple pill buttons; near-black header, footer and phone join bar.
- Soft neutral paper shadows; no borders on photos, no gradients, no glass.
- One settle animation (420ms, 50ms stagger), static under reduced motion.

## Colors

A warm pink-peach paper world held together by one confident purple, with teal as the ribbon and the tape, never the text.

### Primary
- **Sisterhood Purple** (`purple`): Every primary action (buttons, the join bar button, checked form choices), the invitation pin, the focus ring, the large step numerals, and the italic accent phrase in page titles and signature lines. Brand commitment carried from the incumbent site.
- **Deep Plum Purple** (`purple-deep`): Hover and pressed state of purple actions; hover color for text links that sit on peach.

### Secondary
- **Ribbon Board Pink** (`pink`): The board ground. Under the ribbon pattern on page heads, the home hero and gatherings; plain on closing sections and the form's privacy note.
- **Brand Pink** (`pink-strong`): Borders of welcome chips, the resting underline of arrow links, footer column titles, text selection, scrollbar thumb, and the pink tape strip (at 85% opacity).
- **Invitation Peach** (`peach`): The invitation card, whole peach sections (the home meetup band), and the on-dark accent: current-page nav underline, nav hover underline, skip link, and the focus ring on dark surfaces.

### Tertiary
- **Ribbon Teal** (`teal`): Decorative only. The ribbon motif in the board pattern, teal tape (at 45% opacity, multiplied), and bullet dots in list items.
- **Deep Teal Ink** (`teal-ink`): The text form of teal: event dates and "when" lines (6.9:1 on white, 5.5:1 on pink).

### Neutral
- **Plum-Black Ink** (`ink`): Body text and headlines on all light grounds.
- **Soft Plum Ink** (`ink-soft`): Secondary text, citations, hints, place names, required-field notes (9:1 on white).
- **Night** (`night`): Header, footer, mobile menu; the phone join bar at 94% opacity.
- **Paper White** (`paper`): Page ground between brand sections, print borders, chips, form card, the light button on dark.
- **Hairline** (`line`): Thin dividers on light grounds.
- **Error Red** (`error`): Form error text, invalid field borders, and the error summary border only.

### Named Rules
**The Purple Means Go Rule.** Purple marks what you can do (buttons, checked choices, focus) plus the small set of brand accents (the italic title phrase, the pin, the step numerals). It never fills a section or colors body copy.

**The Teal Never Speaks Rule.** `teal` is ribbon, tape and dots. Text that wants teal uses `teal-ink`; nothing white ever sits on `teal`.

**The Peach On Dark Rule.** On night surfaces, peach replaces purple as the accent: current-page marks, hover underlines and the focus ring.

## Typography

**Display Font:** Instrument Serif (with Times New Roman, serif); regular and italic, self-hosted.
**Body Font:** Satoshi variable (with ui-sans-serif, system-ui, sans-serif), self-hosted.

**Character:** A condensed, bookish serif that feels handwritten-on-a-card at large sizes, paired with a friendly geometric sans that stays legible when the reader is exhausted.

### Hierarchy
- **Display** (400, 48 to 96px fluid, 1.02): One H1 per page, held to about 11 to 14ch so it breaks over two or three lines.
- **Headline** (400, 37 to 61px fluid, 1.02): Section H2s. Balanced wrapping.
- **Title** (400, 27 to 38px fluid, 1.08): H3s, event titles, founder pull quotes (at 1.12).
- **Lede** (Satoshi 400, 20 to 23px, 1.5): The paragraph under every H1 and H2, 34 to 38rem wide.
- **Body** (Satoshi 400, 17 to 19px, 1.6): All running text; prose capped at the 36rem measure.
- **Small** (Satoshi 400, 15 to 16px): Hints, legal lines, OCRA notes.
- **Label** (Satoshi 700, 14px, 0.09em, uppercase): Desktop header navigation and the header join pill only.
- **Numeral** (Instrument Serif 400, 44px, 0.8, purple): The 1-2-3 join step numbers.

### Named Rules
**The One Italic Phrase Rule.** A title may carry one italic phrase in purple, at the end, as its emotional turn ("More than a *diagnosis*"). It is reserved for page titles, the closing signature line and the invitation card; section H2s stay roman.

**The Generous Floor Rule.** Body never drops below 17px, form inputs never below 16px, and tap targets never below 44px.

## Layout

Content sits in a centered container of `min(100% - 2 × gutter, 1312px)`; the header bar and home hero widen to 1440px. Side gutters scale from 16px to 64px. Sections pad vertically by the fluid `section` step (72 to 136px), and alternate grounds rather than using dividers. Prose blocks are capped at 36rem.

The single desktop breakpoint is 1000px: below it everything is one column and the phone shows a fixed night join bar once the page's primary button scrolls away (the footer adds 80px plus the safe-area inset of bottom padding so the bar never covers it). Above it, two-column grids appear with asymmetric ratios (1.1/0.9, 0.9/1.1, 1.15/0.85) and gaps of 3.5 to 5rem. Secondary breakpoints (640, 700, 760, 800, 900px) are used only for local rows such as form field pairs, step strips and print grids.

On the home hero board, prints are absolutely placed in an overlapping cluster around the invitation card; on phones only the founders print and the invitation remain, overlapping by 4.5rem. Every section ends with a `next-step` row: one button or arrow link, never a competing pair of filled buttons.

## Elevation & Depth

Depth is physical, not interface: objects pinned to paper cast soft, neutral, plum-tinted shadows that fall downward with a tight contact edge and a wide negative-spread blur. Surfaces that are part of the page (sections, chips, inputs) stay flat. Tilt and overlap carry as much depth as the shadows do.

### Shadow Vocabulary
- **Print** (`0 1px 2px rgb(18 12 20 / 0.12), 0 16px 32px -14px rgb(18 12 20 / 0.38)`): Every photo print.
- **Card** (`0 2px 4px rgb(18 12 20 / 0.08), 0 22px 40px -18px rgb(18 12 20 / 0.42)`): The invitation card, the empty-gathering card, the join form card.
- **Ticket** (`0 1px 2px rgb(18 12 20 / 0.12), 0 6px 12px -6px rgb(18 12 20 / 0.35)`): Small place and date tickets on event prints.
- **Pin** (`0 3px 5px rgb(18 12 20 / 0.35)`): The purple invitation pin.
- **Button lift** (`0 8px 18px -10px rgb(18 12 20 / 0.6)`): Hover on fine pointers only.

### Named Rules
**The Pinned Things Lift Rule.** Only objects pinned to the board (prints, invitation, tickets, the pin) carry shadow at rest. Everything else is flat until hovered.

## Shapes

Pinned paper is square-cornered: prints, the invitation card, tape and tickets have no radius, and they sit rotated (prints -3 to 3 degrees, invitation -1.2, empty card -0.6, tape -4, tickets 3). Interface pieces are rounded: buttons, chips, form choices and the menu toggle are full pills; inputs, small notes and the OCRA logo plate use 10px; the join form card, a paper sheet, uses a near-square 4px. Circles appear only as the pin and list dots. Icons are drawn 24px SVGs with a 1.8 to 2px round-capped stroke in `currentColor`.

## Components

### Buttons
Confident, round and purple; they look pressable and nothing else on the page competes with them.
- **Shape:** Full pill (999px), 2px border matching the fill, min-height 52px.
- **Primary:** Purple fill, white Satoshi 700 at body size, 0.85em by 1.6em padding, optional trailing arrow.
- **Hover / Focus:** On fine pointers, deep purple fill plus the button lift shadow over 220ms ease-out; press scales to 0.97 over 140ms. Focus is the global 3px purple ring at 3px offset (peach on dark).
- **Ghost:** Transparent with purple border and text; fills purple on hover.
- **Light:** White pill with purple text, for dark surfaces (footer).
- **Header join pill:** Primary at 46px tall, 14px uppercase label at 0.08em; turns white with purple text on the join page.

### Arrow Links
- **Style:** Satoshi 700 in ink, 2px underline in brand pink, followed by a drawn arrow SVG (right, left or out). Hover turns the underline purple and nudges the arrow 2px. Used for every secondary next step.

### Chips
- **Welcome chips:** White pills with a 1.5px brand-pink border, 15px Satoshi 600. Static statements of who belongs, not filters.
- **Form choices:** 48px pills with a 1.5px border on white; hover borders purple; checked fills purple with white text; focus shows the purple ring on the pill.

### Cards / Containers
- **Invitation card (signature):** Peach, square, rotated -1.2 degrees, card shadow, max 22rem, a purple 18px pin at the top left. Holds a title (with one italic purple phrase), a short paragraph, a full-width primary button and a centered "What to expect" link.
- **Form card:** White paper, 4px radius, card shadow, fluid 22 to 44px padding.
- **Empty-state card:** White, card shadow, rotated -0.6 degrees, framing an empty event list as an invitation.
- **Notes:** Pink or white panels at 10px radius with 1rem padding for privacy and past-event notes.

### Inputs / Fields
- **Style:** White, 1.5px border, 10px radius, min-height 54px, 16px minimum text, labels in Satoshi 700 above the field, hints in soft ink below.
- **Focus:** Border turns purple with a 3px purple halo at 35% opacity.
- **Error:** Error-red border and a bold inline message; an error summary panel with a 2px red border leads the form.

### Navigation
- **Desktop header:** Night bar 84px tall, sticky, logo at 60px left; uppercase 14px Satoshi 700 links with a 2px peach underline that grows from the left on hover and stays on the current page (also turning the text peach). "Donate via OCRA" sits in sentence case at weight 500 with an out arrow, then the purple join pill.
- **Phone:** A pill "Menu" toggle whose three lines morph into an X; the menu fills the screen in night with the join button first and links set in 32px Instrument Serif over hairline dividers.
- **Footer:** Night, three columns from 800px, light join button, 44px link targets with peach underline on hover.

### Print (signature)
A real photo pinned to the board: white border (8 to 13px, slightly deeper at the bottom), print shadow, a per-instance tilt, and a strip of tape centered at the top (teal at 45% or pink at 85%, multiply-blended). An optional white ticket at the bottom-right states the true place and date. On first load, board prints and the invitation settle once: 420ms (invitation 440ms) on the settle curve, dropping 14 to 16px and rotating 4 degrees into place, staggered 50ms with a 60ms lead-in. Static under reduced motion.

### Join Steps
A numbered 1-2-3 list: large purple serif numerals beside short Satoshi lines, horizontal from 700px, stacked in the join page sidebar.

## Do's and Don'ts

### Do:
- **Do** pin real photos as prints: white border, tape, a tilt between -3 and 3 degrees, the print shadow.
- **Do** keep the next meetup visible as the peach invitation card with the purple pin, and close every section with one next step.
- **Do** use `teal-ink` for any teal text and keep `teal` for ribbons, tape and dots.
- **Do** give one italic purple phrase to page titles and signature lines only.
- **Do** switch accents to peach on night surfaces, including the focus ring.
- **Do** keep body at 17px or more, inputs at 16px or more, targets at 44px or more, and honor reduced motion.
- **Do** let whole sections take pink, peach or the board as their ground instead of drawing dividers.

### Don't:
- **Don't** put white or small text on `teal`.
- **Don't** round prints, tape, tickets or the invitation card; pinned paper is square.
- **Don't** add motion beyond the one settle moment and plain state transitions (140 to 320ms, ease-out).
- **Don't** use purple as a section fill or for body copy.
- **Don't** italicize more than one phrase in a title, or add italic accents to ordinary section headings.
- **Don't** use stock or stand-in photography; prints are real moments only.
