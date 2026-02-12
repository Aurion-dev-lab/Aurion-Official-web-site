import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function ScrollToSection() {
	const location = useLocation()

	useLayoutEffect(() => {
		const map = {
			'/': 'top',
			'/services': 'services',
			'/about': 'about',
			'/process': 'process',
			'/contact': 'contact',
		}

		const normalizedPath = location.pathname.replace(/\/$/, '') || '/'
		const id = map[normalizedPath]

		if (id === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}

		if (id) {
			let cancelled = false
			let timerId

			const scrollToTarget = (attempt = 0) => {
				if (cancelled) return
				const el = document.getElementById(id)
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' })
					return
				}
				if (attempt < 6) {
					timerId = setTimeout(() => scrollToTarget(attempt + 1), 80)
				}
			}

			requestAnimationFrame(() => scrollToTarget(0))
			return () => {
				cancelled = true
				if (timerId) clearTimeout(timerId)
			}
		}
	}, [location.pathname])

	return null
}

function App() {
	return (
		<div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,76,37,0.2),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,122,64,0.15),transparent_40%),#0a0504] text-text">
			<ScrollToSection />

			<Header />

			{/* Dummy routes ONLY for URL */}
			<Routes>
				<Route path="/" element={null} />
				<Route path="/services" element={null} />
				<Route path="/about" element={null} />
				<Route path="/process" element={null} />
				<Route path="/contact" element={null} />
			</Routes>

			<main id="main">
				<Hero />
				<Services />
				<About />
				<Process />
				<Contact />
			</main>

			<Footer />
		</div>
	)

}

export default App;
