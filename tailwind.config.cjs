const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        turquoise: "#34DCC4",
        lightgray: "#EEEEEE",

        lightblue: "#0BA5EC",
        black1: "#101828",
        black2: "#10182899",
        orangepay: "#F38744",

        imagetextbg: "#F9FAFB",

        whitetitle: "#FFFFFF63",

        palepeach: "#FFE8D6",
        naranjamedio: "#EB984E",
        red: "#910711",
      },
    },
  },

  variants: {
    extend: {
      before: ["before"],
      after: ["after"],
    },
  },
};
