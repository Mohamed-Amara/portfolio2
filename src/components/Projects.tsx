import { Check, Route } from 'lucide-react';
import { projects, type ProjectVisual as ProjectVisualType } from '../data/portfolio';

type ProjectVisualProps = {
  visual: ProjectVisualType;
  title: string;
};

const ProjectVisual = ({ visual, title }: ProjectVisualProps) => {
  if (visual.type === 'system') {
    return (
      <div className="technical-grid relative flex min-h-64 flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-300">
            {visual.label}
          </span>
          <Route aria-hidden="true" className="text-blue-400" size={20} />
        </div>
        <div className="relative mt-12 grid grid-cols-2 gap-3">
          <div className="absolute left-1/2 top-1/2 h-px w-2/3 -translate-x-1/2 -translate-y-1/2 bg-blue-500/40" />
          {visual.nodes.map((node, index) => (
            <div
              key={node}
              className="relative rounded-lg border border-slate-700 bg-slate-900/95 p-3"
            >
              <span className="font-mono text-[10px] text-blue-400">
                0{index + 1}
              </span>
              <p className="mt-1 text-sm font-medium" dir={title.startsWith('Arabic') ? 'rtl' : undefined}>
                {node}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const isCoinWa = title.startsWith('CoinWa');
  const isWestern = title.startsWith('Teacher-Course');

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${
        isCoinWa ? 'h-72 p-4 sm:h-80' : 'h-64 p-4 sm:h-72'
      }`}
    >
      <div
        className={`grid h-full gap-3 ${
          visual.images.length === 3
            ? 'grid-cols-3'
            : visual.images.length === 2
              ? 'grid-cols-2'
              : 'grid-cols-1'
        }`}
      >
        {visual.images.map((image) => (
          <div
            key={image.src}
            className={`overflow-hidden rounded-lg bg-white ${
              isWestern ? 'grid place-items-center p-8' : ''
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="scroll-mt-24 bg-slate-50">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="section-kicker">03 / Projects</p>
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Selected work, explained without the pitch deck.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Mechanical design, connected products and software built around real operating needs.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_-42px_rgba(15,23,42,0.55)] sm:p-6 ${
              index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8' : ''
            }`}
          >
            <ProjectVisual visual={project.visual} title={project.title} />

            <div className={`flex flex-col pt-6 ${index === 0 ? 'lg:pt-0' : ''}`}>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-700">
                Project / {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-blue-700"
                      size={15}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {technology}
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

export default Projects;
