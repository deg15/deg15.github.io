'use client';
import { useEffect } from 'react';
export function Motion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('has-entered');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll('[data-reveal]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
