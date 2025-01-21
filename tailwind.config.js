/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      gray: {
        100: "#FCFDFE",
        200: "#E1EBF4",
        300: "#C4D0DB",
        400: "#73808C",
        500: "#45525F",
        600: "#1A1F24",
      },

      green: {
        soft: "#E9F3EF",
        light: "#3B9B62",
        base: "#257F49",
        dark: "#052914",
      },

      red: {
        light: "#FDEDED",
        base: "#F94144",
      },
    },
    fontFamily: {
      black1: "Rubik_900Black",
      bold1: "Rubik_700Bold",
      medium1: "Rubik_500Medium",
      regular1: "Rubik_400Regular",
      semiBold1: "Rubik_600SemiBold",
    },
    extend: {},
  },
  plugins: [],
};
