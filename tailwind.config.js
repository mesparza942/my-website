/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        "blink-cursor": {
          from: { "border-color": "transparent" },
          to: { "border-color": "transparent" },
          "50%": { "border-color": "#00b000" },
        },
      },
      animation: {
        typing:
          "typing 3.5s steps(40, end), blink-cursor .75s step-end infinite",
      },
      colors: {
        greenFav: "#00b000",
      },
    },
  },
  plugins: [],
};
