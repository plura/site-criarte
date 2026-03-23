/* ─── Nav ───────────────────────────────────────────────── */

function scrollToHash(hash) {
	const target = document.querySelector(hash);
	if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
}

export function initNav(hamburger, navLinks) {
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('is-open');
	});

	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('is-open');
		});
	});

	/* ─── Scroll to hash on load ────────────────────────── */
	const hash = window.location.hash;
	if (hash) scrollToHash(hash);
}
