import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

function Header() {
	return (
		<header className="sticky top-0 z-20 border-b border-white/5 bg-[#0a0504]/80 backdrop-blur">
			{/* Reduced py-5 to py-3 for a sleeker look with the larger logo */}
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-7 py-3">

				<Link to="/" className="flex items-center">
					<img
						src={logo}
						alt="Aurion logo"
						className="h-10 w-auto drop-shadow-[0_0_12px_rgba(255,76,37,0.45)]"
					/>
				</Link>

				{/* Added h-full and items-center to ensure the nav occupies the vertical space */}
				<nav className="hidden h-full items-center gap-8 text-muted md:flex" aria-label="Primary">
					<Link to="/" className="transition hover:text-text">Home</Link>
					<Link to="/services" className="transition hover:text-text">Services</Link>
					<Link to="/about" className="transition hover:text-text">About</Link>
					<Link to="/process" className="transition hover:text-text">Process</Link>
				</nav>

				<div className="flex items-center">
					<Link
						className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-2.5 text-sm font-semibold text-[#0c0605] shadow-ember transition hover:-translate-y-0.5"
						to="/contact"
					>
						Request Demo
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
