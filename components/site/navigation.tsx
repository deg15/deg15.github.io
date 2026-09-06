'use client';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/profile';
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

const links = [
  { href: '#capacidades', label: 'Lo que hago' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#formacion', label: 'Formación' },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
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
        <a className="brand" href="#inicio" aria-label="David Egea García, inicio">
          <span className="wordmark" aria-hidden="true">
            deg<span>.</span>
          </span>
          <span className="brand-name">David Egea García</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              aria-current={active === link.href ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
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
          <a
            className="mobile-contact"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={15} />
          </a>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
              render={
                <Button
                  className="menu-trigger"
                  variant="ghost"
                  aria-label="Abrir menú"
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
                      aria-label="Cerrar menú"
                    />
                  }
                >
                  <X size={22} />
                </DialogClose>
              </div>
              <DialogDescription className="sr-only">
                Secciones del portfolio personal de David Egea García.
              </DialogDescription>
              <nav aria-label="Navegación móvil">
                {[
                  ...links,
                  { href: '#zogic', label: 'Proyecto propio' },
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
              <p className="menu-foot mono">SOFTWARE, DATOS & IA · CARTAGENA</p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
