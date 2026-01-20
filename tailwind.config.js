/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#256CD8",
          50: "#EAF1FD",
          100: "#D6E3FB",
          200: "#ADC7F6",
          300: "#85ABF2",
          400: "#5C8FED",
          500: "#3473E9",
          600: "#256CD8",
          700: "#1E57AD",
          800: "#164182",
          900: "#0F2C56",
        },
        secondary: {
          DEFAULT: "#284657",
          50: "#EAF7F9",
          100: "#D4EFF3",
          600: "#284657",
        },
        accent: {
          DEFAULT: "#374746",
          50: "#EAF7F9",
          100: "#D4EFF3",
          600: "#374746",
        },
      },
    },
  },
  plugins: [],
};
