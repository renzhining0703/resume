/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'animate-fade-in-up',
    'animate-fade-in',
    'animate-slide-in-right',
    'animate-scale-in',
    'opacity-0',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#eef2f7',
          100: '#dce4ef',
          200: '#b9c9df',
          300: '#8ca8c9',
          400: '#5f87b3',
          500: '#3b6a9e',
          600: '#2f5582',
          700: '#274466',
          800: '#223954',
          900: '#1e3047',
        },
        cream: {
          50:  '#fafaf7',
          100: '#f5f4ef',
          200: '#ebe8dd',
          300: '#ddd8c6',
        },
        sage: {
          400: '#8fa89a',
          500: '#6b8f7d',
          600: '#557463',
        },
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Source Serif 4"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
