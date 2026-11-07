'use client';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { profile } from '@/lib/profile';
import type { Content } from '@/lib/content';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

const subscribe = () => () => {};

export function Navigation({
  t,
  switchHref,
}: {
  t: Content['common'];
  switchHref: string;
}) {
  const links = t.nav;
  const languageSwitch = (className: string) => (
    <a
      className={className}
      href={switchHref}
      hrefLang={t.switchLang}
      lang={t.switchLang}
      aria-label={t.switchAria}
    >
      {t.switchLabel}
    </a>
  );
  const [open, setOpen] = useState(false);
  // Antes de hidratar (o sin JavaScript) el botón del menú es un enlace a la
  // navegación del pie, que lista todas las secciones; después abre el diálogo.
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive('#' + entry.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    document
      .querySelectorAll('main section[id]')
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header-shell">
      <div className="site-header wrap">
        <a className="brand" href="#inicio" aria-label={t.homeLabel}>
          <span className="wordmark" aria-hidden="true">
            deg<span>.</span>
          </span>
          <span className="brand-name">David Egea García</span>
        </a>
        <nav className="desktop-nav" aria-label={t.mainNav}>
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              aria-current={active === link.href ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
          {languageSwitch('language-switch')}
          <a
            className="nav-contact"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </nav>
        <div className="mobile-navigation">
          {languageSwitch('language-switch')}
          <a
            className="mobile-contact"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={15} />
          </a>
          {!hydrated ? (
            <a
              className="menu-trigger menu-fallback"
              href="#secciones"
              aria-label={t.openMenu}
            >
              <Menu size={21} aria-hidden="true" />
            </a>
          ) : (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger
                render={
                  <Button
                    className="menu-trigger"
                    variant="ghost"
                    aria-label={t.openMenu}
                  />
                }
              >
                <Menu size={21} />
              </DialogTrigger>
              <DialogContent
                className="navigation-dialog"
                showCloseButton={false}
              >
                <div className="dialog-top">
                  <DialogTitle>
                    David Egea García<span>.</span>
                  </DialogTitle>
                  <DialogClose
                    render={
                      <Button
                        className="close-button"
                        variant="ghost"
                        aria-label={t.closeMenu}
                      />
                    }
                  >
                    <X size={22} />
                  </DialogClose>
                </div>
                <DialogDescription className="sr-only">
                  {t.menuDescription}
                </DialogDescription>
                <nav aria-label={t.mobileNav}>
                  {[
                    ...links,
                    { href: profile.linkedin, label: 'LinkedIn' },
                  ].map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={
                        link.href === profile.linkedin ? '_blank' : undefined
                      }
                      rel={
                        link.href === profile.linkedin
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      onClick={() => setOpen(false)}
                    >
                      <span className="mono" aria-hidden="true">
                        0{i + 1}
                      </span>
                      {link.label}
                      <ArrowUpRight size={24} />
                    </a>
                  ))}
                </nav>
                <p className="menu-foot mono">{t.menuFoot}</p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
