const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};