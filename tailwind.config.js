/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a192f",
        lightDark: "#112240",
        accent: "#64ffda", // Electric Teal
        slateText: "#8892b0",
        whiteText: "#e6f1ff",
      },
    },
  },
  plugins: [],
};