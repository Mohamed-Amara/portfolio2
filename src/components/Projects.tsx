import { ArrowRight, Check, Circle, Cpu, Route } from 'lucide-react';
import { useEffect, useState } from 'react';
import { projects, type ProjectVisual as ProjectVisualType } from '../data/portfolio';
import AutomotiveProject from './AutomotiveProject';

type ProjectVisualProps = {
  visual: ProjectVisualType;
};

const ProjectVisual = ({ visual }: ProjectVisualProps) => {
  if (visual.type === 'automotive') {
    return (
      <div className="technical-grid flex min-h-80 flex-col justify-between rounded-xl border border-slate-800 bg-slate-950 p-5 text-white sm:p-7 lg:h-full">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-300">2016 Acura ILX / Planned setup</p>
          <Cpu aria-hidden="true" className="shrink-0 text-blue-400" size={20} />
        </div>
        <div className="mx-auto my-7 w-full max-w-xs space-y-3">
          <div className="mx-3 rounded-lg border border-slate-600 bg-slate-900 p-4 shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Upper 8-inch display</p>
            <div className="mt-3 flex items-center gap-3">
              <Route aria-hidden="true" className="text-blue-400" size={27} />
              <p className="text-sm font-medium">{visual.upperDisplay}</p>
            </div>
            <div aria-hidden="true" className="mt-4 flex gap-1.5">
              <span className="h-1 w-14 rounded bg-blue-500" /><span className="h-1 w-8 rounded bg-slate-600" /><span className="h-1 w-6 rounded bg-slate-600" />
            </div>
          </div>
          <div className="rounded-lg border border-slate-600 bg-slate-900 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Lower 7-inch ODMD</p>
            <p className="mt-2 text-sm font-medium">{visual.lowerDisplay}</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">I’m also looking into using this screen to control CarPlay.</p>
          </div>
        </div>
        <p className="border-t border-slate-700 pt-4 text-xs leading-5 text-slate-300">Keep the original screens and dashboard.<br /><span className="text-slate-400">Planned layout · Prototype still to come</span></p>
      </div>
    );
  }

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
              <p className="mt-1 text-sm font-medium">
                {node}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-4 sm:h-72">
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
            className="overflow-hidden rounded-lg bg-white"
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

const Projects = () => {
  const [isBriefOpen, setBriefOpen] = useState(() => window.location.hash === '#automotive-infotainment');

  useEffect(() => {
    const openLinkedBrief = () => {
      if (window.location.hash === '#automotive-infotainment') setBriefOpen(true);
    };
    window.addEventListener('hashchange', openLinkedBrief);
    return () => window.removeEventListener('hashchange', openLinkedBrief);
  }, []);

  return (
  <section id="projects" className="scroll-mt-24 bg-slate-50">
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="section-kicker">03 / Projects</p>
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Projects I’ve worked on.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            CAD and software work, plus the automotive project I’m developing now.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            id={project.id}
            key={project.title}
            className={`scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_-42px_rgba(15,23,42,0.55)] sm:p-6 ${
              index === 0 || project.status ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8' : ''
            }`}
          >
            <ProjectVisual visual={project.visual} />

            <div className={`flex flex-col pt-6 ${index === 0 || project.status ? 'lg:pt-0' : ''}`}>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-700">
                  {project.status ? 'Current project' : index === 0 ? 'Mechanical design / CAD & analysis' : `Project / ${String(index + 1).padStart(2, '0')}`}
                </p>
                {project.status && <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800"><span aria-hidden="true" className="size-1.5 rounded-full bg-amber-600" />{project.status}</span>}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    {project.status ? <Circle aria-hidden="true" className="mt-2 shrink-0 text-blue-700" size={8} /> : <Check
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-blue-700"
                      size={15}
                    />}
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {project.status && <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-slate-500">Project focus & planned tools</p>}
              <ul className={`${project.status ? 'mt-2' : 'mt-6'} flex flex-wrap gap-2`} aria-label={`${project.title} ${project.status ? 'engineering focus and proposed technologies' : 'technologies'}`}>
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              {project.detailHref && <a href={project.detailHref} onClick={() => setBriefOpen(true)} className="mt-6 inline-flex items-center gap-2 self-start rounded-sm text-sm font-semibold text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">See the plan and progress <ArrowRight aria-hidden="true" size={17} /></a>}
            </div>
            {project.detailHref && <AutomotiveProject open={isBriefOpen} onOpenChange={setBriefOpen} />}
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
