/* ─── animate — GSAP ScrollTrigger helper ───────────────── */

/**
 * @param {string|Element} target  — CSS selector or DOM element
 * @param {object}         from    — gsap.from() vars (opacity, x, y, scale…)
 * @param {object}         trigger — ScrollTrigger options (start, once…)
 */
export function animate(target, from, trigger = {}) {
	if (trigger === null) {
		gsap.from(target, from);
		return;
	}
	gsap.from(target, {
		...from,
		scrollTrigger: {
			trigger: target,
			start: 'top 85%',
			once: true,
			...trigger,
		},
	});
}

/**
 * Staggered version — animates multiple matching elements with a delay between each.
 * @param {string} selector
 * @param {object} from
 * @param {number} stagger
 * @param {object} trigger
 */
export function animateStagger(selector, from, stagger = 0.15, trigger = {}) {
	gsap.utils.toArray(selector).forEach((el, i) => {
		if (trigger === null) {
			gsap.from(el, { ...from, delay: i * stagger });
			return;
		}
		gsap.from(el, {
			...from,
			delay: i * stagger,
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				once: true,
				...trigger,
			},
		});
	});
}
