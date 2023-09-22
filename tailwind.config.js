/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: []
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      backgroundImage: {
        'banner': "url('/assets/img/banner.jpg')",
      },
    },
  },
  plugins: [],
}

