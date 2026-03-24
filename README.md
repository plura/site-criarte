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
    main.js          # Entry point: initialises nav and runs animation map
    nav.js           # Nav toggle, active link tracking (IntersectionObserver + scroll)
    animate.js       # GSAP helpers: animate(), animateStagger()
    animation-map.js # Declarative animation definitions (selector, from, stagger, trigger)
  images/
    photos/          # Photography (hero, oficinas, team, eventos) — WebP
    icons/           # SVG icons (brand, UI, social, decorative criarte-icons)
```

## CSS Architecture

All design tokens are defined as CSS custom properties in `base.css` under the `--criarte-*` namespace, grouped by type:

- `--criarte-colors-*` — brand colours
- `--criarte-layout-*` — container width, padding, mobile width
- `--criarte-fonts-*` — families, sizes, weights, line heights
- `--criarte-section-pad-v` — vertical section padding
- `--criarte-team-member-*` — team photo/icon sizing
- `--criarte-oficina-*` — oficina icon sizing

## Responsive

Mobile-first. Breakpoints:

- `768px` — tablet
- `1024px` — laptop and above

## Dependencies (CDN)

- [GSAP](https://gsap.com/) + ScrollTrigger + SplitText — animations
- [Google Fonts](https://fonts.google.com/) — Nunito, Nunito Sans
