const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
      },
      colors: {
        green: {
          ...colors.green,
          loading: '#38B359',
          spotify: '#1DB954',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
