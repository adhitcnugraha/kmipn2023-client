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
        "green-primary": "#237D1B",
        "white-color": "#FFFFFF",
        "custom-two": "#50A088",
        "cus-grey": "#D9D9D9",
        "custom-blue": "#0D4586",
      },
    },
  },
  plugins: [],
};
