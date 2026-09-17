import { ChevronDown } from 'lucide-react';
import { experiences, type ExperienceItem } from '../data/portfolio';

const ExperienceEntry = ({ experience }: { experience: ExperienceItem }) => (
  <article id={experience.id} className="grid scroll-mt-24 gap-4 border-b border-slate-800 py-7 md:grid-cols-[180px_1fr] md:gap-8">
    <div>
      <p className="text-sm font-medium leading-6 text-slate-300">{experience.period}</p>
    </div>
    <div>
      {experience.organization && <p className="mb-1 text-sm font-semibold text-blue-300">{experience.organization}</p>}
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{experience.role}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{experience.context}</p>
      <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-slate-200">
        {experience.bullets.map((bullet) => <li key={bullet} className="relative pl-4"><span className="absolute left-0 top-[0.65rem] size-1 rounded-full bg-blue-400" aria-hidden="true" />{bullet}</li>)}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={experience.role + ' skills'}>
        {experience.skills.map((skill) => <li key={skill} className="text-xs text-slate-400">{skill}</li>)}
      </ul>
      {experience.id === 'the-plug' && (
        <details className="technical-note mt-6 rounded-lg border border-slate-700 px-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-sm font-medium text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            More about my work at The Plug <ChevronDown aria-hidden="true" size={17} className="note-chevron shrink-0 transition-transform" />
          </summary>
          <div className="space-y-5 border-t border-slate-700 py-5 text-sm leading-6 text-slate-300">
            <div><h4 className="font-semibold text-white">The hardware concept</h4><p className="mt-1">I used STM32 microcontrollers and breadboards to prototype how sensors, device inputs and software could work together in an early VR concept.</p></div>
            <div><h4 className="font-semibold text-white">The architecture</h4><p className="mt-1">I designed the flow for capturing and synchronizing camera, audio, motion and user-interaction data, then structuring those events for AI processing and searchable memories.</p></div>
            <div><h4 className="font-semibold text-white">The software</h4><p className="mt-1">I developed Python and TypeScript components that processed device data, validated inputs and connected collected events to backend and AI-driven features.</p></div>
            <div><h4 className="font-semibold text-white">The trade-off</h4><p className="mt-1">After evaluating a custom-hardware path, I helped shift the work toward compatibility with existing Meta and commercial VR devices to reduce development time.</p></div>
          </div>
        </details>
      )}
    </div>
  </article>
);

const Experience = () => (
  <section id="experience" className="scroll-mt-24 bg-slate-950 text-white">
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">
      <div className="grid gap-4 md:grid-cols-[180px_1fr]">
        <p className="section-kicker text-blue-400">02 / Experience</p>
        <div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where I’ve worked</h2><p className="mt-3 leading-7 text-slate-400">Embedded prototyping, AI systems, mobile development and software that replaced manual work.</p></div>
      </div>
      <div className="mt-8 border-t border-slate-800">{experiences.map((item) => <ExperienceEntry key={item.id} experience={item} />)}</div>
    </div>
  </section>
);

export default Experience;
