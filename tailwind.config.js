/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" },
    },
    colors: {
      "Blue": "hsl(223, 87%, 63%)",
      "Pale-Blue": "hsl(223, 100%, 88%)",
      "Light-Red": "hsl(354, 100%, 66%)",
      "Gray": "hsl(0, 0%, 59%)",
      "Very-Dark-Blue": "hsl(209, 33%, 12%)",
    },
    fontSize: {
      "ms": "20px",
    },
    fontFamily: {
      Libre: ["Libre Franklin", "sans-serif"]
    },
    fontWeight: {
      "ms": 300,
      "lg": 600,
      "xl": 700,
    },
    extend: {},
  },
  plugins: [],
}
