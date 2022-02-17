module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
