'use client';
import { useEffect } from 'react';
export function Motion() {
  useEffect(() => {
    // Al imprimir, desplegar experiencia y certificaciones y, al terminar,
    // dejar cerrados los que lo estaban.
    let opened: HTMLDetailsElement[] = [];
    const openAll = () => {
      opened = [...document.querySelectorAll('details:not([open])')].map(
        (d) => d as HTMLDetailsElement,
      );
      opened.forEach((d) => (d.open = true));
    };
    const restore = () => {
      opened.forEach((d) => (d.open = false));
      opened = [];
    };
    window.addEventListener('beforeprint', openAll);
    window.addEventListener('afterprint', restore);
    return () => {
      window.removeEventListener('beforeprint', openAll);
      window.removeEventListener('afterprint', restore);
    };
  }, []);
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
