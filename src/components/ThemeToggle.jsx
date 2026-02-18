import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-muted transition hover:bg-black/5 hover:text-text dark:hover:bg-white/10"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
    )
}

export default ThemeToggle
