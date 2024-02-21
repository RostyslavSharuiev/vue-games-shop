import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      dark: '#18191C',
      white: '#FFFFFF',
      black: '#000000',
      'dark-gray': '#2E2E2E',
      'mid-gray': '#9B9B9B',
      'light-gray': '#D9D9D9',
      'button-purple': '#8F00FF',
    },
  },
  plugins: [flowbite],
};
