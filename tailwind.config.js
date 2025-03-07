/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', // Add your HTML files here
      './src/**/*.{js,ts,jsx,tsx}', // Add your source files
    ],
    theme: {
      extend: {}, // You can add custom themes here if needed
    },
    plugins: [
      require('tailwindcss-scrollbar-hide'), // Add the tailwindcss-no-scrollbar plugin
    ],
  }
  