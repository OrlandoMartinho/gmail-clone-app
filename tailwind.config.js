import { colors } from "./styles/colors"
import { fontFamily } from "./styles/font-family"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}
