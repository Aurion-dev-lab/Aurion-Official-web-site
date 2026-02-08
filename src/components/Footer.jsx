function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-14 pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-7 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd4b5,#ff4c25)] shadow-[0_0_18px_rgba(255,106,61,0.8)]" />
            <p className="font-display text-xl text-gray-900 dark:text-text">
              AURION
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-muted">
            Architecting the digital foundation of tomorrow's market leaders.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Tomorrow, engineered.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-text">
            Expertise
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-muted">
            <li>IT Scalability</li>
            <li>Software Engineering</li>
            <li>AI Systems</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-text">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-muted">
            <li>AurionIT@outlook.com</li>
            <li>+94 76 972 6890</li>
            <li>London, UK</li>
            <li>Colombo, LK</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-text">
            Network
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-muted">
            Join our network of elite engineers and strategic partners.
          </p>
          <div className="mt-4 flex flex-col overflow-hidden rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#0f0807] sm:flex-row sm:rounded-full">
            <input
              className="w-full bg-transparent px-4 py-2 text-sm text-gray-900 dark:text-text placeholder:text-gray-500 dark:placeholder:text-muted/70 focus:outline-none"
              placeholder="Secure Email"
              type="email"
            />
            <button className="bg-accent px-5 py-2 text-sm font-semibold text-white dark:text-[#0c0605] sm:py-0">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-gray-200 dark:border-white/5 px-7 pt-6 text-xs text-gray-600 dark:text-muted sm:flex-row sm:items-center">
        <p>(c) 2025 Aurion Engineering Group. Tomorrow, engineered.</p>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
