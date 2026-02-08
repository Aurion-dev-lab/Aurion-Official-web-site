function Process() {
	return (
		<section
			id="process"
			className="py-20 bg-[radial-gradient(circle_at_center,rgba(255,76,37,0.12),transparent_60%)]"
		>
			<div className="mx-auto max-w-6xl px-7">
				<div className="max-w-2xl">
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Process</p>
					<h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)]">
						A clear path from audit to acceleration
					</h2>
					<p className="text-[1.05rem] text-muted">
						We pair strategic planning with hands-on execution, delivering tangible
						outcomes in weeks, not quarters.
					</p>
				</div>
				<div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
					<div className="rounded-2xl border border-white/10 bg-card p-5">
						<span className="mb-2 block font-display font-bold text-accent-bright">01</span>
						<h3 className="mb-2 font-display text-lg">Discovery and risk audit</h3>
						<p className="text-muted">
							Map your stack, surface bottlenecks, and align on business goals.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-card p-5">
						<span className="mb-2 block font-display font-bold text-accent-bright">02</span>
						<h3 className="mb-2 font-display text-lg">Blueprint and roadmap</h3>
						<p className="text-muted">
							Create a phased architecture with security, cost, and performance KPIs.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-card p-5">
						<span className="mb-2 block font-display font-bold text-accent-bright">03</span>
						<h3 className="mb-2 font-display text-lg">Build and automate</h3>
						<p className="text-muted">
							Implement cloud foundations, CI/CD, and AI-driven operations.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-card p-5">
						<span className="mb-2 block font-display font-bold text-accent-bright">04</span>
						<h3 className="mb-2 font-display text-lg">Operate and evolve</h3>
						<p className="text-muted">
							Continuous monitoring, incident response, and optimization cycles.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Process
