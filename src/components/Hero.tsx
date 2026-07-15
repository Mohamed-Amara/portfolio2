import { ArrowDownRight, ArrowRight, CheckCircle2 } from 'lucide-react';

const roleTags = [
  'AI/Hardware Systems',
  'Embedded Development',
  'Software',
  'Technical Sales',
] as const;

const Hero = () => (
  <section id="top" className="technical-grid relative isolate scroll-mt-24 overflow-hidden bg-slate-50">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-100/60 to-transparent" />
    <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-10 lg:py-28">
      <div>
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          University of Waterloo • Mechatronics Engineering
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
          Building technical systems from{' '}
          <span className="text-blue-700">hardware to software.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Mechatronics Engineering student with experience in AI/hardware systems,
          embedded development, software and customer-facing sales. Seeking Fall 2026
          engineering or technical sales opportunities.
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Areas of focus">
          {roleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#experience" className="button-primary">
            View Experience
            <ArrowDownRight aria-hidden="true" size={17} />
          </a>
          <a href="#projects" className="button-secondary">
            View Projects
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <aside className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end" aria-label="Career focus">
        <div className="absolute -inset-3 -z-10 rotate-2 rounded-2xl border border-blue-200 bg-blue-100/60" />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-38px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-5 text-sm font-semibold text-emerald-700">
            <CheckCircle2 aria-hidden="true" size={18} />
            Seeking Fall 2026 opportunities
          </div>

          <div className="divide-y divide-slate-200">
            <div className="grid grid-cols-[42px_1fr] gap-4 py-6">
              <span className="font-mono text-xs text-blue-700">01</span>
              <div>
                <p className="font-semibold text-slate-950">Engineering path</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Embedded systems, robotics, hardware, software, automation and mechatronics.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[42px_1fr] gap-4 py-6">
              <span className="font-mono text-xs text-blue-700">02</span>
              <div>
                <p className="font-semibold text-slate-950">Commercial path</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Technical sales, applications engineering, solutions and business development.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-950 px-4 py-3 text-xs text-slate-300">
            <span>BUILD</span>
            <span className="text-blue-400">→</span>
            <span>UNDERSTAND</span>
            <span className="text-blue-400">→</span>
            <span>COMMUNICATE</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
