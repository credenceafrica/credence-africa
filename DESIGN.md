---
name: Credence Africa
description: The institutional execution system for Africa's growth markets.
colors:
  primary: "#EB4928"
  primary-foreground: "#F8FAFC"
  ink: "#020817"
  surface: "#F2F2F2"
  card: "#FFFFFF"
  secondary: "#E0E6EB"
  muted: "#F1F5F9"
  muted-foreground: "#64748B"
  border: "#E2E8F0"
  destructive: "#EF4444"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  none: "0rem"
spacing:
  section: "clamp(4rem, 8vw, 6rem)"
  block: "2rem"
  tight: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
  button-outline:
    backgroundColor: "{colors.card}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "3.5rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

# Design System: Credence Africa

## 1. Overview

**Creative North Star: "The Execution Ledger"**

Credence Africa reads like the working surface of an institution that gets serious things
done — a ledger, a prospectus, a signed mandate — not a vendor's pitch deck. The system is
built on hard right angles (zero border-radius everywhere), a single decisive vermillion, a
near-black institutional ink, and one geometric sans carried across light display weights.
The result is calm, confident and unmistakably continental: it feels like a peer to
ministers and fund managers, never a startup courting them.

The voice is authoritative and decisive with pan-African ambition. Quiet power over noise:
the design earns trust with structure and substance before it ever sells. Vermillion is the
single instrument of emphasis and energy — used in committed, full-bleed blocks on hero and
conversion surfaces, and as a sharp accent everywhere else — against generous light space and
deep navy gravitas.

This system explicitly rejects interchangeable Big-4 consulting sameness (stock skylines,
corporate blue, glassy gradients), flashy startup/SaaS energy (gradient meshes, big rounded
cards, playful illustration), NGO/aid framing, and bureaucratic government-portal stiffness.
Distinctiveness is part of the credibility.

**Key Characteristics:**
- Zero radius — every corner is square; sharpness is the brand's posture.
- One geometric sans (Outfit) in light display weights; hierarchy comes from scale, not weight.
- A single vermillion accent, deployed with commitment (drenched bands) or restraint (sharp accents) — never timidly sprinkled.
- Near-black navy ink for gravitas; light gray ground for breathing room.
- Full-bleed colored bands and full-width hairlines instead of decorative card chrome.

## 2. Colors

A three-role system: a light institutional ground, a near-black ink for authority, and one
vermillion that carries all emphasis and energy.

### Primary
- **Vermillion** (`#EB4928`, `hsl(10 83% 54%)`): The single brand instrument. Owns hero and
  conversion surfaces as a full-bleed drench, carries primary buttons, links, active states
  and accents. Below 4.5:1 on white at small sizes — reserve it for large text (≥24px),
  buttons, icons and accents; never small body copy on a light ground.

### Neutral
- **Ink** (`#020817`, `hsl(222 84% 4.9%)`): Near-black navy. Primary body and heading color on
  light grounds; also a drenched dark band color for gravitas sections. 17.9:1 on the light
  surface. Text on vermillion bands is Ink, not white (5.25:1 — passes AA for body).
- **Surface** (`#F2F2F2`): The light page ground. Calm, neutral, lets vermillion and ink carry.
- **Card** (`#FFFFFF`): Raised/inset surface for content blocks and the hero content box.
- **Secondary** (`#E0E6EB`) / **Muted** (`#F1F5F9`): Quiet fills for secondary panels and tints.
- **Muted-foreground** (`#64748B`): Supporting/meta text — **only at 4.25:1, so large or
  secondary text only**; for body copy on light grounds use Ink at 70–80% instead.
- **Border** (`#E2E8F0`): Hairline dividers, input strokes, full-width rules.

### Named Rules
**The One Vermillion Rule.** There is exactly one accent hue. It is either committed
(a full-bleed band, 30–60% of a surface) or sharp (an accent ≤10%) — never a timid sprinkle.
Energy in the brand comes from vermillion's deployment, not from adding more colors.

**The Ink-on-Vermillion Rule.** Text on a vermillion ground is Ink (`#020817`), not white.
It is the higher-contrast, more distinctive, more institutional pairing. White is permitted
only on near-black ink bands.

## 3. Typography

**Display Font:** Outfit (with `sans-serif` fallback)
**Body Font:** Outfit (single family, multiple weights)

**Character:** One geometric sans carried across the whole system. The contrast axis is
*scale and weight*, not family pairing — light, large display headings against small, bold,
wide-tracked labels. Confident and modern without shouting.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 7vw, 5.5rem)`, lh 1.05, tracking -0.02em): Page heroes only.
- **Headline** (400, `clamp(1.75rem, 4vw, 2.5rem)`, lh 1.15): Section and band titles.
- **Title** (400, ~1.5rem, lh 1.2): Card and row titles, sub-section headings.
- **Body** (300, 1rem, lh 1.6, 65–75ch max): Long-form copy; light weight, generous leading.
- **Label** (700, 0.75rem, tracking 0.15em, UPPERCASE): Kickers, CTAs, meta. Used sparingly.

### Named Rules
**The Light-Heading Rule.** Headings are weight 400, never bold. Scale and space create
hierarchy; bold weight would read as loud and undercut the quiet-power voice.

**The Single-Family Rule.** Do not introduce a second font family. Contrast comes from weight
(300 body ↔ 700 label) and dramatic scale jumps within Outfit.

## 4. Elevation

Predominantly flat. Depth is conveyed through full-bleed color bands, full-width hairlines and
generous space rather than ambient shadow. Shadow appears as a *response to state or
importance* — the hero content box and the final CTA lift; resting cards and rows do not.

### Shadow Vocabulary
- **Inset card** (`box-shadow: 0 1px 3px rgba(2,8,23,0.06)`): Resting subtle lift on white cards.
- **Hero lift** (`box-shadow: 0 25px 50px -12px rgba(2,8,23,0.25)` — Tailwind `shadow-2xl`):
  The hero content box and final CTA only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Elevation is reserved for the one or
two moments that must command the eye (hero box, conversion CTA). Borders and color bands do
the separating everywhere else.

## 5. Components

### Buttons
- **Shape:** Square (0 radius). Always.
- **Primary:** Vermillion ground (`#EB4928`), near-white text, `h-14`, `px-8`, weight 500–700.
- **Hover / Focus:** `primary/90` darken; visible focus ring in the band's contrast color.
- **Outline / Secondary:** White ground, vermillion text and border; same square shape and size.
- **On-vermillion CTA:** Ink (`#020817`) button with light text, for buttons placed on a
  vermillion band (the services close).

### Cards / Containers
- **Corner Style:** Square (0 radius).
- **Background:** White (`#FFFFFF`) on the light ground; or the band's ground color in full-bleed sections.
- **Shadow Strategy:** Flat at rest (see Elevation); hover may add a subtle lift.
- **Border:** 1px hairline (`#E2E8F0`) or a top accent rule. **Never a left/right colored side-stripe.**
- **Internal Padding:** `1.5rem`–`2rem` (`p-6`/`p-8`).

### Navigation
- **Style:** Sticky top header; data-driven services + sectors dropdowns; light ground, ink text.
- **States:** Vermillion on hover/active; external links open in a new tab with a clear marker.

### Signature Component — Full-Bleed Band
The system's defining pattern (homepage, services). A `<section>` runs edge-to-edge in one
committed ground color — Ink (navy), Vermillion, or Surface (light) — with content held to the
container. Items inside are **full-width ledger rows divided by 1px hairlines**, not boxed
cards. Bands alternate (navy → vermillion → navy → light → vermillion) so color owns the page
rhythm. Separation is color and hairline, never decorative chrome.

## 6. Do's and Don'ts

### Do:
- **Do** keep every corner square (0 radius) — it is the brand's posture.
- **Do** set headings in Outfit weight 400 and create hierarchy with scale and space.
- **Do** commit vermillion — full-bleed bands or sharp accents, deployed with intent.
- **Do** put Ink (`#020817`) text on vermillion grounds (5.25:1), and use Ink at 70–80% for body on light grounds (`muted-foreground` is only 4.25:1 — fails AA body).
- **Do** separate content with full-bleed color and 1px full-width hairlines.
- **Do** ship real, specific imagery (real African markets, cities, work) — not generic "Africa rising" maps or stock skylines.

### Don't:
- **Don't** use `border-left`/`border-right` greater than 1px as a colored side-stripe on cards, rows or callouts.
- **Don't** use gradient text, glassmorphism, or the big-number hero-metric template.
- **Don't** look like interchangeable Big-4 consulting (stock skylines, corporate blue, glassy gradients, "synergy" copy).
- **Don't** drift into flashy startup/SaaS (gradient meshes, big rounded cards, emoji), NGO/aid framing, or bureaucratic portal stiffness.
- **Don't** introduce a second font family or bold display headings.
- **Don't** put small vermillion or `muted-foreground` body text on a light ground; it fails contrast.
- **Don't** sprinkle vermillion timidly — commit it or use a sharp accent, nothing in between.
