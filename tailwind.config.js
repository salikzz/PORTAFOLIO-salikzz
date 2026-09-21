/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#161616',
          600: '#1c1c1c',
          500: '#222222',
        },
        ember: {
          DEFAULT: '#E52521',
          dark: '#650909',
          deep: '#4a0606',
        },
        flare: {
          DEFAULT: '#FF5A1F',
          soft: '#FF7A45',
        },
        warm: {
          white: '#F5F2EE',
          100: '#E8E4DF',
          200: '#C4BFB8',
          300: '#9A958E',
          400: '#6E6A64',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'float-medium': 'floatMedium 10s ease-in-out infinite',
        'drift': 'drift 22s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'nebula': 'nebula 30s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'orbit-slow': 'orbitSlow 40s linear infinite',
        'blob': 'blob 18s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-22px) scale(1.03)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-14px) translateX(8px)' },
          '66%': { transform: 'translateY(8px) translateX(-6px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -20px) rotate(2deg)' },
          '66%': { transform: 'translate(-20px, 15px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        nebula: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(40px, -30px) scale(1.15)', opacity: '0.7' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        orbitSlow: {
          '0%': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 50% 50% / 40% 50% 60% 50%' },
          '33%': { borderRadius: '50% 60% 40% 50% / 60% 40% 50% 50%' },
          '66%': { borderRadius: '50% 50% 60% 40% / 50% 60% 40% 50%' },
        },
      },
    },
  },
  plugins: [],
};
