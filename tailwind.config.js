/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hamburger: "HamburgerHeaven",
        roboto: "Roboto",
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
