/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1D9BF0',
        mainHover: '#1A8CD8',
        defaultHover: '#E7E7E8',
        darkDefaultHover: '#2F2F2F',
      },
    },
  },
  plugins: [],
};
