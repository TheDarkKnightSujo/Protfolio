/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Hanken Grotesk"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1edf6',
          200: '#c5dcee',
          300: '#9bc3e1',
          400: '#6ea4d1',
          500: '#5289b8',
          600: '#3d6f9d',
          700: '#355f84',
          800: '#2d4d6b',
          900: '#274158',
        }
      }
    }
  },
  plugins: [],
}
