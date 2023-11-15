/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
  
// }

