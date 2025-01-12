/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1.5': '1.5px',
      },
      width: {
        '05': '0.125rem',
      },
      colors: {
        'cyan': '#CFF5F8',
      },
      fontSize: {
        'tiny': '0.625rem', // 10px
      },
    },
  },
  plugins: [],
}

