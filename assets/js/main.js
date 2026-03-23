/* ─── Cri.ar.te — Global JS ─────────────────────────────── */

import { animate, animateStagger } from './animate.js';
import { animations }              from './animation-map.js';

/* ─── Nav: mobile menu toggle ──────────────────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('is-open');
	});

	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('is-open');
		});
	});
}

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
	if (stagger) {
		animateStagger(selector, from, stagger, trigger);
	} else {
		animate(selector, from, trigger);
	}
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
