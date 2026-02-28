/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que esta línea esté exacta
  ],
  darkMode: 'class', // Importante para el modo oscuro que planeamos
  theme: {
    extend: {},
  },
  plugins: [],
}