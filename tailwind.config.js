/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Brawler: ['Brawler', 'serif'],
      BreeSerif: ['Bree Serif', 'serif'],
      CantoraOne: ['Cantora One', 'sans-serif'],
      Sacramento: ['Sacramento', 'cursive'],
    },
    colors: {
      greenPrimary: "#147C3E",
      greenSecondary: "#3FA066",
    },
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}