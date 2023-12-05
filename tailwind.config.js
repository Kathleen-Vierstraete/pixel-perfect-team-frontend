/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4da6ff",
          DEFAULT: "#0A62D0",
          dark: "#0066cc",
        },
        secondary: {
          light: "#f39e58",
          DEFAULT: "#F3D849",
          dark: "#bf5d0d",
        },
        grey: {
          DEFAULT: "#E0E5E9",
        },
        black: {
          DEFAULT: "#191617",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
