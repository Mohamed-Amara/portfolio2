import { ChevronDown, MapPin } from 'lucide-react';
import { experiences, type ExperienceItem } from '../data/portfolio';

const ExperienceEntry = ({ experience }: { experience: ExperienceItem }) => (
  <article id={experience.id} className="grid scroll-mt-24 gap-4 border-b border-slate-800 py-7 md:grid-cols-[180px_1fr] md:gap-8">
    <div>
      <p className="text-sm font-medium leading-6 text-slate-300">{experience.period}</p>
      {experience.location && <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-slate-400"><MapPin aria-hidden="true" size={14} className="mt-0.5 shrink-0" />{experience.location}</p>}
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
            <div><h4 className="font-semibold text-white">The problem</h4><p className="mt-1">Memory Box needed to capture media, process it with AI and make it searchable. The team needed to decide what should run on a user’s device and what should run in the cloud.</p></div>
            <div><h4 className="font-semibold text-white">My part in the team</h4><p className="mt-1">I worked on the project from its early stages, with shared responsibilities across AI, device integration and system design. I also created the initial deployment diagram and wrote the hardware feasibility study. My latest co-op term ended in August 2026.</p></div>
            <div><h4 className="font-semibold text-white">What the technical work involved</h4><p className="mt-1">The team worked on processing camera, audio and motion data, checking timestamps across devices, and recovering data after disconnects. These are the kinds of integration problems I worked through with my teammates.</p></div>
            <div><h4 className="font-semibold text-white">The trade-off</h4><p className="mt-1">Cloud processing reduced the hardware required on the phone. A fully local version would need more device compute and memory. Wearables and VR were considered as later extensions.</p></div>
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
        <div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where I’ve worked</h2><p className="mt-3 leading-7 text-slate-400">System design, mobile development and software that replaced manual work.</p></div>
      </div>
      <div className="mt-8 border-t border-slate-800">{experiences.filter((item) => !item.additional).map((item) => <ExperienceEntry key={item.id} experience={item} />)}</div>
      <details className="technical-note mt-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md py-4 text-sm font-semibold text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          Other experience <ChevronDown aria-hidden="true" size={18} className="note-chevron transition-transform" />
        </summary>
        {experiences.filter((item) => item.additional).map((item) => <ExperienceEntry key={item.id} experience={item} />)}
      </details>
    </div>
  </section>
);

export default Experience;
