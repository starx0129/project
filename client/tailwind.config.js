/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scans all files in the src folder for classes
  darkMode: 'class', // Enables dark mode using the class strategy
  theme: {
    extend: {}, // Add customizations here
  },
  plugins: [], // Add Tailwind plugins here if needed
};
