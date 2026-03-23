/* ─── Cri.ar.te — Global JS ─────────────────────────────── */

import { initNav }                 from './nav.js';
import { animate, animateStagger } from './animate.js';
import { animations }              from './animation-map.js';

/* ─── Nav ───────────────────────────────────────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) initNav(hamburger, navLinks);

/* ─── GSAP ──────────────────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger, SplitText);

/* ─── Hero: word-by-word reveal on load ─────────────────── */
const heroEl = document.querySelector('.hero-text');
if (heroEl) {
	const heroSplit = new SplitText(heroEl, { type: 'words' });
	gsap.from(heroSplit.words, {
		opacity:  0,
		y:        20,
		duration: 0.5,
		ease:     'power2.out',
		stagger:  0.08,
	});
}

/* ─── Scroll-triggered reveals (from animation map) ─────── */
animations.forEach(({ selector, from, stagger, trigger }) => {
	if (stagger !== undefined) {
		animateStagger(selector, from, stagger, trigger);
	} else {
		animate(selector, from, trigger);
	}
});

/* ─── Oficina children: triggered by parent ─────────────── */
gsap.utils.toArray('.oficina').forEach(oficina => {
	const trigger = { trigger: oficina, start: 'top 80%', once: true };
	const img   = oficina.querySelector('.oficina-img');
	const title = oficina.querySelector('.oficina-title');
	const icon  = oficina.querySelector('.criarte-icon');

	if (img)   gsap.from(img,   { opacity: 0, scale: 0.95, duration: 0.6, ease: 'power2.out', delay: 0.2,  scrollTrigger: trigger });
	if (title) gsap.from(title, { opacity: 0, y: 15,       duration: 0.5, ease: 'power1.out', delay: 0.35, scrollTrigger: trigger });
	if (icon)  gsap.from(icon,  { opacity: 0, scale: 0.7,  duration: 0.4, ease: 'back.out(2)', delay: 0.5, scrollTrigger: trigger });
});

/* ─── Floating ambient: all decorative icons ────────────── */
gsap.utils.toArray('.criarte-icon').forEach((el, i) => {
	gsap.to(el, {
		y:        i % 2 === 0 ? -14 : 14,
		rotation: i % 2 === 0 ? -4 : 4,
		duration: 2.5 + i * 0.3,
		ease:     'sine.inOut',
		repeat:   -1,
		yoyo:     true,
	});
});
