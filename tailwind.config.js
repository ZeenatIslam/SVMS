/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D2DAFF', // You can define multiple shades
          Default: '#98BDFF', // This will be your primary color
          dark: '#4B49AC', // Optionally define a dark shade
        },
        supportive:{
          light:'#7DA0FA',
          Default:'#7978E9',
          dark:'F3797E',
        }
      },
    },
  },
  plugins: [],
}

