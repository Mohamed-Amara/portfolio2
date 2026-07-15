import { MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => (
  <section id="experience" className="scroll-mt-24 bg-slate-950 text-white">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="section-kicker text-blue-400">02 / Experience</p>
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience across technical systems and customer conversations.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A practical mix of engineering development, software delivery, field work
            and sales prospecting.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-slate-800">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.role}-${experience.period}`}
            className="grid gap-5 border-b border-slate-800 py-9 md:grid-cols-[180px_1fr] md:gap-8 md:py-11"
          >
            <div>
              <p className="font-mono text-xs text-blue-400">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
                {experience.period}
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {experience.role}
                  </h3>
                  {experience.organization && (
                    <p className="mt-1 font-medium text-blue-300">
                      {experience.organization}
                    </p>
                  )}
                </div>
                {experience.location && (
                  <p className="flex shrink-0 items-center gap-1.5 text-sm text-slate-400">
                    <MapPin aria-hidden="true" size={15} />
                    {experience.location}
                  </p>
                )}
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 lg:grid-cols-2 lg:gap-x-8">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span
                      className="absolute left-0 top-[0.65rem] size-1 rounded-full bg-blue-400"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${experience.role} skills`}>
                {experience.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
