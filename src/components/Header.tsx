import { Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { contact, navigation } from '../data/portfolio';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          aria-label="Mohamed Amara — back to top"
        >
          <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-sm font-bold tracking-wide text-white transition-colors group-hover:bg-blue-700">
            MA
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-950 sm:text-base">
              {contact.name}
            </span>
            <span className="block text-[11px] text-slate-500 sm:text-xs">
              {contact.title}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-1 border-l border-slate-200 pl-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Mohamed on LinkedIn"
              className="icon-link"
            >
              <Linkedin aria-hidden="true" size={18} />
            </a>
            <a
              href={contact.emailHref}
              aria-label="Email Mohamed"
              className="icon-link"
            >
              <Mail aria-hidden="true" size={18} />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="icon-link lg:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
            <ul className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Mohamed on LinkedIn"
                className="icon-link"
              >
                <Linkedin aria-hidden="true" size={18} />
              </a>
              <a href={contact.emailHref} aria-label="Email Mohamed" className="icon-link">
                <Mail aria-hidden="true" size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
