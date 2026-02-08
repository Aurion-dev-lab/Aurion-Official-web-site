import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

function App() {
	const location = useLocation()

	useEffect(() => {
		const idByPath = {
			'/services': 'services',
			'/about': 'about',
			'/process': 'process',
			'/contact': 'contact',
		}

		if (location.pathname === '/') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}

		const targetId = idByPath[location.pathname]
		if (targetId) {
			const target = document.getElementById(targetId)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		}
	}, [location.pathname])

	return (
		<div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,76,37,0.2),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,122,64,0.15),transparent_40%),#0a0504] text-text">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0c0605]"
			>
				Skip to content
			</a>
			<Header />
			<main id="main">
				<Hero />
				<Services />

				<section className="py-14">
					<div className="mx-auto max-w-6xl px-7">
						<div className="grid gap-4 rounded-3xl border border-white/10 bg-card/70 p-6 md:grid-cols-3">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-accent-bright">Outcomes</p>
								<h3 className="mt-2 font-display text-xl">Clear wins in 90 days</h3>
								<p className="mt-2 text-sm text-muted">
									We focus on quick, measurable impact while building long-term foundations.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-surface p-4">
								<p className="font-display text-2xl">-38%</p>
								<p className="text-sm text-muted">Infrastructure cost reduction</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-surface p-4">
								<p className="font-display text-2xl">+4x</p>
								<p className="text-sm text-muted">Deployment frequency uplift</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="about"
					className="py-20 bg-[linear-gradient(120deg,rgba(255,76,37,0.08),transparent_40%)]"
				>
					<div className="mx-auto grid max-w-6xl gap-10 px-7 lg:grid-cols-[1.1fr,0.9fr]">
						<div className="rounded-3xl border border-white/10 bg-card/70 p-8">
							<p className="text-xs uppercase tracking-[0.3em] text-accent-bright">About Aurion</p>
							<h2 className="mt-3 font-display text-[clamp(2.2rem,4.2vw,3.4rem)]">
								Built for scale. Tuned for resilience.
							</h2>
							<p className="mt-4 text-[1.05rem] text-muted">
								We align platform engineering, security, and automation into one clear operating
								model so your teams ship faster without risking stability.
							</p>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								<div className="rounded-2xl border border-white/10 bg-surface p-4">
									<h3 className="mb-1 font-display">Reliability by design</h3>
									<p className="text-sm text-muted">Resilient architectures and proactive monitoring.</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-surface p-4">
									<h3 className="mb-1 font-display">Embedded expertise</h3>
									<p className="text-sm text-muted">Senior engineers integrated into your workflow.</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-surface p-4">
									<h3 className="mb-1 font-display">Security-first</h3>
									<p className="text-sm text-muted">Zero-trust posture across every environment.</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-surface p-4">
									<h3 className="mb-1 font-display">Always-on coverage</h3>
									<p className="text-sm text-muted">24/7 response with clear escalation paths.</p>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div className="rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,76,37,0.25),rgba(12,6,5,0.8))] p-6">
								<p className="text-xs uppercase tracking-[0.3em] text-accent-bright">Impact</p>
								<div className="mt-4 grid gap-4">
									<div className="flex items-center justify-between">
										<span className="font-display text-3xl">12+</span>
										<span className="text-sm text-muted">Years shipping critical systems</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="font-display text-3xl">240%</span>
										<span className="text-sm text-muted">Average infra savings</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="font-display text-3xl">50+</span>
										<span className="text-sm text-muted">Enterprise teams supported</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="font-display text-3xl">24/7</span>
										<span className="text-sm text-muted">Ops & security coverage</span>
									</div>
								</div>
							</div>
							<div className="rounded-3xl border border-white/10 bg-card p-6">
								<h3 className="font-display text-xl">How we work</h3>
								<ul className="mt-4 space-y-3 text-sm text-muted">
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

				<section
					id="process"
					className="py-20 bg-[radial-gradient(circle_at_center,rgba(255,76,37,0.12),transparent_60%)]"
				>
					<div className="mx-auto max-w-6xl px-7">
						<div className="max-w-2xl">
							<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
								Process
							</p>
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
								<h3 className="mb-2 font-display text-lg">Discovery & risk audit</h3>
								<p className="text-muted">
									Map your stack, surface bottlenecks, and align on the business goals.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-card p-5">
								<span className="mb-2 block font-display font-bold text-accent-bright">02</span>
								<h3 className="mb-2 font-display text-lg">Blueprint & roadmap</h3>
								<p className="text-muted">
									Create a phased architecture with security, cost, and performance KPIs.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-card p-5">
								<span className="mb-2 block font-display font-bold text-accent-bright">03</span>
								<h3 className="mb-2 font-display text-lg">Build & automate</h3>
								<p className="text-muted">
									Implement cloud foundations, CI/CD, and AI-driven operations.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-card p-5">
								<span className="mb-2 block font-display font-bold text-accent-bright">04</span>
								<h3 className="mb-2 font-display text-lg">Operate & evolve</h3>
								<p className="text-muted">
									Continuous monitoring, incident response, and optimization cycles.
								</p>
							</div>
						</div>
					</div>
				</section>

				<Contact />
			</main>

			<footer className="border-t border-white/5 py-14 pb-16">
				<div className="mx-auto grid max-w-6xl gap-10 px-7 sm:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<span className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd4b5,#ff4c25)] shadow-[0_0_18px_rgba(255,106,61,0.8)]" />
							<p className="font-display text-xl">AURION</p>
						</div>
						<p className="text-sm text-muted">
							Architecting the digital foundation of tomorrow's market leaders.
						</p>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
							Tomorrow, engineered.
						</p>
					</div>
					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-text">Expertise</p>
						<ul className="mt-4 space-y-3 text-sm text-muted">
							<li>IT Scalability</li>
							<li>Software Engineering</li>
							<li>AI Systems</li>
							<li>Consulting</li>
						</ul>
					</div>
					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-text">Contact</p>
						<ul className="mt-4 space-y-3 text-sm text-muted">
							<li>AurionIT@outlook.com</li>
							<li>+94 76 972 6890</li>
							<li>London, UK</li>
							<li>Colombo, LK</li>
						</ul>
					</div>
					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-text">Network</p>
						<p className="mt-4 text-sm text-muted">
							Join our network of elite engineers and strategic partners.
						</p>
						<div className="mt-4 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0807] sm:flex-row sm:rounded-full">
							<input
								className="w-full bg-transparent px-4 py-2 text-sm text-text placeholder:text-muted/70 focus:outline-none"
								placeholder="Secure Email"
								type="email"
							/>
							<button className="bg-accent px-5 py-2 text-sm font-semibold text-[#0c0605] sm:py-0">
								Join
							</button>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-white/5 px-7 pt-6 text-xs text-muted sm:flex-row sm:items-center">
					<p>(c) 2025 Aurion Engineering Group. Tomorrow, engineered.</p>
					<div className="flex gap-6">
						<span>Privacy</span>
						<span>Terms</span>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
