module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        192: "48rem",
      },
      colors: {
        brand: {
          twitter: "#55acee",
          linkedin: "#007bb5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
