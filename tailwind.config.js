/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A855F7",
          DEFAULT: "#9333EA",
          dark: "#7E22CE",
        },
        secondary: {
          light: "#f39e58",
          DEFAULT: "#f3d849",
          dark: "#bf5d0d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
