import { Linkedin, Mail } from 'lucide-react';
import { contact, navigation } from '../data/portfolio';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
      <p className="text-sm">© {new Date().getFullYear()} {contact.name}</p>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-1">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Connect with Mohamed on LinkedIn"
          className="rounded-md p-2 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <Linkedin aria-hidden="true" size={17} />
        </a>
        <a
          href={contact.emailHref}
          aria-label="Email Mohamed"
          className="rounded-md p-2 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <Mail aria-hidden="true" size={17} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
