module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-js": "calc(100 * var(--vh))",
      },
    },
  },
  plugins: [],
};
