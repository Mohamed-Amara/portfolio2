import { Code2, Cpu, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';

const icons = [Code2, Cpu, Wrench] as const;

const Skills = () => (
  <section id="skills" className="scroll-mt-24 border-y border-slate-200 bg-white">
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="section-kicker">04 / Skills</p>
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Skills & tools
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            My technical background, with examples in the work and projects above.
          </p>
        </div>
      </div>

      <div className="mt-8 grid border-l border-t border-slate-200 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];

          return (
            <article key={group.title} className="border-b border-r border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon aria-hidden="true" size={19} />
                </span>
                <h3 className="font-semibold text-slate-950">{group.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
