module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ["./src/*.html"],
  theme: {
    fontFamily: {
      'IBM-plex-sans': ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'informational': '#3A6BAF',
        'warning': '#f2cc41',
        'danger': '#7C0C12',
        'matrix-green': '#92cbba',
        'matrix-blue': '#3A68AF',
        'true-blue': "#3968ae",
        gray: {
          '100': '#eeeeee',
          '200': '#f6fbfc',
          '300': '#9A9A9A',
          '350': 'rgba(255,255,255,0.7)',
          '400': '#888888',
          '500': '#686868',
          '600': '#5c8697',
          '650': '#444444',
          '700': '#333333',
          '750': '#272727',
          '800': '#191919',
          '900': '#090909',
        },
      },
      borderWidth: {
        '3': '3px',
      },
      lineHeight: {
        '1': '15px',
        '2': '18px',
        '3': '23px',
        '4': '25px',
        '5': '27px',
        '6': '35px',
        '7': '53px',
        '8': '62px'
      },
      fontSize: {
        'xs': '13px',
        'sm': '14px',
        'md': '18px',
        'lg': '19px',
        'xl': '22px',
        '2xl': '26px',
        '3xl': '32px',
        '4xl': '48px'
      },
      spacing: {
        '1/6': 'calc(16.66% - 1.5rem)',
        '22': '5.75rem',
        '26': '99px',
        '35': '8.75rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '75': '19.4rem',
        '120': '30rem',
        '132': '33rem',
        '133': '33.5rem',
        '200px': '200px'
      },
      margin: {
        '-px': '-1px',
        '-2px': '-2px',
        '5.5': '1.375rem',
      },
      padding: {
        '-px': '-1px',
        '-2px': '-2px',
      },
      backgroundImage: {
        'spinning-stars': "linear-gradient(rgba(0,0,0,0.63),rgba(0,0,0,0.63)),url('../images/spinning-stars-orange.png')",
        'object-over-earth': "linear-gradient(rgba(0,0,0,0.63),rgba(0,0,0,0.63)),url('../images/pexels-spacex-23789.png')",
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  
  },
  variants: {},
  plugins: [],
};