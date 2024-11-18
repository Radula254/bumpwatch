/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wheat: '#F5DEB3',
        purple: {
          700: '#6b21a8',
        },
        blue: {
          700: '#0056b3',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.kernodle.com/wp-content/uploads/2020/01/Kernodle_High-Risk-pregnancy.jpeg')",
        'about-pattern': "url('background2.jpeg')",
      },
    },
  },
  plugins: [],
};
