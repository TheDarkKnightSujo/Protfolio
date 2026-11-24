---
name: Atmospheric Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#42474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#72777f'
  outline-variant: '#c2c7cf'
  surface-tint: '#386287'
  primary: '#355f84'
  on-primary: '#ffffff'
  primary-container: '#4f789e'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a1cbf5'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#475f71'
  on-tertiary: '#ffffff'
  tertiary-container: '#60778b'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#a1cbf5'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#1c4a6d'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#cde6fc'
  tertiary-fixed-dim: '#b1c9df'
  on-tertiary-fixed: '#031e2e'
  on-tertiary-fixed-variant: '#32495b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: -0.01em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies an architectural, serene, and disciplined aesthetic tailored for a high-impact personal engineering portfolio. The brand personality balances technical mastery with calm confidence: intellectual, clean, rigorous, and unobtrusive. It speaks directly to engineering leaders, hiring directors, and technical collaborators who value craftsmanship, clarity of thought, and architectural precision.

The design movement synthesizes **Minimalism** with subtle **Tonal Skeuomorphism / Hairline Precision**:
- Vast, luminous negative space allowing engineering artifacts, system diagrams, and case studies to breathe without visual noise.
- Restrained, muted atmospheric color accents derived from low-saturation mountain mist and high-altitude sky tones.
- Monospaced typography accents paired with modern grotesque sans-serif type to communicate structural engineering authenticity.
- Crisp, whisper-thin 1px borders and low-elevation ambient surface tiering that replace heavy dropshadows or playful gradients.

## Colors

The palette draws its soul from the overcast sky and mist-veiled ridges of the reference image, anchored in cool porcelain tones and high-contrast deep slate inks.

### Key Tokens & Usage
- **Primary Accent (`#6089b0` / Mist Horizon):** A calibrated, desaturated sky slate used deliberately for focused interactive highlights, active tab indicators, commit badges, and key callouts. It commands attention through tonal harmony rather than neon saturation.
- **Secondary / Ink Body (`#334155` / Deep Slate):** Used for standard body typography, structural icon fills, and subheadings, offering an ergonomic reading contrast against bright backgrounds.
- **Tertiary Accent (`#8ba3b8` / Atmospheric Fog):** Used for disabled toggles, tertiary tags, subtle hover highlights, and secondary metadata.
- **Neutral Foreground (`#64748b` / Cool Muted Slate):** Used for secondary captions, timestamps, line numbers, and architectural grid accents.

### Surface Tiers & Hairlines
- **Canvas Base:** `#f8fafc` (Cool luminous porcelain)
- **Secondary Canvas / Well:** `#f1f5f9` (Subtle recessed section wash)
- **Elevated Card Surface:** `#ffffff` (Pure crisp white)
- **Deep Headings / Titles:** `#0f172a` (Near-black slate for maximum typographic legibility)
- **Borders & Dividers:** `#e2e8f0` (Standard hairline), `#cbd5e1` (Hover or active boundary)

## Typography

The typographic hierarchy communicates editorial order and technical rigor. 

- **Primary Headings (Hanken Grotesk):** Provides sharp, contemporary geometric terminals and compact proportions that look tailored and authoritative at larger scales.
- **Reading Body (Inter):** Highly legible, neutral workhorse type with neutral counters suited for extended technical case studies, system breakdowns, and design rationales.
- **Monospace Elements (JetBrains Mono):** Injected for timestamps, Git commits, metrics (`v2.4.1`, `latency < 12ms`), category tags, and inline technical architecture snippets.

All display headings utilize slight negative letter-tracking (`-0.02em` to `-0.03em`) to preserve visual density in light mode.

## Layout & Spacing

The portfolio employs a structured **12-column fluid grid** centered within a maximum container width of `1280px` (`80rem`) on desktop screens.

### Form Factors & Adaptation
- **Mobile (< 768px):** 4-column layout with `margin: 1.25rem` and `gutter: 1rem`. Project cards and metric counters stack vertically.
- **Tablet (768px - 1024px):** 8-column layout with `margin-tablet: 2.5rem` and `gutter: 1.5rem`. Metrics align in pairs; case-study sidebars reflow below the summary header.
- **Desktop (1024px+):** 12-column layout with `margin-desktop: 4rem` and `gutter-desktop: 2rem`. Allows asymmetric balance (e.g., 4-column sticky metadata index alongside an 8-column deep dive architecture breakdown).

Vertical rhythm is strictly orchestrated around multiples of `0.5rem` (8px). Structural section dividers require generous room (`space-2xl`) to reinforce the uncluttered, open feeling of high-altitude landscape vistas.

## Elevation & Depth

This system avoids heavy, blurred drop shadows. Instead, it creates dimensional hierarchy through **tonal layering** and **crisp 1px hairline borders**.

1. **Ground Layer (`#f8fafc`):** The primary view base. Soft, cool, and glare-free.
2. **Surface Container (`#ffffff`):** Dedicated cards, interactive code playgrounds, and modal surfaces. Defined by a crisp hairline border (`1px solid #e2e8f0`) rather than a heavy shadow.
3. **Ambient Floats (Tooltips, Popovers, Active Hover Cards):**
   - Hairline border: `1px solid #cbd5e1`
   - Shadow: `0 4px 16px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)` (Whisper-soft cool slate shadow tint).
4. **Recessed Wells (`#f1f5f9`):** Terminal windows, inline code blocks, and system metric blocks that sit slightly carved into the page canvas with a subtle inset feel.

## Shapes

The design system maintains a **Soft (`1`)** shape language, reflecting crisp architectural drafting and engineering precision rather than playful roundness.

- **Base Elements (Buttons, Inputs, Badges, Tabs):** `0.25rem` (4px). Provides subtle softening while preserving a structured, rectangular boundary.
- **Container Surfaces (Cards, Modals, Terminal Panels):** `0.5rem` (8px / `rounded-lg`). Prevents acute corner sharpness on larger visual bounding boxes.
- **Avatar & Status Pips:** Full circular radius (`50%` / `pill`) only for headshots and real-time live availability badges.

## Components

### Buttons
- **Primary Action:** Solid slate `#0f172a` fill with pure white `#ffffff` text, `0.25rem` border-radius. On hover, background shifts to `#1e293b` with a smooth 150ms transition.
- **Accent Action:** Muted sky blue `#6089b0` fill with pure white text. Hover transitions to `#4e759a`.
- **Secondary / Outline:** Background `#ffffff`, border `1px solid #e2e8f0`, text `#334155`. On hover, border tint tightens to `#cbd5e1` with a slight `#f8fafc` background wash.
- **Text / Ghost Action:** Zero border, padding `0.5rem 0.75rem`, text `#334155` with hover background of `#f1f5f9`.

### Chips & Tech Badges
- Compact height (`24px`), font family `JetBrains Mono` (`label-caps`), letter-spaced.
- Background `#f1f5f9`, hairline border `1px solid #e2e8f0`, text `#475569`.
- **Interactive Variant:** Changes to background `#ffffff` and border `#6089b0` when toggled.

### Input Fields & Search Bars
- Background `#ffffff`, border `1px solid #e2e8f0`, text `#0f172a`, placeholder text `#94a3b8`.
- Focus state: Border transitions to `#6089b0` with a 2px outer ambient glow ring of `rgba(96, 137, 176, 0.15)`. No harsh browser outlines.

### Project & Engineering Cards
- Constructed with a pure white background `#ffffff` and `1px solid #e2e8f0`.
- Padding: `1.5rem` (`space-lg`).
- Header includes category tag (`label-caps`) alongside an indicator of live deployment or repository status.
- Hover state: Subtle elevation translation (`translateY(-2px)`) and border shift to `#cbd5e1`.

### Code Blocks & Architecture Panels
- Background `#f1f5f9` with an upper header bar featuring mock window actions or breadcrumbs, framed in `1px solid #e2e8f0`.
- Code lines rendered in `JetBrains Mono` at `0.8125rem` with muted syntax highlighting using cool slate, sage, and misty sky blue tones.