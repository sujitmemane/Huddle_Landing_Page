/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321, 100%, 78%)",
        veryDarkCyan: " hsl(192, 100%, 9%)",
        veryPaleBlue: "hsl(207, 100%, 98%)",
      }
    },
  },
  plugins: [],
};

