import logo from '../assets/logo2.png'

function Header() {
	return (
		<header className="sticky top-0 z-20 border-b border-white/5 bg-[#0a0504]/80 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-7 py-5">
				<div className="flex items-center gap-2.5 font-display font-semibold tracking-[0.5px]">
					<img
						src={logo}
						alt="Aurion logo"
						className="h-10 w-10 drop-shadow-[0_0_12px_rgba(255,76,37,0.45)]"
					/>
					<span className="text-[1.1rem]">Aurion</span>
				</div>
				<nav className="hidden items-center gap-6 text-muted md:flex" aria-label="Primary">
					<a href="#services" className="transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						Services
					</a>
					<a href="#about" className="transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						About
					</a>
					<a href="#process" className="transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						Process
					</a>
				</nav>
				<a
					className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-[#0c0605] shadow-ember transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
					href="#contact"
				>
					Request Demo
				</a>
			</div>
		</header>
	)
}

export default Header
