/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Quicksandbold: "Quicksandbold",
        Quicksandlight: "Quicksandlight",
        Quicksandmedium: "Quicksandmedium",
        Quicksandregular: "Quicksandregular",
        Quicksandsemibold: "Quicksandsemibold",
      },
      colors: {
        primarypurple: "#8467C5",
        secondaryblue: "#0DD7FB",
        tertiarywhite: "#F2F1FF",
      }
    },
  },
  plugins: [],
};
