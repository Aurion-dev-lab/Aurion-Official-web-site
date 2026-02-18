/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0a0504',
        surface: '#120806',
        card: '#160a08',
        accent: '#ff4c25',
        'accent-bright': '#ff6a3d',
        'accent-deep': '#d7381d',
        text: '#f5f0ee',
        muted: '#c9bab4',
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(circle at top left, rgba(255,76,37,0.2), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,122,64,0.15), transparent 40%), linear-gradient(to bottom, #0a0504, #0a0504)',
        'base-gradient': 'radial-gradient(circle at top left, rgba(255,76,37,0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,122,64,0.2), transparent 40%), #0a0504',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        ember: '0 12px 30px rgba(255, 76, 37, 0.25)',
        card: '0 20px 50px rgba(0, 0, 0, 0.35)',
        deep: '0 30px 60px rgba(0, 0, 0, 0.4)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -8px)' }
        },
        flicker: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1) translateY(0)' },
          '40%': { opacity: '0.9', transform: 'scale(1.05) translateY(-6px)' },
          '70%': { opacity: '0.6', transform: 'scale(0.98) translateY(-2px)' }
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '30%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-40px) scale(1.1)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite',
        flicker: 'flicker 3.5s ease-in-out infinite',
        rise: 'rise 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
