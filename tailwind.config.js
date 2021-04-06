const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        print: { raw: "print" },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
