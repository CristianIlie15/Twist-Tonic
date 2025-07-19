/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald' , 'sans-serif'],
        Marcellus : ['Marcellus' , 'serif'],
        Chonburi : ['Chonburi' , 'serif'],
      },
      backgroundImage: {
          'hero': "url('/images/hero.png')", 
      }
    },
  },
  plugins: [],
}