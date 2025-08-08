/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'fade-in-1': 'fadeIn 1s ease-in 0.5s forwards',
        'fade-in-2': 'fadeIn 1s ease-in 1s forwards',
        'fade-in-3': 'fadeIn 1s ease-in 1.5s forwards',
        'fade-in-4': 'fadeIn 1s ease-in 2s forwards',
        'fade-in-5': 'fadeIn 1s ease-in 2.5s forwards',
        'fade-in-6': 'fadeIn 1s ease-in 3s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}