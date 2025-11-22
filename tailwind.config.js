/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // --- daisyUI Configuration ---
  // If you haven't installed daisyui, you must do it: npm install -D daisyui
  plugins: [require("daisyui")], 
  
  daisyui: {
    themes: [
      {
        sheba360: { // <-- আমাদের কাস্টম থিমের নাম
          
          "primary": "#0A2E5D",   // Navy Blue (Main Brand Color)
          "secondary": "#FFC107", // Golden Yellow (CTA Color)
          "accent": "#FFC107",    // Accent হিসেবেও এটি রাখলাম
          "neutral": "#333333",   // Dark Gray (Text Color)
          "base-100": "#FFFFFF",   // Main Background (White)
          "base-content": "#333333", // Text Color on White Background

          // Note: Tailwind uses these colors for all -primary, bg-secondary, etc.
        },
      },
    ],
  },
}