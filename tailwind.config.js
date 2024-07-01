/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue : "#663b06",
      },
      fontFamily: {
        cursive: ["Poppins", "cursive"],
        cursive2: ["Playwrite ES Deco", "cursive2"],
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}