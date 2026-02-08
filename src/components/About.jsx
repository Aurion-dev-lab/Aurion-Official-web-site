function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-orange-50/50 to-transparent dark:bg-[linear-gradient(120deg,rgba(255,76,37,0.08),transparent_40%)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-7 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card/70 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-bright">
            About Aurion
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4.2vw,3.4rem)] text-gray-900 dark:text-text">
            Built for scale. Tuned for resilience.
          </h2>
          <p className="mt-4 text-[1.05rem] text-gray-600 dark:text-muted">
            We align platform engineering, security, and automation into one
            clear operating model so your teams ship faster without risking
            stability.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface p-4">
              <h3 className="mb-1 font-display text-gray-900 dark:text-text">
                Reliability by design
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted">
                Resilient architectures and proactive monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface p-4">
              <h3 className="mb-1 font-display text-gray-900 dark:text-text">
                Embedded expertise
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted">
                Senior engineers integrated into your workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface p-4">
              <h3 className="mb-1 font-display text-gray-900 dark:text-text">
                Security-first
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted">
                Zero-trust posture across every environment.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface p-4">
              <h3 className="mb-1 font-display text-gray-900 dark:text-text">
                Always-on coverage
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted">
                24/7 response with clear escalation paths.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-orange-100/80 to-white dark:bg-[linear-gradient(160deg,rgba(255,76,37,0.25),rgba(12,6,5,0.8))] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-bright">
              Impact
            </p>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gray-900 dark:text-text">
                  12+
                </span>
                <span className="text-sm text-gray-600 dark:text-muted">
                  Years shipping critical systems
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gray-900 dark:text-text">
                  240%
                </span>
                <span className="text-sm text-gray-600 dark:text-muted">
                  Average infra savings
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gray-900 dark:text-text">
                  50+
                </span>
                <span className="text-sm text-gray-600 dark:text-muted">
                  Enterprise teams supported
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gray-900 dark:text-text">
                  24/7
                </span>
                <span className="text-sm text-gray-600 dark:text-muted">
                  Ops & security coverage
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-6">
            <h3 className="font-display text-xl text-gray-900 dark:text-text">
              How we work
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-muted">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-bright" />
                Transparent roadmaps with weekly progress check-ins.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-bright" />
                Proactive monitoring and incident response playbooks.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-bright" />
                Continuous optimization cycles tied to business KPIs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
