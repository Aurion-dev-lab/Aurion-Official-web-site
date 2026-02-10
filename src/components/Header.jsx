import { Link } from 'react-router-dom'

import logo from '../assets/logo2.png'
import { useTheme } from '../context/ThemeContext'

function Header() {
	const { theme, toggleTheme } = useTheme();

 	return (
		<header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-white/5 dark:bg-[#0a0504]/80">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-7 py-5">
				<Link to="/" className="flex items-center gap-2.5 font-display font-semibold tracking-[0.5px]">
					<img
						src={logo}
						alt="Aurion logo"
						className="h-10 w-10 drop-shadow-[0_0_12px_rgba(255,76,37,0.45)]"
					/>
					<span className="text-[1.1rem] text-gray-900 dark:text-text">Aurion</span>
				</Link>
				<nav className="hidden items-center gap-6 text-gray-700 dark:text-muted md:flex" aria-label="Primary">
					<Link to="/" className="transition hover:text-black dark:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						Home
					</Link>
					<Link to="/services" className="transition hover:text-black dark:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						Services
					</Link>
					<Link to="/about" className="transition hover:text-black dark:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						About
					</Link>
					<Link to="/process" className="transition hover:text-black dark:hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60">
						Process
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<button
						onClick={toggleTheme}
						className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60"
						aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
					>
						{theme === 'dark' ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
						)}
					</button>
					<a
						className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-6 py-3 text-sm font-semibold text-white dark:text-[#0c0605] shadow-[0_8px_24px_rgba(255,76,37,0.15)] dark:shadow-ember transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-base"
						href="#contact"
					>
						Request Demo
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
