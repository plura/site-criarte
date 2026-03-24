/* ─── Nav ───────────────────────────────────────────────── */

function scrollToHash(hash) {
	const target = document.querySelector(hash);
	if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
}

function setActiveNavLink(navLinks, link) {
	if (link?.closest('.nav-link').classList.contains('active')) return;
	navLinks.querySelectorAll('.nav-link').forEach(li => li.classList.remove('active'));
	if (link) link.closest('.nav-link').classList.add('active');
}

function initActiveNavLink(navLinks, bottomThreshold = 40) {
	const sections = document.querySelectorAll('section[id], footer[id]');
	const lastLink = navLinks.querySelector('.nav-link:last-child a');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const link = navLinks.querySelector(`a[href="#${entry.target.id}"]`);
				setActiveNavLink(navLinks, link);
			}
		});
	}, { rootMargin: '-40% 0px -55% 0px' });

	sections.forEach(s => observer.observe(s));

	/* ─── Activate last link when near bottom ────────────── */
	window.addEventListener('scroll', () => {
		const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - bottomThreshold;
		if (atBottom) setActiveNavLink(navLinks, lastLink);
	});
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
