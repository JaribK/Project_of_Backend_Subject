/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#222431",
          "secondary": "#3668A7",
          "accent": "#1D1F2B",
          "neutral": "#1E1C1C",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#00A711",
          "warning": "#ffffff",
          "error": "#A30303",
        },
      },
    ],
  }
}