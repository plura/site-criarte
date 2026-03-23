/* ─── Animation map ─────────────────────────────────────── */
//
// Each entry: { selector, from, stagger?, trigger? }
// - selector : CSS selector
// - from     : gsap.from() vars
// - stagger  : optional delay between each matched element
// - trigger  : optional ScrollTrigger overrides
//

export const animations = [

	/* ─── Section titles ──────────────────────────────────── */
	{
		selector: '.section-title',
		from:     { opacity: 0, x: -30, duration: 0.6, ease: 'power2.out' },
		stagger:  0,
	},

	/* ─── O que é ─────────────────────────────────────────── */
	{
		selector: '.o-que-e-text p',
		from:     { opacity: 0, y: 20, duration: 0.5, ease: 'power1.out' },
		stagger:  0.1,
	},
	{
		selector: '.hexagon-clip',
		from:     { opacity: 0, x: 40, duration: 0.7, ease: 'power2.out' },
	},
	{
		selector: '.o-que-e-visual .criarte-icon',
		from:     { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.5)' },
		stagger:  0.15,
	},

	/* ─── Quem somos ──────────────────────────────────────── */
	{
		selector: '.team-member-photo',
		from:     { opacity: 0, scale: 0.9, duration: 0.6, ease: 'power2.out' },
		stagger:  0.2,
	},
	{
		selector: '.team-member-name, .team-member-description',
		from:     { opacity: 0, y: 15, duration: 0.5, ease: 'power1.out' },
		stagger:  0.15,
	},

	/* ─── Oficinas ────────────────────────────────────────── */
	{
		selector: '.oficina-criativa, .oficina-historia, .oficina-artes',
		from:     { opacity: 0, x: -60, duration: 0.7, ease: 'power2.out' },
		stagger:  0,
	},
	{
		selector: '.oficina-cuidar, .oficina-escrita, .oficina-emocoes',
		from:     { opacity: 0, x: 60, duration: 0.7, ease: 'power2.out' },
		stagger:  0,
	},

	/* ─── Eventos ─────────────────────────────────────────── */
	{
		selector: '.eventos-text p, .fale-connosco',
		from:     { opacity: 0, y: 20, duration: 0.5, ease: 'power1.out' },
		stagger:  0.15,
	},
	{
		selector: '.eventos-triangle, .eventos-circle, .eventos-rect',
		from:     { opacity: 0, scale: 0.9, duration: 0.6, ease: 'power2.out' },
		stagger:  0.15,
	},

	/* ─── Contactos ───────────────────────────────────────── */
	{
		selector: '.contactos-email',
		from:     { opacity: 0, y: 20, duration: 0.5, ease: 'power1.out' },
	},
	{
		selector: '.social-links',
		from:     { opacity: 0, y: 20, duration: 0.5, ease: 'power1.out' },
		trigger:  { trigger: '#contactos', start: 'top 80%' },
	},

];
