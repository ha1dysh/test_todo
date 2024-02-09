/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-gray': {
          borderRadius: '4px',
          borderWidth: '1px',
          borderColor: '#9ca3af'
        }
      }

      addUtilities(newUtilities)
    }
  ]
}
