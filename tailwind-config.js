module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          100: "#f5f5f5",
          400: "#c4c4c4",
          700: "#696671",
          800: "#3a3740",
          900: "#28262c",
        },
        blue: {
          600: "#2284f1",
          700: "#2d87b6",
          800: "#164ec0",
          "600_02": "#217eec",
          "600_01": "#1f80eb",
        },
        indigo: {
          900: "#06286e",
          "900_03": "#082299",
          "900_01": "#051a91",
          "900_02": "#061c93",
        },
        blue_gray: { 900: "#071844", "900_01": "#202b37" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#06286e,#164ec0)",
        gradient1: "linear-gradient(224deg ,#071844,#071844,#2d87b6,#2d87b6)",
        gradient2: "linear-gradient(224deg ,#051a91,#061c93,#2284f1,#1f80eb)",
      },
      fontFamily: { lato: "Lato", inter: "Inter", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
