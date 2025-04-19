/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e3f6fd',
          100: '#b6e5fa',
          200: '#89d3f7',
          300: '#5cc2f4',
          400: '#29b1f0',
          500: '#029ddb', // main accent
          600: '#028cc4',
          700: '#027bb0',
          800: '#02699b',
          900: '#02557e',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};