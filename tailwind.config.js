/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        slate: 'var(--slate)',
        'light-slate': 'var(--light-slate)',
        'lightest-slate': 'var(--lightest-slate)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
    },
  },
  plugins: [],
};
