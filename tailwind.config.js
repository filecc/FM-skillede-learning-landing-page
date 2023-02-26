/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
       'fm-grayish': '#666CA3',
       'fm-dark': '#13183F',
       'fm-gray': '#83869A',
        'fm-primary': '#F74780',
        'fm-primary-light': '#FFA7C3',
        'fm-white': '#FFFFFF',

      },
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
      },
      fontSize: {
        'fm-heading-xl': '3.5rem',
        'fm-heading-l': '2.5rem',
        'fm-heading-m': '2rem',
        'fm-heading-s': '1.5rem',
        'fm-heading-sm': '20px',
        'fm-body-m': '1.12rem',
        'fm-body-s': '1rem',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}





