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
        poppins: ['Poppins', 'sans-serif'], // Alterado para o nome da fonte do Google Fonts
        robotoMono: ['Roboto Mono', 'monospace'], // Alterado para o nome da fonte do Google Fonts
        roboto: ['Roboto', 'sans-serif'], // Alterado para o nome da fonte do Google Fonts
        logo1: ['AvenirHeavy', 'sans-serif'],
        logo2: ['Mukta Mahee', 'sans-serif'],
      },
      colors: {
        Cerrado_100: '#F0672D',
        Cerrado_200: '#383838',
        Cerrado_300: '#EB7C4E',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInBottom: 'slideInBottom 0.5s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
