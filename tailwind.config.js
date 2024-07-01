/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '18': '4.5rem',
      },
      fontFamily: {
        'sans': 'var(--font-sans)',
      },
      colors: {
        'background': 'var(--color-background)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'border': 'var(--color-border)',
      }
    },
  },
  plugins: [],
}
