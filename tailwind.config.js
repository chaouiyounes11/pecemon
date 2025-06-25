/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'blue-pecemon': '#115096',
        'yellow-pecemon': '#facd0b',
        'green-pecemon': '#6BB23A',
        'red-pecemon': '#dd0031',
        yellow: {
          400: '#FFCB05',
          500: '#E6B800',
        },
        red: {
          500: '#DC0A2D',
          600: '#C30929',
        },
        blue: {
          500: '#3B4CCA',
          600: '#323DB3',
        },
        green: {
          500: '#7AC74C',
          600: '#6BB23A',
        },
      },
    },
    animation: {
      marquee: 'marquee 50s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
};
