/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    backgroundImage: {
      'hero-img': "url('/src/assets/landing_page.png')",
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      colors: {
        'main': '#21AC99',
      },
    },

  },
  plugins: [],
}
