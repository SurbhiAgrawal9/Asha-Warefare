/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B365D',
        'primary-dark': '#142847',
        secondary: '#3B82F6',
        'secondary-dark': '#2563eb',
        accent: '#FCD34D',
      },
    },
  },
  plugins: [],
};