/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { primary: '#020617', secondary: '#070c1d' },
        accent: { primary: '#3b82f6', secondary: '#8b5cf6' },
        text: { primary: '#f8fafc', secondary: '#a1afc9', muted: '#a1afc9' },
        border: 'rgba(255,255,255,0.1)',
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
