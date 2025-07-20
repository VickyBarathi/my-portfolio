/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        // Define 'sans' to use Inter by default
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xxs': '10px',   // 10px
        '14': '14px',
      },
      colors: {
        
        'html': '#E34F26',
        'css': '#1572B6',
        'sass': '#7952B3',
        'bs': '#CC6699',
        'react': '#61DAFB',
        'js': '#F7DF1E',
      },
    },
  },
  plugins: [],
}

