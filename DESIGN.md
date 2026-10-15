---
name: Credence Africa
description: The institutional execution system for Africa's growth markets.
source: "Design canvas 'Credence Africa Website' (claude.ai artifact YEgREDnGiGapoToW1cqokV), implemented October 2026"
colors:
  primary: "#FF4820"
  primary-deep: "#C42D0A"
  ink: "#0A0A0A"
  black: "#000000"
  panel: "#111111"
  tile: "#1E1E1E"
  surface: "#FFFFFF"
  soft: "#FAFAF9"
  line: "#E7E5E2"
  line-soft: "#EEEBE7"
  line-dark: "#262626"
  chip: "#D9D6D2"
  body: "#3F3F46"
  body-2: "#4A4A52"
  body-3: "#5C5C63"
  body-dark: "#BDBDBD"
  mute: "#8C8C8C"
  whatsapp: "#1F7A4D"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(46px, 6.2vw, 90px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  page-title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 80px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  closing:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(40px, 5vw, 76px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  statement:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 50px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  kicker:
    fontFamily: "Outfit, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
rounded:
  none: "0"
  pill: "999px"
spacing:
  section: "128px"
  section-tight: "112px"
  gutter: "40px (20px at 720px and below)"
  container: "1400px"
components:
  pill-light: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", rounded: "{rounded.pill}", padding: "13px 22px" }
  pill-dark: { backgroundColor: "{colors.ink}", textColor: "{colors.surface}", rounded: "{rounded.pill}", padding: "13px 22px" }
  pill-accent: { backgroundColor: "{colors.primary}", textColor: "{colors.ink}", rounded: "{rounded.pill}", padding: "13px 22px" }
  pill-outline: { backgroundColor: "transparent", textColor: "currentColor", rounded: "{rounded.pill}", padding: "12px 22px" }
---

# Design System: Credence Africa

Implemented from the October 2026 design canvas. The canvas is the source of truth; this file
summarises it so new work stays consistent. The code lives in `src/components/site/*`
(primitives, hero, copy sections and the page templates) and the shared rules at the end of
`src/app/globals.css`.

## 1. Overview

A photographic, editorial system. Every page opens on one full-bleed photograph (professionals
on a terrace above the city, set at 72% across) under a shade that darkens the top, bottom and
left where the text sits, with a translucent header laid over it and a very large, light, tightly tracked
title. Below the hero, white sections alternate with ink (#0A0A0A) bands; content sits in
hairline grids and numbered ledger rows rather than floating cards. A single vermillion
(#FF4820) marks emphasis: kickers, numbers, tile icons, rules and the primary call to action on
dark grounds. Pages close on a darkened city photograph with a centred call to action.

## 2. Colour

- **Vermillion** `#FF4820` (`primary`): kicker squares, icon strokes, step rules, accent pills
  (with ink text), active navigation. It is below 4.5:1 on white, so accent text on light
  grounds uses **primary-deep** `#C42D0A`.
- **Ink** `#0A0A0A`: text on white, dark bands, dark pills, icon tiles. **Black** `#000000` is
  the footer. **Panel** `#111111` and **tile** `#1E1E1E` are surfaces inside dark bands.
- **Hairlines**: `#E7E5E2` on white, `#EEEBE7` inside lists, `#262626` on ink. Chips use `#D9D6D2`.
- **Text greys**: body `#3F3F46`, secondary `#4A4A52`, tertiary `#5C5C63`, statement tails and
  meta `#8C8C8C`, large numerals `#B5B5B5` / `#C9C6C2`, body on ink `#BDBDBD`.

## 3. Typography

One family, Outfit. Headings are weight 400 with tight negative tracking (-0.035em sections,
-0.045em heroes and closing bands); h3 is 500 at -0.01em. Body copy is 17px at 1.6. Kickers are
13.5px with a 6px vermillion square before them (`.eb`). Section headings drop to 32px at phone
width (`.h2`). Long statements pair a dark lead with a grey (`#8C8C8C`) continuation.

## 4. Layout

Container 1400px with 40px gutters (20px at 720px and below). Sections are 112–128px tall in
padding. Two-column splits are 5fr / 7fr with a 56px gap and collapse under 900px. Grids are
hairline grids (`.bgrid`): the container draws the top and left rules and each cell its right
and bottom, so there is never a gap between cells.

## 5. Components

- **Pills** (`Pill`): light, dark, accent and outline variants, 14.5px, fully rounded, with the
  up-right arrow on primary variants. Hover lifts 2px with a soft shadow.
- **Chips** (`Chip`): bordered pills for tags and related links; hover darkens the border.
- **Icon tiles** (`IconTile`): 44px ink squares with a vermillion stroke icon; they lift when
  their card is hovered.
- **Hero** (`Hero`): photo, gradient, breadcrumb, title, base row with scroll cue, intro,
  buttons and an optional white feature card or key/value panel. Home departs from the canvas (at
  the user's request): the intro and buttons sit on the left with the scroll cue under them, the
  card on the far right, and the gap between the title and the rule stops at 96px (a taller screen
  adds the extra above the title).
- **Copy template** (`CopyPageView`, `CopySections`): every content page (home, about, services
  and their product pages, sectors, themes, who we work with) is the hero followed by statement,
  split, cards, steps, directory, FAQ and closing sections. The copy lives in `src/lib/*-content.ts`,
  `audience-pages.ts`, `service-pages.ts` and `copy-pages.ts`, generated from the canvas, with each
  page's search title and description.
- **Header**: absolute over the hero, translucent ink with a 6px blur, dropdown menus on
  `#111111`, a white "Book a Consultation" pill; collapses to a menu button at 1180px. Services
  lists the four trade programmes under Trade and Growth, indented, 13px and `#A3A3A3`.
- **Sister-site links**: a link to Credence Institute, Credible Perspectives or Credence Engage
  that has no icon of its own ends in a vermillion ↗ (`::after`), nudging up-right on hover. It is
  written `\2197\FE0E` and the body sets `font-variant-emoji: text`, so iOS never swaps in the emoji.
- **Footer**: black, a bordered four-cell grid, vermillion headings; floating WhatsApp and call
  buttons sit bottom-right on every page.
- **Closing band** (`CtaBand`): the city photograph darkened, centred heading, optional text and pills.
- **FAQ** (`FaqList`): the heading across the top and the questions in two columns (one under
  900px); native details/summary rows with a round plus that turns into a cross.

## 6. Motion

Load entrances on the header and hero (`cr-in`, staggered `cr-d1`–`cr-d4`, the hero photo
settling from 1.07 scale). Below the fold, headings, kickers and grid cells reveal on scroll with
CSS scroll timelines where the browser supports them; elsewhere they are simply visible.
Hover: pills lift, arrows nudge up-right, grid cards turn their title vermillion-deep.
`prefers-reduced-motion: reduce` switches every animation and transition off.

## 7. Responsive and touch

The canvas is drawn at desktop and 390px. These rules adapt it to the sizes between and beyond
(added October 2026; they are deliberate departures from the canvas, not drift):

- **Gutters:** header, hero and footer use the page's 20px gutter at 720px and below (footer
  cells 24px), so every left edge lines up on a phone.
- **Hero:** the base row has three columns from 984px. Below that it stacks into one column
  without the "Scroll down" cue, and the feature card or key/value panel caps at 560px. The
  canvas's phone title sizes (38/40/42px) scale down below about 400px so long words fit.
- **Header:** at 1180px and below it returns as a near-opaque bar when the reader scrolls up and
  slides away on scroll down; at the top of the page it is the canvas header. The menu panel
  scrolls within the screen. Desktop keeps the canvas behaviour (no pinning).
- **Touch:** hover effects apply only where hovering exists (`(hover: hover)`; Tailwind's
  `hoverOnlyWhenSupported`); touch gets a press state instead. Small controls carry `.hit`,
  which grows the tap area to 44px on coarse pointers (`::before`) without changing their look; footer link
  rows open to 44px apart on touch so those areas never overlap.
- **Images:** photos in sections use `next/image` (sized WebP per device); the `.ph` and
  `.ph-city` grounds switch to 960px copies at 720px and below. Floating buttons sit in a row
  on screens under 500px tall.

## 8. Rules

- Buttons and chips are pills; cards, sections, images and grids keep square corners.
- Text on vermillion is ink, never white. Vermillion text on white is reserved for large sizes;
  use `#C42D0A` for small accent text.
- Separate content with hairlines and ink bands, not shadows; the hero card and dropdowns are
  the only shadowed elements.
- Pages start with the hero (the header is white and sits over it).
