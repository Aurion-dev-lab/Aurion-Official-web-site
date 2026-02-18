function Services() {
	return (
		<section id="services" className="py-20 bg-white dark:bg-[#120909]">
			<div className="mx-auto max-w-6xl px-7">
				<div className="mb-10 max-w-2xl">
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Services</p>
					<h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
						Everything you need to scale with confidence
					</h2>
					<p className="text-[1.05rem] text-gray-600 dark:text-muted">
						Aurion blends engineering, security, and automation to keep your systems
						resilient and your teams focused on growth.
					</p>
					<p className="mt-3 text-sm text-gray-600 dark:text-muted">
						Pick a starting point. We tailor the rest.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">Full-Stack Web</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Enterprise-grade APIs, secure dashboards, and managed deployments.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">Mobile Apps</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Expert Flutter & native development consulting, offline-first strategies.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">DevOps & Cloud</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Streamlined DevOps, Docker containerization, and automated CI/CD pipelines.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">UI/UX Design</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							User-centric wireframing, high-fidelity UI design, and seamless handoff.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">Project Consulting</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Strategic scoping, risk assessment, and expert delivery oversight.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">Machine Learning</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Advanced ML modeling, robust data pipelines, and predictive analytics services.
						</p>
					</article>
					<article className="rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#222] dark:hover:shadow-none">
						<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text">Portfolio Websites</h3>
						<p className="mb-3 text-sm text-gray-600 dark:text-muted">
							Professional branding, creative portfolios, and digital presence services.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Services
