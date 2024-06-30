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
        'sans': 'var(--font-sans)',
      },
      colors: {
        'background': 'var(--color-background)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'border':'var(--color-border)',
      }
    },
  },
  plugins: [],
}
