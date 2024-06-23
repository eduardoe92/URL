/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '110rem',
      },
      fontFamily: {
        'sans': ['"Jost Variable"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'background': '#192936',
        'primary': '#333',
        'secondary': '#ddd',
        'tertiary': '#3b5a71',
        'border':'#000000',
      }
    },
  },
  plugins: [],
}