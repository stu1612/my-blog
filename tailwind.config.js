/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  // variants: {
  //   extend: {
  //     display: ["group-hover"],
  //   },
  // },

  theme: {
    colors: {
      white: "#fafafa",
      green: "#57dcbe",
      blue: "#5F9DF7",
      lightOrange: "#FF731D",
      darkOrange: "#F15B2A",
      red: "#E7005E",
      pink: "#E80A89",
      black: "#00120b",
      gray: "#A9A9A9",
      yellow: "#F0E68C",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
