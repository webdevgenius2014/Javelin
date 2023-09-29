import type { Config } from 'tailwindcss'
const { colors } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '100': '#1F263E',
          '200': '#303750',
          '300':  '#7262F6',
        },       
        blue: {
          ...colors.blue,
          '900': '#1e3656',
          '800': '#595F75'
        },
        gray: {
          ...colors.gray,
          '100': '#9C9C9C',
          '200': '#656565'
        },
        black: {
          ...colors.black,
          '500': '#373737'
        }

      },
      spacing: {
        '166': '10.375rem',
        '217':'13.563rem'
      }
    },
  },  
  plugins: [require("daisyui")],
}
export default config
