import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

import photo from '../assets/photo.png'

function Hero() {
	const sectionRef = useScrollReveal({ threshold: 0.1 });

	return (
		<section ref={sectionRef} className="relative py-20 bg-white dark:bg-[#0c0c0e]" id="top">
			{/* Glowing background and circles for warm effect */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
			</div>
			<div className="mx-auto grid max-w-6xl items-center gap-12 px-7 lg:grid-cols-2">
				<div className="flex flex-col gap-5">
					<div className="reveal-fade-up stagger-1 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-muted">

						<span>Say hello to</span>
					</div>
					<h1 className="hero-text-reveal font-display text-[clamp(3.2rem,7vw,6.8rem)] font-bold tracking-[0.08em] leading-tight">
						AURION
					</h1>
					<p className="reveal-fade-up stagger-2 max-w-[560px] text-2xl font-semibold">
						AURION is your trusted partner in scalable IT solutions — empowering tomorrow, today.
					</p>
					<p className="reveal-fade-up stagger-3 max-w-[560px] text-base font-medium text-gray-600 dark:text-muted">
						This is the beginning of our partnership, and we are ready to collaborate, innovate, and grow together.
					</p>
					<div className="reveal-fade-up stagger-4 flex flex-wrap gap-4">
						<Link
							className="glow-pulse rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
							to="/contact"
						>
							Request Demo
						</Link>
						<Link
							className="rounded-full border border-gray-300 dark:border-white/20 bg-white/50 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-text/90 transition hover:bg-white dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-text hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
							to="/services"
						>
							View Services
						</Link>
					</div>
					<div className="grid gap-3 sm:grid-cols-3">
						<div className="reveal-fade-up stagger-5 rounded-2xl border border-red-800/30 bg-white dark:bg-[#0c0c0e] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3 transition-transform hover:scale-[1.04]">
							<p className="text-xs uppercase tracking-[0.2em] text-red-700 dark:text-white/70">Onboarding</p>
							<p className="mt-1 font-display text-lg text-red-900 dark:text-white">14 days</p>
						</div>
						<div className="reveal-fade-up stagger-6 rounded-2xl border border-red-800/30 bg-white dark:bg-[#0c0c0e] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3 transition-transform hover:scale-[1.04]">
							<p className="text-xs uppercase tracking-[0.2em] text-red-700 dark:text-white/70">Response</p>
							<p className="mt-1 font-display text-lg text-red-900 dark:text-white">&lt; 5 minutes</p>
						</div>
						<div className="reveal-fade-up stagger-7 rounded-2xl border border-red-800/30 bg-white dark:bg-[#0c0c0e] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3 transition-transform hover:scale-[1.04]">
							<p className="text-xs uppercase tracking-[0.2em] text-red-700 dark:text-white/70">Coverage</p>
							<p className="mt-1 font-display text-lg text-red-900 dark:text-white">24/7 global</p>
						</div>
					</div>
					<div className="reveal-fade-up stagger-8 rounded-2xl border border-red-800/30 bg-white dark:bg-[#0c0c0e] shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-4 text-sm">
						<p className="font-semibold text-gray-900 dark:text-white">Thank you to everyone who believed in us.</p>
						<p className="mt-2 text-gray-600 dark:text-white/80">Let us empower your future.</p>
					</div>
				</div>

				<div className="relative grid min-h-[360px] place-items-center">

					<img
						src={photo}
						alt="Aurion emblem"
						className="reveal-scale w-[min(320px,70vw)] animate-float drop-shadow-[0_0_25px_rgba(224,62,62,0.5)]"
					/>
					<div className="absolute right-8 top-5 h-[90px] w-[90px] animate-drift rounded-full border border-white/5 bg-[rgba(224,62,62,0.2)]" />
					<div
						className="absolute bottom-2 left-2 h-[140px] w-[140px] animate-drift rounded-full border border-white/5 bg-[rgba(224,62,62,0.2)]"
						style={{ animationDelay: '-3s' }}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
