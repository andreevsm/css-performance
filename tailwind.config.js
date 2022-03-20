const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./public/index.html'],
  theme: {
    colors: {
      active: '#ffe800',
      good: '#7bc549',
      average: '#e49a27',
      poor: 'red',
      outline: '#31353f',
      white: 'white'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      fontSize: {
        'text-2.5xl': ['28px', {
          lineHeight: '28px',
          letterSpacing: '4px'
        }]
      },
      borderRadius: {
        'rounded-2.2xl': '18px'
      },
      backgroundColor: {
        'bg-navigation': 'rgba(0,46,255, 0.4)'
      },
      flexBasis: {
        'basis-230': '230px'
      },
      paddingTop: {
        'pt-100': '400px'
      },
      marginTop: {
        '10.25': '50px'
      },
      backgroundSize: {
        'watchlist': '17px 15px',
        'watched': '14px 10px',
        'favorite': '18px 18px'
      },
      background: {
        'footer': 'url(\'../images/background.png\') no-repeat 50% 0'
      }
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        'html': {
          minHeight: '100%',
          justifyContent: 'center',
          'min-width': '1240px',
          position: 'relative',
          '-webkit-font-smoothing': 'antialiased',
          display: 'flex',
          background: '#121213 url(\'../images/background.png\') no-repeat 60% 0',
          fontSize: '16px',
          fontFamily: '\'Open Sans\', \'Arial\', sans-serif',
          color: 'white'
        },
        body: {
          'box-sizing': 'border-box',
          'max-width': '1240px',
          'padding': '28px 20px 0',
          'width': '100%'
        },
        'a:link': {
          'opacity': 1,
          'text-decoration': 'none',
          'transition': 'opacity 0.1s ease-in'
        },
        'a:hover': {
          'opacity': 0.7,
        },
        button: {
          cursor: 'pointer',
        },
      })
    }),
  ],
}
