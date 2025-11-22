/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navy: "#0A1A2F",
        navyLight: "#112240",
        primary: "#4F8BFF",
        secondary: "#64FFDA",
        light: "#E6EEF8",
      }
    }
  },

  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: [
      {
        shebaTheme: {
          "primary": "#4F8BFF",
          "secondary": "#64FFDA",
          "accent": "#112240",
          "neutral": "#0A1A2F",
          "base-100": "#0A1A2F",
          "info": "#4F8BFF",
          "success": "#64FFDA",
          "warning": "#F4D03F",
          "error": "#E74C3C",
        }
      }
    ]
  }
}
