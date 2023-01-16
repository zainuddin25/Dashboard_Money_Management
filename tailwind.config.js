/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary' : '#f1f3f4',
        'white-secondary' : '#f7f7f7',
        'black' : '#2f3236',
        'pink' : '#d750c4'
      }
    },
  },
  plugins: [],
}
