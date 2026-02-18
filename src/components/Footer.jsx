function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-gray-50 py-16 dark:border-white/5 dark:bg-[#0b0605]">
			<div className="mx-auto grid max-w-6xl gap-10 px-7 sm:grid-cols-2 lg:grid-cols-3">
				<div className="space-y-4">
					<div className="flex items-center gap-3">
						<span className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd4b5,#ff4c25)]" />
						<p className="font-display text-xl">AURION</p>
					</div>
					<p className="text-sm text-gray-600 dark:text-muted">
						Architecting the digital foundation of tomorrow's market leaders.
					</p>
					<p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
						Tomorrow, engineered.
					</p>
				</div>
				<div>
					<p className="text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-text">Expertise</p>
					<ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-muted">
						<li className="transition hover:text-black dark:hover:text-text">IT scalability</li>
						<li className="transition hover:text-black dark:hover:text-text">Software engineering</li>
						<li className="transition hover:text-black dark:hover:text-text">AI systems</li>
						<li className="transition hover:text-black dark:hover:text-text">Consulting</li>
					</ul>
				</div>
				<div>
					<p className="text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-text">Contact</p>
					<ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-muted">
						<li>
							<a
								href="mailto:aurionit@outlook.com"
								className="transition hover:text-black dark:hover:text-text"
							>
								aurionit@outlook.com
							</a>
						</li>
						<li>
							<a href="tel:+94769726890" className="transition hover:text-black dark:hover:text-text">
								+94 76 972 6890
							</a>
						</li>
						<li>
							<a href="tel:+94760950718" className="transition hover:text-black dark:hover:text-text">
								+94 76 095 0718
							</a>
						</li>
						<li className="text-muted">Colombo, Sri Lanka</li>
					</ul>
				</div>
			</div>
			<div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-gray-200 px-7 pt-6 text-xs text-gray-600 dark:border-white/5 dark:text-muted sm:flex-row sm:items-center">
				<p>(c) 2025 Aurion Engineering Group. Tomorrow, engineered.</p>
				<div className="flex gap-6">
					<a className="transition hover:text-black dark:hover:text-text" href="#">
						Privacy
					</a>
					<a className="transition hover:text-black dark:hover:text-text" href="#">
						Terms
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
