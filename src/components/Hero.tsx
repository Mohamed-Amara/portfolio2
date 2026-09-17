import { ArrowDownRight, ArrowRight, FileText, Mail } from 'lucide-react';
import { contact, profile } from '../data/portfolio';

const Hero = () => (
  <section id="top" className="technical-grid relative isolate scroll-mt-24 bg-slate-50">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-100/60 to-transparent" />
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-10">
      <div>
        <p className="section-kicker">University of Waterloo · {profile.academicStage}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-6xl">
          I’m Mohamed.<br />I work across <span className="text-blue-700">hardware and software.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I’m a Mechatronics Engineering student interested in embedded systems and how devices work.
          My experience includes AI and hardware systems at The Plug Co, mobile development at CoinWa,
          and a Java tool that automated course assignments.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Roles of interest">
          {profile.focus.map((item) => <li key={item} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">{item}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#experience" className="button-primary">View my experience <ArrowDownRight aria-hidden="true" size={17} /></a>
          <a href="#projects" className="button-secondary">See my projects <ArrowRight aria-hidden="true" size={17} /></a>
          <a href={contact.resumeHref} target="_blank" rel="noreferrer" className="button-secondary">View résumé <FileText aria-hidden="true" size={17} /></a>
        </div>
        <p className="mt-5 text-sm text-slate-600">{profile.availability}</p>
      </div>
      <aside className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7" aria-label="Selected work at a glance">
        <p className="section-kicker">A quick look at my work</p>
        <div className="mt-4 divide-y divide-slate-200">
          <a href="#the-plug" className="block rounded-sm py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <p className="flex items-center justify-between gap-3 font-semibold text-slate-950">AI & hardware systems <ArrowRight aria-hidden="true" size={16} className="text-blue-700" /></p>
            <p className="mt-2 text-sm leading-6 text-slate-600">VR prototyping, multimodal device data and AI-driven application features.</p>
          </a>
          <a href="#washing-machine" className="block rounded-sm py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <p className="flex items-center justify-between gap-3 font-semibold text-slate-950">Mechanical design <ArrowRight aria-hidden="true" size={16} className="text-blue-700" /></p>
            <p className="mt-2 text-sm leading-6 text-slate-600">SolidWorks assembly and drivetrain calculations for a pedal-powered washing machine.</p>
          </a>
          <a href="#automotive-infotainment" className="block rounded-sm py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <p className="flex items-center justify-between gap-3 font-semibold text-slate-950">Current project: Acura CarPlay <ArrowRight aria-hidden="true" size={16} className="text-blue-700" /></p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Researching how to add CarPlay while keeping the factory screens and controls.</p>
          </a>
        </div>
        <a href={contact.emailHref} className="mt-2 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"><Mail aria-hidden="true" size={16} />Get in touch</a>
      </aside>
    </div>
  </section>
);

export default Hero;
