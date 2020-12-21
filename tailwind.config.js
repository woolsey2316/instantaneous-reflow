module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  theme: {
    fontFamily: {
      'IBM-plex-sans': ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'informational': '#ff8a65',
        'warning': '#f2cc41',
        'danger': '#7C0C12',
        'matrix-green': '#92cbba',
        'matrix-blue': '#3b5371',
        'true-blue': "#3968ae",
        gray: {
          '100': '#ffffff',
          '200': '#f6fbfc',
          '300': '#eeeeee',
          '400': '#888888',
          '500': '#686868',
          '600': '#5c8697',
          '650': '#444444',
          '700': '#333333',
          '800': '#191919',
          '900': '#090909',
        },
      },
      spacing: {
        'logo-w': '275px',
        'logo-h': '57px',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
      },
      margin: {
        '-px': '-1px',
        '-2px': '-2px',
      },
      padding: {
        '-px': '-1px',
        '-2px': '-2px'
      },
      backgroundImage: {
        'spinning-stars': "url('../images/spinning-stars.png')",
        'object-over-earth': "url('../images/pexels-spacex-23789.png')",
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