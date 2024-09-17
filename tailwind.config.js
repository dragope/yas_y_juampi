/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)']
      }
    },
    colors: {
      "olive-green": "#9AB09C",
      "white": '#ffffff',
      "light-form": '#f0efed'
    }
  },
  plugins: [],
};
