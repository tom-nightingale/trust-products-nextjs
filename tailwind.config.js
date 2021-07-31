module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'primary': {
          light: '#193662',
          DEFAULT: '#0f203a',
          dark: '#050a12',
        },
        secondary: {
          light: '#db4c40',
          DEFAULT: '#d23527',
          dark: '#a72a1f',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}