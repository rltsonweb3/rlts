module.exports = {
  theme: {
    extend: {
      textColor: theme => theme('colors'),
      textColor: {
        'red': '#f4181c',
        'black': '#555555',
        'dark': '#333333',
        'yellow': '#ffab00',
        'blue': '#0259ae',
        'clay': '#1E272D',
        'shaft': '#222222',
        'stone': '#12222d',
        'gray': '#dddddd'
      },
      borderColor:  theme => ({
        'gray': '#dddddd',
        'blue-500': '#0259ae',
        'yellow': '#ffab00'
      }),
      borderWidth: {
        1: '1px',
      },
      spacing: {
        px: '1px',
      },
      zIndex: {
        n1: '-1',
        99: '99',
        999: '999',
        9999: '9999'
      },
      fontFamily: {
        'poppins': ["'Poppins', sans-serif"],
      },
      colors: {
        'red': '#f4181c',
        'black': '#555555',
        'dark': '#333333',
        'yellow': '#ffab00',
        'blue': '#0259ae',
        'clay': '#1E272D',
        'shaft': '#222222',
        'stone': '#12222d',
        'gray-400': '#fafafa',
        'gray-500': '#dddddd'
      },
      container: {
        center: true,
        padding: {
            DEFAULT: "15px",
            sm: "15px",
            lg: "15px",
            xl: "15px",
            "2xl": "15px"
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px',
          '2xl': '1200px'
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1500px'
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.75' }]
      },
      letterSpacing: {
        textone: '0.75px',
        texttwo: '1px'
      },
      
      keyframes: {
        'waves': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.2, 0.2)'
          },
          '50%': {
            opacity: '0.9'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.7, 0.7)'
          },
        },
        'fadeUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'rollIn': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) rotate(-120deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px) rotate(0deg)'
          },
        }
      },
      animation: {
        'waves1': 'waves 2s ease-in-out infinite',
        'waves2': 'waves 3s ease-in-out infinite',
        'waves3': 'waves 4s ease-in-out infinite',
        'fadeUp1': 'fadeUp .5s ease-in-out',
        'fadeUp2': 'fadeUp .8s ease-in-out',
        'fadeUp3': 'fadeUp 1.1s ease-in-out',
        'fadeUp4': 'fadeUp 1.5s ease-in-out',
        'roll': 'rollIn .7s ease-in-out'
      },
      backgroundImage: {
        'pricing': "linear-gradient(to top, #12b4f2 50%, #0259ae 100%)",
     },
    },
  },
  variants: {
  },
  plugins: [
  ]
}