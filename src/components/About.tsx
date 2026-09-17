const About = () => (
  <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-white">
    <div className="mx-auto grid max-w-6xl gap-5 px-5 py-10 sm:px-8 md:grid-cols-[180px_1fr] lg:px-10">
      <div><p className="section-kicker">01 / About</p><h2 className="mt-2 text-xl font-semibold text-slate-950">What I’m looking for</h2></div>
      <p className="max-w-3xl text-base leading-7 text-slate-600">
        I’m looking for a co-op where I can build, test and troubleshoot real systems.
        Embedded software, robotics and hardware integration interest me most.
        I like work that connects code to a physical device, from understanding its signals to figuring out why something isn’t working.
      </p>
    </div>
  </section>
);

export default About;
