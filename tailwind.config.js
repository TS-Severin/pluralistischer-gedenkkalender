const { nextui } = require("@nextui-org/react");
const path = require('path');



/** @type {import('tailwindcss').Config} */
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cormorant": ['var(--font-cormorant)', 'Georgia', 'Times', 'serif'],
        "bricolage": ['var(--font-bricolage)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      hyphens: {
        auto: 'auto',
        none: 'none',
        manual: 'manual',
      },

    },
  },
  darkMode: "class",
  plugins: [nextui(),],
}
