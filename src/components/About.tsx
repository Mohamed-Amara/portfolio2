const About = () => (
  <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-white">
    <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-[180px_1fr] md:items-start md:py-20 lg:px-10">
      <div>
        <p className="section-kicker">01 / About</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          Technical range,
          <span className="block text-blue-700">commercial focus.</span>
        </h2>
      </div>
      <p className="max-w-3xl text-xl leading-8 text-slate-600 md:text-2xl md:leading-9">
        Waterloo Mechatronics Engineering student with experience across AI/hardware
        systems, embedded development, software and customer-facing sales. Interested
        in roles where technical problem-solving, product understanding and business
        growth overlap.
      </p>
    </div>
  </section>
);

export default About;
