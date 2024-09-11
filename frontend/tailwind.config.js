/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorGreen: "#34bf49",
        colorGray: "#999",
        textColorGray: "#464952",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImage: "url('/bg-effect.png')",
        specialsImage: "url('/bg-effect-3.png')",
        waveImage: "url('/bg-effect-2.png')",
        dotImage: "url('/bg-dot-effect.png')",
      },
    },
  },
  plugins: [],
};
