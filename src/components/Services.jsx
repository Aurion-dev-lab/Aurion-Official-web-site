function Services() {
	return (
		<section id="services" className="py-20">
			<div className="mx-auto max-w-6xl px-7">
				<div className="mb-10 max-w-2xl">
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Services</p>
					<h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)]">
						Everything you need to scale with confidence
					</h2>
					<p className="text-[1.05rem] text-muted">
						Aurion blends engineering, security, and automation to keep your systems
						resilient and your teams focused on growth.
					</p>
					<p className="mt-3 text-sm text-muted">
						Pick a starting point. We tailor the rest.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<article className="rounded-2xl border border-white/10 bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:border-accent-bright/40">
						<h3 className="mb-2 font-display text-lg">Software development</h3>
						<p className="mb-3 text-muted">
							Custom software built for scale, security, and long-term maintainability.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">Web • API • ERP</span>
					</article>
					<article className="relative rounded-2xl border border-accent-bright/40 bg-card p-6 shadow-card transition hover:-translate-y-1.5">
						<span className="absolute right-4 top-4 rounded-full bg-accent-bright px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#0c0605]">
							Most popular
						</span>
						<h3 className="mb-2 font-display text-lg">SaaS platforms</h3>
						<p className="mb-3 text-muted">
							Launch subscription-ready products with billing, analytics, and multi-tenant design.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">MVP • Growth • Scale</span>
					</article>
					<article className="rounded-2xl border border-white/10 bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:border-accent-bright/40">
						<h3 className="mb-2 font-display text-lg">Mobile apps</h3>
						<p className="mb-3 text-muted">
							iOS and Android experiences with sleek UI and reliable performance.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">React Native • Flutter</span>
					</article>
					<article className="rounded-2xl border border-white/10 bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:border-accent-bright/40">
						<h3 className="mb-2 font-display text-lg">Cloud engineering</h3>
						<p className="mb-3 text-muted">
							Architecture, migration, and optimization on modern cloud stacks.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">AWS • Azure • GCP</span>
					</article>
					<article className="rounded-2xl border border-white/10 bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:border-accent-bright/40">
						<h3 className="mb-2 font-display text-lg">Machine learning</h3>
						<p className="mb-3 text-muted">
							ML models, data pipelines, and production-grade MLOps delivery.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">NLP • Vision • MLOps</span>
					</article>
					<article className="rounded-2xl border border-white/10 bg-card p-6 shadow-card transition hover:-translate-y-1.5 hover:border-accent-bright/40">
						<h3 className="mb-2 font-display text-lg">Product strategy</h3>
						<p className="mb-3 text-muted">
							From discovery to roadmap, we align product vision with engineering delivery.
						</p>
						<span className="text-xs uppercase tracking-[0.08em] text-accent-bright">Research • UX • KPI</span>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Services
