module.exports = {
  content: ["./templates/**/*.html.twig"],
  theme: {
    extend: {
      colors: {
        accent: "#FDC12A",
        divider: "#C9E2F8",
        primary: "#F37335",
        secondary: "#135E9E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
