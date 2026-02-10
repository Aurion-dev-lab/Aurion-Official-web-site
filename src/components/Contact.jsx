function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <div className="grid gap-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-deep md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
              Request a demo
            </p>
            <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
              Let us build the future of your IT stack
            </h2>
            <p className="text-[1.05rem] text-gray-600 dark:text-muted">
              Tell us about your goals and we will assemble a tailored roadmap
              within 48 hours.
            </p>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-600 dark:text-muted">
                  Email
                </p>
                <p className="text-gray-900 dark:text-text">
                  AurionIT@outlook.com
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-600 dark:text-muted">
                  Phone
                </p>
                <p className="text-gray-900 dark:text-text">+94 76 972 6890</p>
                <p className="text-gray-900 dark:text-text">0760 950 718</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-600 dark:text-muted">
                  HQ
                </p>
                <p className="text-gray-900 dark:text-text">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>
          <form className="grid gap-4" aria-label="Demo request">
            <label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
              Full name
              <input
                type="text"
                placeholder="Jane Doe"
                required
                className="rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-[#0f0807] px-4 py-3 text-gray-900 dark:text-text placeholder:text-gray-500 dark:placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
              Work email
              <input
                type="email"
                placeholder="jane@company.com"
                required
                className="rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-[#0f0807] px-4 py-3 text-gray-900 dark:text-text placeholder:text-gray-500 dark:placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
              />
            </label>
            <label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
              Company size
              <select className="rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-[#0f0807] px-4 py-3 text-gray-900 dark:text-text focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15">
                <option>1-25</option>
                <option>26-100</option>
                <option>101-500</option>
                <option>500+</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
              Project goals
              <textarea
                placeholder="Tell us what you want to improve"
                rows="4"
                className="rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-[#0f0807] px-4 py-3 text-gray-900 dark:text-text placeholder:text-gray-500 dark:placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
              />
            </label>
            <p className="text-xs text-gray-600 dark:text-muted">
              Share any deadlines, compliance requirements, or cloud providers
              you use.
            </p>
            <button
              className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-white dark:text-[#0c0605] shadow-[0_8px_24px_rgba(255,76,37,0.15)] dark:shadow-ember transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-base"
              type="submit"
            >
              Send request
            </button>
            <p className="text-xs text-gray-600 dark:text-muted">
              We respond in under one business day.
            </p>
            <p className="text-[0.7rem] text-gray-600 dark:text-muted">
              No spam. Your info stays private.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
