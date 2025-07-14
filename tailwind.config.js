/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        pingfang: ["PingFangTC", "sans-serif"], // 定義 PingFang 字體
      },
      colors: {
        primary: "#3F5D45",
        secondary: "#FFE180",
      },

    },
  },
  plugins: [],
};
