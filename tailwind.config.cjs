/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        20: "20%", // flexbasic for the SideMenu
        80: "80%", // flexnbasic for the Body
      },

      height: { 90: "90%" },
      colors: {
        sideMenuBg: "#181818",
        bodyBg: "#ffff",
        titleColor: "#2b2b2b",
        textColor: "#e2e2e2",
        hoverColor: "#262626",
        colorOne: "#F5EBE0",
        colorTwo: "#fbf0ef",
        colorThree: "#f1fcf0",
        colorFour: "#DAE2B6",
        gradient: "linear-gradient(rgb(56,194,166),rgb(124,83,151))",
      },
    },
  },
  plugins: [],
};
