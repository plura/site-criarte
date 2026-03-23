/* ─── Nav ───────────────────────────────────────────────── */

function scrollToHash(hash) {
	const target = document.querySelector(hash);
	if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
}

function initActiveNavLink(navLinks) {
	const sections = document.querySelectorAll('section[id], footer[id]');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				navLinks.querySelectorAll('.nav-link').forEach(li => li.classList.remove('active'));
				const activeLink = navLinks.querySelector(`a[href="#${entry.target.id}"]`);
				if (activeLink) activeLink.closest('.nav-link').classList.add('active');
			}
		});
	}, { rootMargin: '-40% 0px -55% 0px' });

	sections.forEach(s => observer.observe(s));
}

export function initNav(hamburger, navLinks) {
	hamburger.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('is-open');
		hamburger.setAttribute('aria-expanded', isOpen);
	});

	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('is-open');
			hamburger.setAttribute('aria-expanded', 'false');
		});
	});

	/* ─── Scroll to hash on load ────────────────────────── */
	const hash = window.location.hash;
	if (hash) scrollToHash(hash);

	/* ─── Active link on scroll ─────────────────────────── */
	initActiveNavLink(navLinks);
}
