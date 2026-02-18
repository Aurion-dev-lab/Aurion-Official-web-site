// This form uses FormSubmit (https://formsubmit.co) for submissions.
// Replace 'your@email.com' in the action URL with your actual email address to receive form responses.
function Contact() {
	return (
		<section id="contact" className="py-20">
			<div className="mx-auto max-w-6xl px-7">
				<div className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-card dark:shadow-deep md:grid-cols-2">
					<div>
						<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">Request a demo</p>
						<h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
							Elevate your business with expert IT services
						</h2>
						<p className="text-[1.05rem] text-gray-600 dark:text-muted">
							Share your operational challenges, and we will deliver a strategic service proposal within 48 hours.
						</p>
						<div className="mt-5 grid gap-4">
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-500 dark:text-muted">Email</p>
								<p className="text-gray-900 dark:text-text">AurionIT@outlook.com</p>
							</div>
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-500 dark:text-muted">Phone</p>
								<p className="text-gray-900 dark:text-text">+94 76 972 6890</p>
								<p className="text-gray-900 dark:text-text">+94 76 095 0718</p>
							</div>
							<div>
								<p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-500 dark:text-muted">HQ</p>
								<p className="text-gray-900 dark:text-text">Colombo, Sri Lanka</p>
							</div>
						</div>
					</div>
					<form
						className="grid gap-4"
						aria-label="Demo request"
						action="https://formsubmit.co/AurionIT@outlook.com"
						method="POST"
					>
						<label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
							Full name
							<input
								type="text"
								name="name"
								placeholder="Jane Doe"
								required
								className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15 dark:border-white/10 dark:bg-[#0f0807] dark:text-text dark:placeholder:text-muted/70"
							/>
						</label>
						<label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
							Work email
							<input
								type="email"
								name="email"
								placeholder="jane@company.com"
								required
								className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15 dark:border-white/10 dark:bg-[#0f0807] dark:text-text dark:placeholder:text-muted/70"
							/>
						</label>
						<label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
							Service
							<select
								name="service"
								className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15 dark:border-white/10 dark:bg-[#0f0807] dark:text-text"
								defaultValue=""
							>
								<option value="" disabled>Select a service</option>
								<option value="Full-Stack Web">Full-Stack Web</option>
								<option value="Mobile Apps">Mobile Apps</option>
								<option value="DevOps & Cloud">DevOps & Cloud</option>
								<option value="UI/UX Design">UI/UX Design</option>
								<option value="Project Consulting">Project Consulting</option>
								<option value="Machine Learning">Machine Learning</option>
								<option value="Portfolio Websites">Portfolio Websites</option>
								<option value="Other">Other</option>
							</select>
						</label>
						<label className="grid gap-2 text-sm text-gray-600 dark:text-muted">
							Project goals
							<textarea
								name="project_goals"
								placeholder="Tell us what you want to improve"
								rows="4"
								className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-accent-bright/60 focus:outline-none focus:ring-2 focus:ring-accent-bright/15 dark:border-white/10 dark:bg-[#0f0807] dark:text-text dark:placeholder:text-muted/70"
							/>
						</label>
						<p className="text-xs text-gray-500 dark:text-muted">
							Share any deadlines, compliance requirements, or cloud providers you use.
						</p>
						<button
							className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-[#0c0605] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
							type="submit"
						>
							Send request
						</button>
						<p className="text-xs text-gray-500 dark:text-muted">We respond in under one business day.</p>
						<p className="text-[0.7rem] text-gray-500 dark:text-muted">No spam. Your info stays private.</p>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact;
