/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        ratingBg:"rgb(255, 255, 255);",
      },
      colors: {
        aboutTitle: "rgb(46, 58, 107)",
        aboutBtnColor: "#c3242a",
        ratingNumColor:"#1A202C",
        ratingTitleColor:"rgb(42, 52, 55)",
        ratingShadow:"rgba(144, 173, 248, 0.25)"
      }
    },
  },
  plugins: [],
};
