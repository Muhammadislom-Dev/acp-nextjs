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
        "company-strategic": "http://alstar.uz/assets/company-968dd3a3.jpg"
      },
      backgroundColor: {
        ratingBg: "rgb(255, 255, 255);",
        learnMoreBtn: "rgba(130, 158, 228, 0.25)",
        learnMoreBtnHover: "rgba(113, 150, 241, 0.25)",
        companyCeo: "#EEF5FE",
        companyStrategyBg:"#86878A"
      },
      colors: {
        aboutTitle: "rgb(46, 58, 107)",
        aboutBtnColor: "#c3242a",
        ratingNumColor: "#1A202C",
        ratingTitleColor: "rgb(42, 52, 55)",
        ratingShadow: "rgba(144, 173, 248, 0.25)",
        newsText: "rgb(46, 58, 107)"
      },
      fontSize:{
        dsc:"8px"
      }
    },
  },
  plugins: [],
};
