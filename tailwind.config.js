/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      "loading-pos": "60% 100%",
    },
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
        loading: {
          "0%": { "background-position": "-150% 0,-150% 0" },
          "66%": { "background-position": "250% 0,-150% 0" },
          "100%": { "background-position": "250% 0, 250% 0" },
        },
      },
      animation: {
        typing:
          "typing 3.5s steps(40, end), blink-cursor .75s step-end infinite",
        loading: "loading 3s infinite",
      },
      colors: {
        greenFav: "#00b000",
      },
    },
  },
  plugins: [],
};
