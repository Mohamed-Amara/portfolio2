import { ArrowDown, ArrowRight, ChevronDown, Cpu, ShieldCheck } from 'lucide-react';
import { automotiveProject as project } from '../data/portfolio';

type AutomotiveProjectProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const noteGroups = [
  { label: 'What I’ve figured out', items: project.completedResearch, style: 'border-blue-200 bg-blue-50/60' },
  { label: 'What I’m working on', items: project.currentWork, style: 'border-amber-200 bg-amber-50/50' },
  { label: 'What’s next', items: project.plannedImplementation, style: 'border-slate-200 bg-slate-50' },
];

const technicalNotes = [
  {
    title: 'Connecting to the factory screens',
    label: 'First, find out what signals they use',
    paragraphs: [
      'I need to identify the LCD and touch controller, trace the connectors, and measure their signals. The video link could be RGB, LVDS or a proprietary interface; I haven’t verified it yet.',
      'Once I know the interface, I can choose hardware to switch between factory video and CarPlay. I also want to see whether the lower touchscreen can send touch input to the CarPlay computer through USB HID.',
    ],
  },
  {
    title: 'Keeping the steering-wheel controls',
    label: 'Match button presses to the signals they send',
    paragraphs: [
      'My plan is to record the signals, press one button at a time and compare the results. I’ll start by listening only, then work out how the STM32 could turn those inputs into CarPlay commands.',
      'GA-Net, CAN, LIN and analog button signals are possibilities to investigate. I still need to confirm which ones this system uses.',
    ],
  },
  {
    title: 'Starting and stopping with the car',
    label: 'Use the STM32 to manage power and watch for faults',
    paragraphs: [
      'The planned power board will turn the car’s 12 V supply into protected 5 V and 3.3 V rails. It needs a fuse, reverse-polarity protection, transient protection and filtering.',
      'The STM32 would turn on the computer with the ignition and give it time to shut down before cutting power. I also plan to test crashes, failed boots and power loss so the factory system stays usable.',
    ],
  },
  {
    title: 'Running CarPlay and playing audio',
    label: 'Use an existing receiver and keep the ELS sound system',
    paragraphs: [
      'I plan to use a commercial CarPlay receiver for the phone connection. My work is connecting it to the Acura’s screens, controls and power system. I’m still choosing the computer and checking Linux/Android compatibility.',
      'For the first prototype, audio would go through the car’s AUX input, using a USB DAC if needed. That lets the factory system keep handling volume, amplification and the ELS speakers.',
    ],
  },
];

const AutomotiveProject = ({ open, onOpenChange }: AutomotiveProjectProps) => (
  <details
    id="automotive-infotainment"
    open={open}
    onToggle={(event) => onOpenChange(event.currentTarget.open)}
    className="engineering-brief mt-7 scroll-mt-24 border-t border-slate-200 lg:col-span-2 lg:mt-0"
  >
    <summary className="group flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
      <span>
        <span className="block text-sm font-semibold text-slate-950">More about the project</span>
        <span className="mt-1 block text-xs leading-5 text-slate-500">How I plan to build it and where I’m at</span>
      </span>
      <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-blue-700"><span className="hidden sm:inline">{open ? 'Show less' : 'Read more'}</span><ChevronDown aria-hidden="true" size={19} className={`transition-transform ${open ? 'rotate-180' : ''}`} /></span>
    </summary>

    <div className="space-y-10 border-t border-slate-200 pb-2 pt-7 sm:space-y-12 sm:pt-9">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="section-kicker">Why I’m building it</p>
          <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">CarPlay in my Acura,<br />using the original screens.</h4>
          <p className="mt-4 text-sm leading-7 text-slate-600">{project.overview}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">The goal is for it to connect when I start the car and feel like it belongs there, ideally without cutting any factory wiring.</p>
        </div>
        <aside className="rounded-xl border border-amber-200 bg-amber-50 p-5" aria-label="Development status">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-800">Current phase / {project.currentPhase}</p>
          <p className="mt-3 text-sm font-semibold text-slate-900">I’m still at the research and design stage.</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">I’ve outlined the system. Next is a donor-unit teardown, signal measurements and a bench prototype. Installation and testing in the car come later.</p>
        </aside>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-950">Where I’m at</h4>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {noteGroups.map((group) => (
            <div key={group.label} className={`rounded-xl border p-5 ${group.style}`}>
              <h5 className="text-sm font-semibold text-slate-900">{group.label}</h5>
              <ul className="mt-4 space-y-3 text-xs leading-6 text-slate-600">
                {group.items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-slate-400" /><span>{item}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <figure className="technical-grid rounded-xl bg-slate-950 p-5 text-white sm:p-7">
        <figcaption>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-300">The current plan</p>
          <h4 className="mt-2 text-xl font-semibold tracking-tight">A computer for CarPlay. An STM32 for the car.</h4>
          <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-400">The computer handles apps, wireless connection and audio. The STM32 handles power, vehicle inputs and switching. Hardware choices still depend on the signal measurements.</p>
        </figcaption>
        <ol aria-label="Proposed CarPlay video path" className="mt-7 flex flex-col gap-2 lg:flex-row lg:items-stretch">
          {project.architecture.map((node, index) => (
            <li key={node} className="flex min-w-0 flex-1 flex-col items-center gap-2 lg:flex-row">
              <div className="flex h-full w-full min-w-0 flex-col justify-center rounded-lg border border-slate-600 bg-slate-900 px-3 py-4">
                <span className="font-mono text-[10px] text-blue-400">0{index + 1}</span>
                <span className="mt-1 text-xs font-medium leading-5">{node}</span>
                {index === 1 && <span className="mt-1 text-[10px] leading-4 text-slate-400">Commercial interface</span>}
              </div>
              {index < project.architecture.length - 1 && <><ArrowRight aria-hidden="true" size={15} className="hidden shrink-0 text-blue-400 lg:block" /><ArrowDown aria-hidden="true" size={15} className="shrink-0 text-blue-400 lg:hidden" /></>}
            </li>
          ))}
        </ol>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-blue-800 bg-blue-950/80 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-blue-100"><Cpu aria-hidden="true" size={18} />STM32 vehicle controller</p>
            <p className="mt-2 text-xs leading-6 text-blue-200">Planned jobs for the microcontroller</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Planned STM32 responsibilities">{project.controllerFunctions.map((item) => <li key={item} className="rounded border border-blue-800 bg-slate-950/40 px-2 py-1 text-[11px] text-slate-200">{item}</li>)}</ul>
          </div>
          <div className="rounded-lg border border-slate-600 bg-slate-900 p-5">
            <p className="text-sm font-semibold">Switching between CarPlay and Acura</p>
            <p className="mt-3 text-xs leading-6 text-slate-300">A video switch would select which system appears on the top screen.</p>
            <p className="mt-3 border-t border-slate-700 pt-3 text-xs leading-6 text-blue-300">Reverse gear or a fault should switch it back to Acura automatically. The lower screen would keep its factory controls.</p>
          </div>
        </div>
      </figure>

      <div>
        <div className="flex items-center gap-2"><ShieldCheck aria-hidden="true" size={20} className="text-blue-700" /><h4 className="text-lg font-semibold text-slate-950">What needs to keep working</h4></div>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {project.safeguards.map((item) => <div key={item.title} className="border-l-2 border-blue-200 pl-4"><h5 className="text-sm font-semibold text-slate-900">{item.title}</h5><p className="mt-2 text-xs leading-6 text-slate-600">{item.description}</p></div>)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-950">The main technical challenges</h4>
        <p className="mt-2 text-sm leading-6 text-slate-600">A closer look at what I need to figure out.</p>
        <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {technicalNotes.map((note) => (
            <details key={note.title} className="technical-note group px-4 sm:px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <span><span className="block text-sm font-semibold text-slate-900">{note.title}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{note.label}</span></span>
                <ChevronDown aria-hidden="true" size={17} className="note-chevron shrink-0 text-blue-700 transition-transform" />
              </summary>
              <div className="max-w-3xl space-y-3 pb-6 text-sm leading-7 text-slate-600">{note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </details>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-950">The build plan</h4>
        <p className="mt-2 text-sm leading-6 text-slate-600">Get it working on the bench, then test it in the car.</p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.phases.map((phase) => (
            <li key={phase.number} className={`rounded-xl border p-4 ${phase.status === 'Current' ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-center justify-between gap-2"><span className="font-mono text-xs text-blue-700">{phase.number}</span><span className={`text-[10px] font-semibold uppercase tracking-wider ${phase.status === 'Current' ? 'text-blue-700' : 'text-slate-500'}`}>{phase.status}</span></div>
              <h5 className="mt-3 text-sm font-semibold leading-5 text-slate-900">{phase.title}</h5>
              <p className="mt-2 text-xs leading-6 text-slate-600">{phase.summary}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 border-t border-slate-200 pt-7 md:grid-cols-2">
        <div><h4 className="text-sm font-semibold text-slate-950">Tools I plan to use</h4><p className="mt-2 text-xs leading-6 text-slate-500">The proposed hardware and software for the build.</p><ul className="mt-3 flex flex-wrap gap-2">{project.coreTechnologies.map((item) => <li key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{item}</li>)}</ul></div>
        <div><h4 className="text-sm font-semibold text-slate-950">Interfaces to investigate</h4><p className="mt-2 text-xs leading-6 text-slate-500">I still need to confirm which signals the car uses.</p><ul className="mt-3 flex flex-wrap gap-2">{project.researchTargets.map((item) => <li key={item} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-600">{item}</li>)}</ul></div>
      </div>

      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
        <h4 className="text-sm font-semibold text-slate-950">Photos and test results</h4>
        <p className="mt-2 text-xs leading-6 text-slate-600">I’ll add teardown photos, signal captures, PCB designs and test results as the build progresses.</p>
      </div>
    </div>
  </details>
);

export default AutomotiveProject;
