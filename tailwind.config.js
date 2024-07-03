import { nextui } from "@nextui-org/react";
import colors from 'tailwindcss/colors';
import formsPlugin from '@tailwindcss/forms';

const tailwindConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '18': '4.5rem',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        pink: colors.pink,
        purple: colors.purple,
        blue: colors.blue,
        green: colors.green,
        background: 'var(--color-background)',
        primaryColor: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        border: 'var(--color-border)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    formsPlugin,
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};

export default tailwindConfig;
