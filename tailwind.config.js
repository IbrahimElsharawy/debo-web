/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-color": "#026980",  
        "background-color":"#026980",
      },
    },
  },
  plugins: [],
}