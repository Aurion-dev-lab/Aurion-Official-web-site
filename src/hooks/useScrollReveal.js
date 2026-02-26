import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-based reveal animations.
 * Adds and removes 'revealed' class based on visibility.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0–1)
 * @param {string} options.rootMargin - Root margin
 */
export default function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(`
      .reveal-fade-up,
      .reveal-fade-left,
      .reveal-fade-right,
      .reveal-scale,
      .reveal-blur,
      .reveal-rotate,
      .reveal-flip,
      .reveal-parallax
    `);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            // 👇 This enables re-animation when scrolling up
            entry.target.classList.remove("revealed");
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