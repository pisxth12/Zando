module.exports = {
  darkMode: 'class', 
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'banner': '#EFEFEF',
        'rock': '#6A6B6A',
        'wood': '#c76f63',
        'primary': '#c76f63',
        'price-color': '#c97267',
        'bg-dashboard':'#f5f5f5',
        piseth:{
          50:'#eefaff',
          100:'#e0f5fe',
          200:'#baedfd',
          300:'#7de0fc',
          400:'#38d1f8',
          500:'#0ebce9',
          600:'#0299c7',
          700:'#037aa1',
          800:'#076685',
          900:'#0c546e',
          950:'#083649',
        },
        chipmong:{
             header_bg:'#006333',
             nav_bg:'#bfe000',
             yellow:'#bfe000',
             green:'#007d15',
             greendark:'#013d07',
             projects:'"#013d07',
             footer_bg:'#545454',
             blue: '#1a9aa1',
             golds: '#ccc258',
             skygreen:'#57ba8c',
             charity:'#98c773',
        },
        my_pg:{
          black:  "#0f1217",
        },
        gwen:{
          purple:'#ff1793',
          blacks:'#0d1321',
          write:'#dfe5eb',
          purple:'#b386fc',

        }
      },
      fontSize: {
  'cm-5': '5px',

  'cm-10': '10px',
  'cm-20': '20px',
  'cm-30': '30px',
  'cm-10': '10px',

  'cm-100': '100px',
  'cm-130': '130px',
  'cm-120': '120px',



  'cm-50': '50px',
  'cm-60': '60px',
  'cm-70': '70px',
   

   'cm200': '200'
   },

     
      fontFamily: {
        bree: ['"Bree Serif"', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
         cm_font: ['"Source Code Pro"', 'monospace'],
      },
      screens: {
        'custom575': '575px',
        'custom1200': '1200px',
        'custom300': '300px'
      },
      chipmong_cr:{
        'screen200':'200px',
        'screen300':'300px'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide")
  ]
}
