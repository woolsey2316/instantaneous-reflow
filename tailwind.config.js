module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ["./src/*.html"],
  theme: {
    fontFamily: {
      'IBM-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      'source-sans': ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      flex: {
        'break' : '1 1 100%'
      },
      colors: {
        'informational': '#3A6BAF',
        'warning': '#f2cc41',
        'danger': '#7C0C12',
        'matrix-green': '#92cbba',
        'matrix-blue': '#3A68AF',
        'true-blue': "#3968ae",
        'dark-goldenrod': '#AD8E1B',
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
        '1/6': 'calc(16.66% - 0.75rem)',
        '1/3-gap-3': 'calc(33.33% - 0.50rem)',
        'mob-nav': 'calc(100% - 2.5rem)',
        'thumbnail': '13.125rem',
        '5.5': '1.3rem',
        '11': '2.6rem',
        '13': '3.25rem',
        '22': '5.75rem',
        '35': '8.75rem',
        '26': '99px',
        '73': '18.8rem',
        '75': '19.4rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '116': '29.125rem',
        '120': '30rem',
        '129': '32.1875rem',
        '132': '33rem',
        '133': '33.5rem',
        '199': '49.125rem',
        '212': '53rem',
        '200px': '200px'
      },
      maxWidth: {
        '70': '17.43rem',
        '73': '18.8rem',
        '116': '29.125rem',
        '120': '29.1875rem',
        '290': '72.5rem',
        
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
        'spinning-stars': "linear-gradient(rgba(0,0,0,0.37),rgba(0,0,0,0.37)),url('../images/spinning-stars.png')",
        'object-over-earth': "linear-gradient(rgba(0,0,0,0.60),rgba(0,0,0,0.60)),url('../images/pexels-spacex-23789@2x.png')",
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
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderWidth: ['active'],
      borderColor: ['active'],
      textColor: ['active']

    }
  },
  plugins: [],
};