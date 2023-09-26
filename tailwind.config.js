/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mod: "jit",
  theme: {
    extend: {
      colors: {
        gunmetal: "hsla(0, 0%, 0%, 0.2)",
        "light-coral": "hsl(357, 96%, 73%)",
        "granite-gray": "hsl(210, 4%, 38%)",
        "majorelle-blue": "hsl(249, 95%, 63%)",
        sunglow: "hsl(48, 100%, 50%)",
        background: "#fdf2f2",
        "red-salsa": "hsl(357, 94%, 63%)",
        "misty-rose": " hsl(0, 100%, 95%)",
        "nav-bg": "#fff5f5e8",
        "sunglow-alpha": "hsla(48, 100%, 50%, 0.1)",
        "majorelle-blue-alpha5": "hsla(249, 95%, 63%, 0.05)",
        "red-salsa-alpha5": "hsla(357, 94%, 63%, 0.05)",
      },
      margin: {
        minus: -35,
        "m-": -20,
        128: 128,
      },
      width: {
        1272: 1272,
        1700: 1700,
        350: 350,
        700: 700,
      },
      padding: {
        2000: 2000,
        128: 128,
      },
      lineHeight: {
        1: 1.5,
      },
    },
  },
  plugins: [],
};
