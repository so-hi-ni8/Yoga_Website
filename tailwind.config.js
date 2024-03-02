/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Salsa'],
        body_2: ['Young Serif'],
        another: ['Noto Serif Display'],
        another_2:['Open Sans'],
        another_3:['Zeyada'],
        another_4:['Courgette'],
        one:['Marcellus']
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      }
    },
  },
  plugins: [],
}

