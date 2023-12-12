/** @type {import('tailwindcss').Config} */ 

import withMT  from "@material-tailwind/react/utils/withMT"; 

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Segoe UI","sans-serif"],
    },
    extend: {
      colors: {
        gray:{
          200: "#EFEFEF",
          800: "#242424",
        },
        blue:{
          600: "#5259FF"
        },
      }
    },
  },
  plugins: [],
});