/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e2f4f9',
          100: '#b7e4ef',
          200: '#8bd1e5',
          300: '#67bfdb',
          400: '#52b2d5',
          500: '#44a5d0',
          600: '#3d98c2',
          700: '#3485af',
          800: '#30759c',
          900: '#255679'
        },
        complementary: {
          50: '#fcf3e5',
          100: '#f7e0be',
          200: '#f3cc96',
          300: '#eeb970',
          400: '#ebaa5a',
          500: '#e79e4f',
          600: '#e1934a',
          700: '#d98645',
          800: '#d17941',
          900: '#c2673d'
        }
      }
    },
  },
  plugins: [],
}
