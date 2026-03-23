# Cri.ar.te — Site

**[cri-ar-te.com](https://cri-ar-te.com)**

Static website for **Cri.ar.te**, a children's creative expression workshop based in Portugal.

## Structure

```
index.html
assets/
  css/
    styles.css       # Entry point (@imports only)
    base.css         # Reset, design tokens (CSS vars), base element styles
    nav.css          # Fixed navigation bar
    components.css   # Reusable components: container, section-title, team, social links
    sections.css     # Section-specific styles: hero, o-que-e, quem-somos, oficinas, eventos, contactos
  js/
    main.js          # Mobile nav toggle, GSAP animation placeholders
  images/            # Photos, SVG icons and decorative elements
```

## CSS Architecture

All design tokens are defined as CSS custom properties in `base.css` under the `--criarte-*` namespace, grouped by type:

- `--criarte-colors-*` — brand colours
- `--criarte-layout-*` — container width, padding, mobile width
- `--criarte-fonts-*` — families, sizes, weights, line heights
- `--criarte-team-member-*` — team photo/icon sizing
- `--criarte-oficina-*` — oficina icon sizing

## Responsive

Mobile-first. Single breakpoint at `768px` (`min-width: 768px`) across all CSS files.

## Dependencies (CDN)

- [Lucide](https://lucide.dev/) — icons
- [GSAP](https://gsap.com/) + ScrollTrigger — animations
- [Google Fonts](https://fonts.google.com/) — Nunito, Nunito Sans
