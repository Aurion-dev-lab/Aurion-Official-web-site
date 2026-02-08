function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="mx-auto max-w-6xl px-7">
				<div className="grid gap-8 rounded-3xl border border-white/10 bg-card p-8 shadow-deep md:grid-cols-2">
					<div>
						<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Request a demo</p>
						<h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)]">
							Let us build the future of your IT stack
						</h2>
						<p className="text-[1.05rem] text-muted">
							Tell us about your goals and we will assemble a tailored roadmap within 48 hours.
						</p>
						<div className="mt-5 grid gap-4">
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">Email</p>
								<p>AurionIT@outlook.com</p>
							</div>
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">Phone</p>
								<p>+94 76 972 6890</p>
								<p>+94 76 095 0718</p>
							</div>
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">HQ</p>
								<p>Colombo, Sri Lanka</p>
							</div>
						</div>
					</div>
					<form className="grid gap-4" aria-label="Demo request">
						<label className="grid gap-2 text-sm text-muted">
							Full name
							<input
								type="text"
								placeholder="Jane Doe"
								required
								className="rounded-xl border border-white/10 bg-[#0f0807] px-4 py-3 text-text placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
							/>
						</label>
						<label className="grid gap-2 text-sm text-muted">
							Work email
							<input
								type="email"
								placeholder="jane@company.com"
								required
								className="rounded-xl border border-white/10 bg-[#0f0807] px-4 py-3 text-text placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
							/>
						</label>
						<label className="grid gap-2 text-sm text-muted">
							Company size
							<select className="rounded-xl border border-white/10 bg-[#0f0807] px-4 py-3 text-text focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15">
								<option>1-25</option>
								<option>26-100</option>
								<option>101-500</option>
								<option>500+</option>
							</select>
						</label>
						<label className="grid gap-2 text-sm text-muted">
							Project goals
							<textarea
								placeholder="Tell us what you want to improve"
								rows="4"
								className="rounded-xl border border-white/10 bg-[#0f0807] px-4 py-3 text-text placeholder:text-muted/70 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15"
							/>
						</label>
						<p className="text-xs text-muted">
							Share any deadlines, compliance requirements, or cloud providers you use.
						</p>
						<button
							className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-[#0c0605] shadow-ember transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
							type="submit"
						>
							Send request
						</button>
						<p className="text-xs text-muted">We respond in under one business day.</p>
						<p className="text-[0.7rem] text-muted">No spam. Your info stays private.</p>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
