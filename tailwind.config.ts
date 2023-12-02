import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   blue: '1E4CA1',
    //   black: {
    //     100: '#C4C4C4',
    //     200: '#939393',
    //     300: '#676769',
    //     400: '#383A48',
    //     DEFAULT: '#000',
    //   },
    //   orange: '#F6A649',
    //   pink: '#E0719E',
    //   yellow: '#F6E049',
    //   sky: '#AAC6FC',
    //   green: '#7FD6C2',
    //   dewdrop: '#F3F6E7',
    //   white: '#fff',
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
export default config
