/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-green": "rgba(35, 125, 27, 0.84)",
        "white-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};