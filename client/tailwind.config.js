/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  center: true,
  theme: {
    fontFamily: {
      html: [
        "Montserrat, sans-serif",
      ]
    },
    colors: {
      pageBackground: '#272727',
      main: '#FF3E3E',
      mainLight: '#FFCCCC',
      secondary: '#707070',
      transparent: 'transparent',
      white: 'white',
      black: '#272727',
      beige: '#e0e0e0',
      orange: {
        400: '#facc15',
        500: '#eab308',
        600: '#d97706',
      },
      green: {
        400: 'rgb(163 230 530);',
        500: 'rgb(132 204 22)',
        600: 'rgb(101 163 13)',
      },
      gray: {
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
      },
    },

    screens: {

      '2k': { min: '1439px' },
      // => @media (min-width: 1440px) { ... }

      'header': { min: '768px' },
      // => @media (min-width: 768px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '773px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      lp: { max: '320px' },
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        background: "url('/src/assets/img/bgmain.jpg')",
        backgroundAll: "url('/src/assets/img/backgroundall.png')",
        Panel: "url('/src/assets/img/panelcon/meat.png')",
        Panel2: "url('/src/assets/img/panelcon/meat1.jpg')",
        Panel3: "url('/src/assets/img/panelcon/meat2.jpg')",
      },
    },
  },
  plugins: [],
};
