/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'320px',
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      scale: {
        '-100': '-1'
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}

