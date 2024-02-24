/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19212D",
        "chat-active": "#456897",
        white: "#FFFFFF",
        muted: "#B3C2D5",
        secondary: "#233040",
        dark: "#131415",
        "blue-primary": "#4EA2FE",
        "blue-secondary": "#72BAF8",
      },
    },
  },
  plugins: [],
};
