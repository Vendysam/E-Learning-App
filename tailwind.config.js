/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
              primary: '#6eb0ec',
              textDark: '#111827',
              textLight: '#6b7280',
              white: '#ffffff',
              bgc: '#efeaee',
            },
            fontFamily: {
              rale: ['Raleway', 'sans-serif'],
            },
            maxWidth: {
              container: '1200px',
            },
            gridTemplateAreas: {
              header: ['header header'],
              main: ['main main'],
              footer: ['footer footer'],
            }
    },
  },
  plugins: [],
}

