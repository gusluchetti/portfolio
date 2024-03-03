import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'cod-gray': {
        '50': '#f7f7f6',
        '100': '#e6e3e1',
        '200': '#cdc7c2',
        '300': '#ada39b',
        '400': '#8b8076',
        '500': '#70665c',
        '600': '#595248',
        '700': '#49433c',
        '800': '#3c3933',
        '900': '#34312d',
        '950': '#1a1815',
      },

    },
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config
