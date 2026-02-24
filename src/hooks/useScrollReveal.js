import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses Intersection Observer to reveal elements on scroll.
 * Adds a 'revealed' class when elements enter the viewport.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0–1), default 0.15
 * @param {string} options.rootMargin - Root margin, default '0px 0px -60px 0px'
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // Collect all elements with a reveal class inside the container
        const targets = node.querySelectorAll(
            '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-blur'
        );

        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
