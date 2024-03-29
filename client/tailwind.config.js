/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#03030303",
        },
        reddit_border: {
          DEFAULT: "#343536",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
