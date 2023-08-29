/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
     colors:{
      'head':'#49affb',
      'green':'#82d0a252',
      'lightGray' : '#888'
     }
    },
  },
  plugins: [],
}

