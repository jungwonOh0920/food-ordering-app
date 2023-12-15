/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#fcdf29',
        primary: '#daa437',
        YBGreen: '#d5f3d1',
        YBDarkGreen: '#9aba95',
        YBBlue: '#d5e9e8',
        YBLightYellow: '#fff4aa',
        YBBrown: '#6b2a24'
      }
    },
  },
  plugins: [],
}
