/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:"#root",
  theme: {
    extend: {
      backgroundImage: {
        'mybg': "url('./src/assets/background/bg2.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        'primary': '#E4D466',
        'second': '#F0B92D',
        'third': '#F04D39',
        'fourth': '#373536',
        'five':"  #C1A242"
      }
    },
  },
  plugins: [],
}

