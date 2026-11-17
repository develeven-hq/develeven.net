# DevEleven Agent Guidelines & Design System

This file serves as the persistent source of truth for all AI agents working on **DevEleven** (`develeven.net`). Any new page, component, or refactoring in this project must adhere strictly to the typography system, layout standards, iconography, and design preferences outlined below.

---

## 1. Skills & Methodologies Used

- **Skill**: `modern-web-guidance` (Modern Web Development Best Practices).
- **Core Principles**:
  - Prefer relative units (`rem`) over arbitrary `px` for font sizing.
  - Use unitless, proportional line-heights (`leading-[0.98]`, `leading-[1.08]`, `leading-tight`, `leading-relaxed`).
  - Standard Tailwind modular type scale (`text-xs` up to `text-8xl`), strictly eliminating arbitrary pixel font classes (`text-[...px]`).
  - Strong visual hierarchy through deliberate weight separation (Headings in `font-bold`, interactive in `font-semibold`, metadata in `font-medium`, reading copy in `font-normal`).
  - High accessible contrast on the single light ground (`#ffffff`): `zinc-950` primary text, `zinc-600` muted text, `zinc-700` leads.

---

## 2. Typography Standard

### Font Configuration
- **Universal Typeface**: **Mona Sans** (`next/font/local` via `src/app/fonts/MonaSans-Variable.woff2`).
- **No Monospace**: Avoid monospace fonts (`IBM_Plex_Mono`, `font-mono`) across the entire website. All labels, tags, code snippets, numbers, and badges must use `font-sans` (Mona Sans).
- **No Arbitrary Sizes**: Never use arbitrary pixel classes (e.g., `text-[26px]`, `text-[11px]`). Use only standard Tailwind sizing classes.
- **Minimum Font Size Limit**: No text may ever be smaller than `text-xs` (12px / 0.75rem).
- **No All-Caps (Avoid Whole Uppercase)**: Never style whole phrases, section labels, deliverables, or badges in shouting all-caps (e.g., do NOT use `01 / WHAT WE BUILD` or `PROJECT BRIEF + ROADMAP`). Use clean sentence or title case (e.g., `01 / What we build`, `Marketing sites / E-commerce`, `Built with intent`). Standard industry acronyms are permitted (`SaaS`, `API`, `CMS`, `SEO`, `USD`, `MVP`, `FAQ`, `DevOps`).
- **No Em-Dashes**: Never use em-dashes (`—`) anywhere across the pages, copy, headings, metadata, or titles. Use standard hyphens (`-`), en-dashes (`–`) for numeric ranges (e.g., `$600–1,000`), or natural punctuation (commas, colons, parentheses) instead.

### Typographic Scale & Hierarchy Table

| Tier | UI Role | Tailwind Size | Tailwind Weight | Tracking & Leading | Color Tokens |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L1: Display / H1** | Page & Hero main titles | `text-5xl sm:text-7xl lg:text-8xl` | `font-normal` (400) | `tracking-tight leading-tight` / `leading-[1.02]` | `text-dv-text` |
| **L2: Section Headings / H2** | Major section headers (`h2`) - centered, clean, non-dramatic | `text-3xl sm:text-4xl lg:text-5xl` | `font-normal` (400) | `text-center tracking-tight leading-tight` | `text-dv-text` |
| **L3: Card Label** | Quiet label inside a feature card (Services, Studio, Approach, Engagement) | `text-base` | `font-normal` (400) | `tracking-normal` | `text-dv-muted` |
| **L3b: Card Statement** | The prominent line directly below a card label | `text-base sm:text-lg` | `font-normal` (400) | `leading-snug` | `text-dv-text` |
| **L3c: Slogan Card Heading** | Oversized heading inside slogan / CTA cards | `text-2xl sm:text-3xl lg:text-4xl` | `font-normal` (400) | `tracking-tight leading-snug` | `text-dv-text` |
| **L3d: Named Card Title** | Work project names, pricing tier names, process stage names | `text-xl sm:text-2xl` | `font-medium` (500) | `tracking-normal leading-snug` | `text-dv-text` |
| **L4: Prices & Large Stats** | Pricing tiers (`$600–1,000`), stat metrics | `text-3xl sm:text-4xl lg:text-5xl` | `font-bold` (700) | `tracking-tight` | `text-dv-text` |
| **L5: Section Kickers / Labels** | Section overlines | `text-xs sm:text-sm` | `font-medium` (500) | `tracking-wide` | `text-dv-muted` (accent reserved) |
| **L6: Lead Paragraphs** | Hero narrative & section intro leads | `text-base sm:text-lg lg:text-xl` | `font-normal` (400) | `leading-relaxed` | `text-dv-lead` |
| **L7: Interactive & Navigation** | Nav links, buttons, CTA text, accordion triggers | `text-sm sm:text-base` / `text-base sm:text-lg` | `font-medium` (500) | `tracking-normal` / muted → `text-dv-text` on hover | `text-dv-text` (muted at rest) |
| **L8: Badges, Pills & Numbers** | Tech pills, step numbers (`01`), service codes | `text-xs sm:text-sm` or `text-base sm:text-lg` | `font-medium` (500) | `tracking-normal` / `tracking-wide` | `text-dv-text` / `text-dv-muted`; deliverable badges invert to `bg-dv-text` / `text-dv-bg` |
| **L9: Checklist Items** | Features list in pricing & service cards | `text-sm sm:text-base` | `font-normal sm:font-medium` (400/500) | `leading-relaxed tracking-normal` | `text-dv-text` |
| **L10: Supporting Body Copy** | Secondary paragraphs (FAQ answers, project notes, metadata) | `text-sm sm:text-base` | `font-normal` (400) | `leading-relaxed tracking-normal` | `text-dv-muted` |
| **L11: Micro-copy & Notes** | Subtitles, footnotes, legal disclaimer | `text-xs sm:text-sm` | `font-medium` (500) | `tracking-wide` | `text-dv-muted` / `text-dv-text` |

> **Card title inversion is intentional.** Feature cards put a quiet `text-base` `text-dv-muted` label above a louder `text-base sm:text-lg` `text-dv-text` statement. The label names the topic; the statement carries the message. Never "correct" this by promoting the label to a bigger, bolder title. Named-entity cards and stages (Work projects, Pricing tiers, Process stages) are the exception: there the name is the content, so it keeps a `text-xl sm:text-2xl font-medium` title.

> **Crucial Rule**: Use standard Tailwind classes only with no arbitrary pixel font sizes. Mona Sans requires `font-normal` (400) on display titles (H1), `font-normal` (400) on centered section headings (H2), `font-medium` (500) only on named card and stage titles (Work projects, Pricing tiers, Process stages, matching GitHub Primer Brand `Heading--6` weight 480), never on feature-card labels, and clean `font-normal` (400) on body descriptions. Avoid whole-word uppercase shout-styling on section headers. Section headings must be centered, direct, and sound like a natural sentence or descriptive clause that clearly clarifies the section's purpose (e.g., *'Services we provide to build and scale your product'*, *'How we scope, estimate, and price your project'*) without dramatic multi-part structures (no eyebrows/kickers, subtitles, or verbose marketing slop).

### Card anatomy
- **Feature card** (Services, Studio, Approach, Engagement): `size-10 rounded-lg bg-dv-surface` icon chip, then a muted `text-base` label and a `text-base sm:text-lg` primary statement. Dividers, metadata and CTAs stay at the bottom of the card.
- **Slogan card** (Services and Studio CTA cards, FAQ inquiry card): centered `text-2xl sm:text-3xl lg:text-4xl` heading with one primary button.
- **Media card** (Services AI card): full-bleed image with a gradient scrim and grain, a small light label (`text-dv-inverse-muted`) and a statement (`text-dv-bg`) at the bottom, plus one contained product window above the copy laid out with `justify-end`; the window sits inside the card padding and is never oversized, offset or clipped.
- **Photo card** (Studio workspace card): the image alone. No scrim, no overlay text, no padding. It exists to show real photography, so the alt text carries the meaning and the asset must be large enough to render sharp at 2x. Add a scrim or caption only if the card is given text again.
- **Project card** (Work): a full-width horizontal row (`bg-dv-card rounded-2xl`) with media on one side and a vertically centered content column on the other, alternating the media side per row. Content: `text-xl sm:text-2xl font-medium` project name, one-line subtitle, full description, a quiet monochrome icon row, and one standard `Button` ("View project"). No standalone arrow icons, no divider, no metadata strip, no slash-separated tech text, and never a display-size slogan. Keep the copy off the screenshot; overlay text does not survive light UI imagery.
- **Named card** (Pricing tiers): `text-xl sm:text-2xl font-medium` title, with the price and plan data below it.
- **Process timeline** (Process): a single left rail with numbered 32px nodes and a 2px spine. Each stage is one full-width row: the stage title on the left with the deliverable chip right-aligned on the same baseline, and the description below capped at `max-w-2xl`. Rows carry `py-6 lg:py-8` and the spine segments bridge into the next node. No alternating columns, no cards, no step icons, no arrows. The section stays white-and-black: near-black titles, `text-dv-lead` descriptions, inverted `bg-dv-text` / `text-dv-bg` deliverable chips, and no mid-gray filled pills.

---

## 3. Layout & Viewport Width Standards

### Full-Bleed Two-Tier Layout Pattern
Every section must follow this two-tier container structure:
```tsx
{/* 1. Outer Viewport Container: stretches 100vw, full-bleed background */}
<section className="w-full bg-dv-bg">
  {/* 2. Inner Content Wrapper: standard Tailwind max-width with generous padding */}
  <div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24">
    {/* Page content */}
  </div>
</section>
```

- **No Hard Caps on Outer Containers**: Never apply `max-w-[...]` to the outer `<section>` or background wrapper. The ground (`#ffffff`) and any full-bleed media must extend edge-to-edge without cutoff on ultrawide monitors.
- **No Top/Bottom Section Borders**: Sections must never use `border-t`, `border-b`, `border-y`, or outline rules. Separate adjacent sections through whitespace alone; never alternate section backgrounds. Borders remain allowed for internal dividers inside cards, lists, and content blocks, and for the fixed header and footer chrome.
- **Inner Content Container**: Use standard Tailwind `max-w-8xl` (1440px / 90rem, configured via `--container-8xl: 90rem` in `@theme`), providing the ideal modern desktop middleground between 1280px and 1536px, centered with `mx-auto` and `px-6 sm:px-8 lg:px-16`.
- **Fluid & Responsive Layouts**: Use fluid grids (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`) and flex layouts. Never use hardcoded pixel widths (`w-[760px]`, `w-[380px]`) that break mobile viewports or create horizontal scrollbars.

---

## 4. Iconography Standards

- **Centralized Wrapper**: All icons are imported from and encapsulated in `src/components/ui/Icons.tsx` using `lucide-react`.
- **Aesthetic Parameters**:
  - `strokeWidth={1.5}` as default for all feature and section icons.
  - Icon color: Neutral high contrast (`text-dv-text` / `currentColor`), strictly avoiding accent color overuse on icons.
  - Hover states: Clean `text-dv-text` / `text-dv-muted` transitions with no accent hover colors on text or icons.
- **Every Clickable / Button Gets An Appropriate Icon**:
  - Interactive arrows (`ArrowIcon.tsx` / `ArrowUpRight`) for buttons, links, and cards.
  - Interactive hover translations: `transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`.
  - Icon mapping match:
    - Web Dev: `Layout`
    - Maintenance: `Wrench`
    - Custom Software: `CodeXml` / `Braces`
    - Game Dev: `Gamepad2`
    - Infrastructure: `Network`
    - Quality Inspection: `ScanLine`
    - Resilience: `ShieldCheck`
    - Foundation: `GitBranch`
    - Project Engagement: `Rocket`
    - Partnership Engagement: `Handshake`
    - Engineer-led Studio: `Terminal`
    - Collaborative Studio: `Users`
    - Long-term minded Studio: `TrendingUp`
    - Checklists: `Check` with `strokeWidth={2.0}`

---

## 5. Color, Surface & Interaction Standards

### One ground, one contrast ladder
DevEleven ships a single light theme and **one ground**. Every page and every section uses `bg-dv-bg` (`#ffffff`); sections never alternate backgrounds and never use full-bleed tinted bands. Depth is expressed only through a four-step neutral ladder, and the interface always moves **darker** as elements nest:

| Step | Role | Token | Value | Applied to |
| :--- | :--- | :--- | :--- | :--- |
| **Ground** | Page + every section | `--color-dv-bg` | `#ffffff` | `<body>` and all `<section>` backgrounds |
| **Card** | All content cards | `--color-dv-card` | `zinc-100` | Services, Work, Approach, Studio, Engagement, FAQ, Pricing cards |
| **Control** | Neutral pills sitting on the ground: secondary buttons, language trigger, nav toggle | `--color-dv-control` | `#ececf0` | Interactive controls outside cards |
| **Control hover** | Hover / pressed state of a control | `--color-dv-control-hover` | `#e1e1e6` | Control hover states |
| **Inset** | Chips inside a card: icon tiles, accordion toggles, inner rows, tags | `--color-dv-surface` | `zinc-200` | Chips, toggles and inner surfaces inside cards |
| **Inset hover** | Hover / pressed state of an inset | `--color-dv-surface-hover` | `zinc-300` | Interactive inset states |

Internal dividers use `--color-dv-border` (`zinc-200`); strong dividers use `--color-dv-surface-border` (`zinc-300`).

The two midpoints exist because Tailwind's zinc scale has a large jump at 100/200 and 200/300: `zinc-100` disappears on white and `zinc-200` reads heavy, so `Control` and the input border are set between the steps. Controls only ever sit on the ground; if one is placed inside a card it must move to the inset step or it disappears into the card.

### Hard rules
- **Never white on white.** Nothing inside a card may use `bg-white` or `bg-dv-bg`; that is what the inset step exists for.
- **One direction only.** Nesting moves darker: ground → card → inset → inset hover. Hover states never move lighter and never use opacity (`hover:bg-dv-card/80` is forbidden).
- **Only interactive elements hover.** Static cards and content blocks have no hover background.
- **State changes animate.** Every interactive state change uses `transition-colors duration-200`. Never leave a hover, focus or pressed state instantaneous, and never use a duration other than 200ms for colour transitions.
- **Inputs are the only bordered elements.** A text field carries one subtle 1px border (`border border-dv-input-border`, `#dcdce1`) plus the control fill (`bg-dv-control`, `#ececf0`) so it reads as a field rather than an empty gap; on focus it lifts to `bg-dv-bg` and the border darkens to `border-dv-text`. Nothing else may use a full border: no buttons, pills, chips, cards, popovers or images. Header and footer chrome plus internal dividers stay on `border-t` / `border-b` as before.
- **No card borders, outlines, or shadows.** Cards are defined by the single contrast step between ground and card. Shadows are reserved for floating overlays (dropdowns, tooltips).
- **No section bands.** Sections are separated by whitespace (`py-20 lg:py-24`), never by alternating backgrounds.
- **One inverted moment per page.** The closing CTA panel is the only large dark surface. Build it with `bg-dv-text text-dv-bg` and light buttons (`bg-dv-bg text-dv-text hover:bg-dv-surface`); never use `bg-black` or add a second dark surface.
- **The accent is not a surface.** `dv-accent` is reserved for the brand mark and stays unused on sections, cards, and icons.
- **Product windows obey the ladder.** The simulated product window in the Services media card is a real element, not a picture: `bg-dv-bg` window, `bg-dv-surface` insets, no borders, no shadow, and never sized past its card. There are no illustrated-UI exemptions. Any mock that needs its own chrome is out of spec.

### Rhythm from structure, not color
Do not add a background band to fix a flat page. Create rhythm with composition instead:
- Vary section density: full-width media, asymmetric 12-column layouts, single-column statements, then grids.
- Let the L1 → L2 → L3 type scale do the separating work.
- Keep exactly one inverted CTA moment per page.

### Design Tokens
Defined in `src/app/globals.css`. Token names are semantic, never color-based (`accent`, not `lime`); changing a hue happens only in `globals.css`, never in components:
- **Ground**: `--color-dv-bg: #ffffff` (`bg-dv-bg`)
- **Card**: `--color-dv-card: var(--color-zinc-100)` (`bg-dv-card`)
- **Control**: `--color-dv-control: #ececf0` (`bg-dv-control`), hover `--color-dv-control-hover: #e1e1e6` (`hover:bg-dv-control-hover`)
- **Inset**: `--color-dv-surface: var(--color-zinc-200)` (`bg-dv-surface`)
- **Inset Hover**: `--color-dv-surface-hover: var(--color-zinc-300)` (`hover:bg-dv-surface-hover`)
- **Input Border**: `--color-dv-input-border: #dcdce1` (`border-dv-input-border`); the only border allowed outside chrome and dividers
- **Dividers**: `--color-dv-border: var(--color-zinc-200)`; strong: `--color-dv-surface-border: var(--color-zinc-300)`
- **Primary Text**: `--color-dv-text: var(--color-zinc-950)` (`text-dv-text`)
- **Muted Text**: `--color-dv-muted: var(--color-zinc-600)` (`text-dv-muted`)
- **Lead Text**: `--color-dv-lead: var(--color-zinc-700)` (`text-dv-lead`)
- **Brand Accent (reserved)**: `--color-dv-accent: var(--color-sky-600)`, hover `sky-700`
- **Primary Buttons**: `--dv-btn-primary-bg` (`zinc-950`), text `#ffffff`, hover `zinc-800` (`bg-dv-btn-primary-bg`, `text-dv-btn-primary-text`, `hover:bg-dv-btn-primary-hover`)
- **Secondary Buttons**: solid control fill, borderless: `bg-dv-control hover:bg-dv-control-hover text-dv-text`. Inputs are the only bordered control.

### Corner Radius Standards
- **Buttons & Interactive CTAs**: Use `rounded-full` (pill style). All clickable buttons, action triggers, and primary/secondary CTA links across the site use `rounded-full`. Hero buttons have thick vertical padding with snug horizontal padding (`py-3.5 sm:py-4 px-6 sm:px-7 gap-2.5 sm:gap-3`), while navbar buttons use compact pill padding (`h-10 px-4.5` on desktop).
- **Cards & Media Boxes**: Use `rounded-2xl` (16px / 1rem). All cards across the site must follow this increased roundness standard for a modern, softer container silhouette while maintaining structural clarity. Avoid sharp corners (`rounded-none`, `rounded-sm`) or full pill shapes on content cards.
- **Badges, Tags & Tech Pills**: Use `rounded-md` (6px) or `rounded-lg` (8px).
- **Circular Indicators**: Status dots use `rounded-full`.

---

## 6. Navbar & Navigation UX

- **Standard Header Height & Positioning**: `fixed top-0 left-0 right-0 w-full z-50` with matching layout spacer `h-20 lg:h-24` (`80px` / `96px`) to maintain layout flow while ensuring reliable reveal anywhere on the page.
- **Scroll-Direction Reveal**:
  - Automatically hides when scrolling down past 80px (`-translate-y-full`).
  - Smoothly reveals when scrolling back up anywhere on the page using accumulated delta or when at the top of the page (`translate-y-0`).
  - Remains visible whenever the mobile menu drawer is open.
  - Backdrop blur: `bg-dv-bg/40 backdrop-blur-md` (borderless frosted glass).
- **Mobile Menu Drawer**:
  - Full-featured mobile drawer on `<lg` screens (`fixed inset-x-0 top-20 bottom-0`).
  - Backdrop blur: `bg-dv-bg/98 backdrop-blur-md border-t border-dv-border`.
  - Automatic body scroll lock (`overflow: hidden`) when open.
  - Automatic close on route navigation (`usePathname`), Escape key, or link click.
  - Touch targets minimum 44px with accessible padding.

---

## 7. Page Metadata & Unique Titles Standard

- **Unique Title Per Page**: Every page route must export an explicit and unique `<title>` in its `metadata`. No two pages may share the same title or rely on untitled defaults.
- **Title Structure**:
  - Home: `DevEleven - Independent Engineering Studio`
  - Interior pages: `<Page Name> - DevEleven` (e.g., `Pricing - DevEleven`).
  - Always use a standard hyphen with spaces (` - `), never an em-dash (`—`).
- **Layout Template**: In `src/app/layout.tsx`, define:
  ```ts
  export const metadata: Metadata = {
    title: {
      default: "DevEleven - Independent Engineering Studio",
      template: "%s - DevEleven",
    },
    ...
  };
  ```

---

## 8. Code Quality & Build Checks

Always verify these commands before concluding any task:
1. `npx tsc --noEmit` - must pass with 0 errors.
2. `grep -rn "font-mono" src/components/` - must return 0 results.
3. `grep -rn "text-\[[0-9]*px\]" src/` - must return 0 results.
4. `grep -rn "—" src/` - must return 0 results (strictly enforcing no em-dashes).
5. Verify every page route exports a unique title in its metadata.
6. Test HTTP 200 on all routes: `curl -I http://localhost:3000/` and `curl -I http://localhost:3000/pricing`.
7. `grep -rn "hover:bg-dv-card/\|bg-dv-surface/" src/` - must return 0 results (no opacity-based surface hovers).
8. `grep -rn "border border-" src/components/` - must return only the newsletter input (inputs are the only bordered elements).

