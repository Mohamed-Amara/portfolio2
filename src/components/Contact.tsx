import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact } from '../data/portfolio';

const Contact = () => (
  <section id="contact" className="scroll-mt-24 bg-blue-700 text-white">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="section-kicker text-blue-200">06 / Contact</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Let&apos;s build something valuable.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Open to Fall 2026 engineering, technical sales, applications engineering
            and product-focused opportunities.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-blue-100">
            <MapPin aria-hidden="true" size={16} />
            {contact.location}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={contact.emailHref}
            className="inline-flex min-w-52 items-center justify-between gap-6 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
          >
            <span className="flex items-center gap-2">
              <Mail aria-hidden="true" size={17} />
              Email Mohamed
            </span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-52 items-center justify-between gap-6 rounded-lg border border-blue-300 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
          >
            <span className="flex items-center gap-2">
              <Linkedin aria-hidden="true" size={17} />
              Connect on LinkedIn
            </span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
