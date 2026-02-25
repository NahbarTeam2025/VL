/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { primary: 'var(--bg-primary)', secondary: 'var(--bg-secondary)' },
        accent: { primary: '#3b82f6', secondary: '#8b5cf6' },
        text: { primary: 'var(--text-primary)', secondary: 'var(--text-secondary)', muted: '#94a3b8' },
        border: 'var(--border-color)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(#1f2937 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '4rem 4rem',
        'dot-pattern': '2rem 2rem',
      },
      animation: {
        'logo-glow': 'logo-glow 4s ease-in-out infinite',
        'beam': 'beam 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'logo-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        'beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fadeIn': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'pulse': {
          '50%': { opacity: '.5' },
        }
      },
      boxShadow: {
        'premium': '0 0 80px -20px rgba(59, 130, 246, 0.4)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
