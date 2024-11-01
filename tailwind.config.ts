import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Heading: ['cy', 'sans-serif'],
        Numbers: ['minion-pro', 'serif'],
        Texting: ['myriad-pro', 'serif'],
      },
      colors: {
        Cerrado_100: '#F0672D',
        Cerrado_200: '#383838',
        Cerrado_300: '#EB7C4E',
      },
    },
  },
  plugins: [],
};
export default config;
