/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#1E1B2E',
          text: '#FFFFFF',
          accent: '#E91E63',
        },
        gradient: {
          start: '#E91E63',
          end: '#2196F3',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E91E63 0%, #2196F3 100%)',
      }
    },
  },
  plugins: [],
};