function Process() {
  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-b from-transparent to-orange-50/30 dark:bg-[radial-gradient(circle_at_center,rgba(255,76,37,0.12),transparent_60%)]"
    >
      <div className="mx-auto max-w-6xl px-7">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
            Process
          </p>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
            A clear path from audit to acceleration
          </h2>
          <p className="text-[1.05rem] text-gray-600 dark:text-muted">
            We pair strategic planning with hands-on execution, delivering
            tangible outcomes in weeks, not quarters.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white/50 dark:bg-card/40 p-5 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition hover:bg-white dark:hover:bg-card/60">
            <span className="mb-2 block font-display font-bold text-accent-bright text-xl">
              01
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">
              Discovery & risk audit
            </h3>
            <p className="text-sm text-gray-600 dark:text-muted">
              Map your stack, surface bottlenecks, and align on the business
              goals.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 dark:bg-card/40 p-5 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition hover:bg-white dark:hover:bg-card/60">
            <span className="mb-2 block font-display font-bold text-accent-bright text-xl">
              02
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">
              Blueprint & roadmap
            </h3>
            <p className="text-sm text-gray-600 dark:text-muted">
              Create a phased architecture with security, cost, and performance
              KPIs.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 dark:bg-card/40 p-5 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition hover:bg-white dark:hover:bg-card/60">
            <span className="mb-2 block font-display font-bold text-accent-bright text-xl">
              03
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">
              Build & automate
            </h3>
            <p className="text-sm text-gray-600 dark:text-muted">
              Implement cloud foundations, CI/CD, and AI-driven operations.
            </p>
          </div>
          <div className="rounded-2xl bg-white/50 dark:bg-card/40 p-5 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition hover:bg-white dark:hover:bg-card/60">
            <span className="mb-2 block font-display font-bold text-accent-bright text-xl">
              04
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">
              Operate & evolve
            </h3>
            <p className="text-sm text-gray-600 dark:text-muted">
              Continuous monitoring, incident response, and optimization cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
