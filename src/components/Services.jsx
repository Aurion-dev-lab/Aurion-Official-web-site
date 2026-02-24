import useScrollReveal from '../hooks/useScrollReveal'

function Services() {
	const sectionRef = useScrollReveal();

	const services = [
		{ title: 'Full-Stack Web', desc: 'Enterprise-grade APIs, secure dashboards, and managed deployments.' },
		{ title: 'Mobile Apps', desc: 'Expert Flutter & native development consulting, offline-first strategies.' },
		{ title: 'DevOps & Cloud', desc: 'Streamlined DevOps, Docker containerization, and automated CI/CD pipelines.' },
		{ title: 'UI/UX Design', desc: 'User-centric wireframing, high-fidelity UI design, and seamless handoff.' },
		{ title: 'Project Consulting', desc: 'Strategic scoping, risk assessment, and expert delivery oversight.' },
		{ title: 'Machine Learning', desc: 'Advanced ML modeling, robust data pipelines, and predictive analytics services.' },
		{ title: 'Portfolio Websites', desc: 'Professional branding, creative portfolios, and digital presence services.' },
		{ title: 'Automation Solutions', desc: 'Custom workflow automation, scripting, and business process optimization.' },
		{ title: 'Managed Maintenance', desc: '24/7 monitoring, security updates, and performance optimization for existing systems.' },
	];

	return (
		<section ref={sectionRef} id="services" className="py-20 bg-white dark:bg-[#0c0c0e]">
			<div className="mx-auto max-w-6xl px-7">
				<div className="mb-10 max-w-2xl">
					<p className="reveal-blur mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Services</p>
					<h2 className="reveal-blur stagger-1 mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
						Everything you need to scale with confidence
					</h2>
					<p className="reveal-fade-up stagger-2 text-[1.05rem] text-gray-600 dark:text-muted">
						Aurion blends engineering, security, and automation to keep your systems
						resilient and your teams focused on growth.
					</p>
					<p className="reveal-fade-up stagger-3 mt-3 text-sm text-gray-600 dark:text-muted">
						Pick a starting point. We tailor the rest.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((svc, idx) => (
						<article
							key={idx}
							className={`reveal-fade-up stagger-${Math.min(idx + 1, 9)} group rounded-2xl bg-white dark:bg-[#181818] p-6 border border-gray-200 dark:border-[#222] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-[#222] dark:hover:shadow-[0_8px_30px_rgba(224,62,62,0.08)]`}
						>
							<h3 className="mb-2 font-display text-lg font-semibold text-gray-900 dark:text-text transition-colors group-hover:text-accent-bright">{svc.title}</h3>
							<p className="mb-3 text-sm text-gray-600 dark:text-muted">
								{svc.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
