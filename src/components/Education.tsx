import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => (
  <section id="education" className="scroll-mt-24 bg-slate-50">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="section-kicker">05 / Education</p>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Engineering foundation.
          </h2>

          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-10">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-blue-700 text-white">
                  <GraduationCap aria-hidden="true" size={23} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                  {education.institution}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-600">
                  {education.degree}
                </p>
                <p className="mt-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-blue-700">
                  {education.period}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-950">
                  Relevant coursework
                </h4>
                <ul className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-1">
                  {education.coursework.map((course) => (
                    <li key={course} className="flex items-start gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
