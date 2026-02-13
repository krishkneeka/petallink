/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8C8DC",
        lavender: "#DCC6F2",
        softsky: "#CFE9F7",
        cream: "#FFF4E6",
        sage: "#DDE5D3",
        petal: {
          brown: "#6B4E3D",
          warm: "#8B7355",
          light: "#FFFDF8",
          gold: "#D4B870",
        },
      },
      fontFamily: {
        display: ["Caveat", "cursive"],
        hand: ["Patrick Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
