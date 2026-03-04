/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 全体のフォントを丸文字に統一
        sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      keyframes: {
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        }
      },
      animation: {
        // 'animate-tada' クラスで使用可能に
        tada: 'tada 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
