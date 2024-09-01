/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: '',
    },
    extend: {
      colors: {
        'Primary': '#0A1128',
        'Secondary': '#D3D3D3',
        'Accent': '#36454F',
        
      },
    },
  },
  plugins: [],
}