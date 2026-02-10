import photo from '../assets/photo.png'

function Hero() {
	return (
		<section className="relative py-20" id="top">
			<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
				<div className="absolute -left-24 top-10 h-72 w-72 animate-flicker rounded-full bg-[radial-gradient(circle,rgba(255,106,61,0.65),rgba(255,76,37,0.1)_60%,transparent_70%)] blur-2xl" />
				<div className="absolute left-1/3 top-28 h-56 w-56 animate-flicker rounded-full bg-[radial-gradient(circle,rgba(255,122,64,0.5),rgba(255,76,37,0.08)_60%,transparent_70%)] blur-2xl" style={{ animationDelay: '-1s' }} />
				<div className="absolute right-16 top-4 h-72 w-72 animate-flicker rounded-full bg-[radial-gradient(circle,rgba(255,76,37,0.55),rgba(255,122,64,0.1)_60%,transparent_70%)] blur-3xl" style={{ animationDelay: '-2s' }} />
				<div className="absolute bottom-10 left-20 h-10 w-10 animate-rise rounded-full bg-[radial-gradient(circle,rgba(255,204,170,0.6),rgba(255,76,37,0.2)_65%,transparent_70%)]" />
				<div className="absolute bottom-2 left-1/2 h-12 w-12 animate-rise rounded-full bg-[radial-gradient(circle,rgba(255,170,120,0.6),rgba(255,76,37,0.18)_65%,transparent_70%)]" style={{ animationDelay: '-1.5s' }} />
				<div className="absolute bottom-6 right-24 h-8 w-8 animate-rise rounded-full bg-[radial-gradient(circle,rgba(255,220,180,0.5),rgba(255,76,37,0.16)_65%,transparent_70%)]" style={{ animationDelay: '-2.5s' }} />
			</div>
			<div className="mx-auto grid max-w-6xl items-center gap-12 px-7 lg:grid-cols-2">
				<div className="flex flex-col gap-5">
					<div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-muted">
						
						<span>Say hello to</span>
					</div>
					<h1 className="font-display text-[clamp(3.2rem,7vw,6.8rem)] font-bold tracking-[0.08em] leading-tight">
						AURION
					</h1>
					<p className="max-w-[560px] text-2xl font-semibold">
						AURION is your trusted partner in scalable IT solutions — built to engineer tomorrow, today.
					</p>
					<p className="max-w-[560px] text-base font-medium text-gray-600 dark:text-muted">
						This is the beginning of our journey, and we are ready to build, innovate, and grow together.
					</p>
					<div className="flex flex-wrap gap-4">
						<a
							className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-white dark:text-[#0c0605] shadow-[0_8px_24px_rgba(255,76,37,0.15)] dark:shadow-ember transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-base"
							href="#contact"
						>
							Request Demo
						</a>
						<a
							className="rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-text/90 transition hover:text-gray-900 dark:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-base"
							href="#services"
						>
							View Services
						</a>
					</div>
					<div className="grid gap-3 sm:grid-cols-3">
						<div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card/70 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-muted">Onboarding</p>
							<p className="mt-1 font-display text-lg text-gray-900 dark:text-text">14 days</p>
						</div>
						<div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card/70 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-muted">Response</p>
							<p className="mt-1 font-display text-lg text-gray-900 dark:text-text">&lt; 5 minutes</p>
						</div>
						<div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card/70 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-3">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-muted">Coverage</p>
							<p className="mt-1 font-display text-lg text-gray-900 dark:text-text">24/7 global</p>
						</div>
					</div>
					<div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface/80 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-none p-4 text-sm text-gray-600 dark:text-muted">
						<p className="font-semibold text-gray-900 dark:text-text">Thank you to everyone who believed in us.</p>
						<p className="mt-2">Let us build the future.</p>
					</div>
				</div>

				<div className="relative grid min-h-[360px] place-items-center">
					<div
						className="absolute h-[260px] w-[260px] animate-pulse bg-[radial-gradient(circle,rgba(255,76,37,0.4),transparent_70%)] blur"
						aria-hidden="true"
					/>
					<img
						src={photo}
						alt="Aurion emblem"
						className="w-[min(320px,70vw)] animate-float drop-shadow-[0_0_25px_rgba(255,76,37,0.6)]"
					/>
					<div className="absolute right-8 top-5 h-[90px] w-[90px] animate-drift rounded-full border border-white/5 bg-[rgba(255,122,64,0.25)]" />
					<div
						className="absolute bottom-2 left-2 h-[140px] w-[140px] animate-drift rounded-full border border-white/5 bg-[rgba(255,122,64,0.25)]"
						style={{ animationDelay: '-3s' }}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
