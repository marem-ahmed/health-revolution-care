/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B9BAD",
          50: "#EAF7F9",
          100: "#D4EFF3",
          600: "#2B9BAD",
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
