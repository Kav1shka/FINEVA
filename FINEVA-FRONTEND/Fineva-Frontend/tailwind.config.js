{import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'mblue':'#0B162B',
        'ylv':'#FDDD0D',
        'wt':'#FAF9F9',
      },
      fontFamily: {
        'playfair':['Playfair Display']
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin.cjs"),
    require('tailwindcss-animated'),

  ],
  darkMode: "class"
}

