/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // add main color var 
      colors: {
        'main-color': '#378CE7',
        "secondary-color": "#27374D",
        "main-text-color": "#DDE6ED",
        
      }
    },
  },
  plugins: [],
  darkMode:"class"
};
