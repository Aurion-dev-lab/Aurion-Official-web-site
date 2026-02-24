import useScrollReveal from '../hooks/useScrollReveal';

function Process() {
  const sectionRef = useScrollReveal();

  const steps = [
    { num: '01', title: 'Discovery & risk audit', desc: 'Map your stack, surface bottlenecks, and align on the business goals.', bg: 'bg-gray-50' },
    { num: '02', title: 'Blueprint & roadmap', desc: 'Create a phased architecture with security, cost, and performance KPIs.', bg: 'bg-white/50' },
    { num: '03', title: 'Build & automate', desc: 'Implement cloud foundations, CI/CD, and AI-driven operations.', bg: 'bg-white/50' },
    { num: '04', title: 'Operate & evolve', desc: 'Continuous monitoring, incident response, and optimization cycles.', bg: 'bg-white/50' },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 bg-white dark:bg-[#0c0c0e]"
    >
      <div className="mx-auto max-w-6xl px-7">
        <div className="max-w-2xl">
          <p className="reveal-blur mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
            Process
          </p>
          <h2 className="reveal-blur stagger-1 mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
            A clear path from audit to acceleration
          </h2>
          <p className="reveal-fade-up stagger-2 text-[1.05rem] text-gray-600 dark:text-muted">
            We pair strategic planning with hands-on execution, delivering
            tangible outcomes in weeks, not quarters.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`reveal-fade-up stagger-${idx + 1} group rounded-2xl ${step.bg} dark:bg-[#0c0c0e] p-5 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-[#141416] hover:-translate-y-1.5 hover:shadow-lg`}
            >
              <span className="number-pop mb-2 block font-display font-bold text-accent-bright text-xl">
                {step.num}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text transition-colors group-hover:text-accent-bright">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
