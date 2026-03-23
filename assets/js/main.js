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
const heroSplit = new SplitText('.hero-text', { type: 'words' });

gsap.from(heroSplit.words, {
	opacity:  0,
	y:        20,
	duration: 0.5,
	ease:     'power2.out',
	stagger:  0.08,
});

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

	gsap.from(oficina.querySelector('.oficina-img'), {
		opacity: 0, scale: 0.95, duration: 0.6, ease: 'power2.out',
		delay: 0.2, scrollTrigger: trigger,
	});

	gsap.from(oficina.querySelector('.oficina-title'), {
		opacity: 0, y: 15, duration: 0.5, ease: 'power1.out',
		delay: 0.35, scrollTrigger: trigger,
	});

	gsap.from(oficina.querySelector('.criarte-icon'), {
		opacity: 0, scale: 0.7, duration: 0.4, ease: 'back.out(2)',
		delay: 0.5, scrollTrigger: trigger,
	});
});

/* ─── Floating ambient: all decorative icons ────────────── */
gsap.utils.toArray('.criarte-icon').forEach((el, i) => {
	gsap.to(el, {
		y:        i % 2 === 0 ? -14 : 14,
		duration: 2.5 + i * 0.3,
		ease:     'sine.inOut',
		repeat:   -1,
		yoyo:     true,
	});
});
