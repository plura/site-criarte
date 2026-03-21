/* ─── Cri.ar.te — Global JS ─────────────────────────────── */

/* ─── Nav: mobile menu toggle ──────────────────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('is-open');
	});

	// Close menu when a link is clicked
	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('is-open');
		});
	});
}

/* ─── GSAP animations (placeholder) ────────────────────── */
// GSAP is loaded via CDN — use gsap.* and ScrollTrigger.* here.
// Example:
//
// gsap.registerPlugin(ScrollTrigger);
//
// gsap.from('.hero-text', {
//   opacity: 0,
//   y: 40,
//   duration: 1,
//   ease: 'power3.out',
// });
//
// gsap.utils.toArray('.section-title').forEach(el => {
//   gsap.from(el, {
//     scrollTrigger: { trigger: el, start: 'top 85%' },
//     opacity: 0,
//     y: 30,
//     duration: 0.8,
//     ease: 'power2.out',
//   });
// });
