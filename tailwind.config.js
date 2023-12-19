/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'products' : '1fr 1fr auto',
        'lgProducts' : '1fr auto'
      },
      colors: {
        primary: {
          light: "#A855F7",
          DEFAULT: "#5C11A2",
          dark: "#7E22CE",
        },
        secondary: {
          light: "#f39e58",
          DEFAULT: "#f3d849",
          dark: "#bf5d0d",
        },
        grey: {
          DEFAULT: "#E0E5E9",
        },
        black: {
          DEFAULT: "#191617",
        },
        error: {
          DEFAULT: "#5C0000"
        }
      },
    },
    fontFamily: {
      NicoMoji: ["NicoMoji", "sans-serif"],
      SilkScreen: ["SilkScreen", "sans-serif"],
      numito: ['Nunito', "sans-serif"]
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
