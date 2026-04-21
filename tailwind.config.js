/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(56, 189, 248, 0.16)',
      },
      backgroundImage: {
        'mesh-pattern':
          'radial-gradient(circle at top left, rgba(59,130,246,0.24), transparent 30%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 34%)',
      },
    },
  },
  plugins: [],
}
