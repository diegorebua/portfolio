# Responsive layout system

`layout.css` owns the shared layout tokens and primitives. `index.css` contains
component appearance and animations. Use the existing semantic component classes
alongside these utilities; no additional DOM wrappers are required.

- `.container`: one shared content edge with safe-area gutters and an `80rem` cap.
- `.page` / `.section`: shared vertical spacing; normal content height.
- `.page-heading`: shared heading width and spacing before page content.
- `.layout-grid`: one column by default, configurable with `--grid-gap`.
- Grid modifiers: `--cards`, `--pair`, `--about`, `--skills`, `--skill-group`,
  `--experience`. They retain the existing editorial proportions.
- `.layout-stack`: vertical groups, configurable with `--stack-gap`.
- `.layout-cluster`: wrapping flex rows, configurable with `--cluster-gap`.

Breakpoints are mobile first: base for mobile, `40rem` for tablet, `64rem` for
desktop. CSS variables cannot be used directly in native media queries, so use
these same two values for component-specific adaptations.

Typography, content/reading widths, spacing and image aspect ratios are tokens.
Change these in `layout.css` instead of adding per-page overrides. Images use
`object-fit` within their aspect-ratio frames to preserve source proportions.
Only `.home-hero` has a viewport-based minimum height (minus the header); it can
grow when content or enlarged text requires more room. All other sections follow
their content. Scroll reveal and menu animation rules remain in `index.css`.
