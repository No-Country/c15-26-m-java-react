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
          100:"#F5F5F5",  //Background
          200: "#F0F0F0", //Gray 2
          500: "#CBCBCB", //Gray 1
          800:"#414141", //Black 2
          900:"#252525"  //Black 1
        },
        blue:{
          500: "#121BDC", //Selected
          600: "#5259FF", //Blue 1
          700:"#333BF4" , //BlueCTA
          800: "#5F66FD" , //Blue 2
          900: "#7075f5",   //Blue 3
        },
        red:{
          600: "#ff5252" //Red Alert
        },
        yellow: {
          600: "#FFAF52" //Yellow Alert
        },
        green: {
          600: "#6AE157" //Green Success
        }

      }
    },
  },
  plugins: [],
});