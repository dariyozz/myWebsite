/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#6C63FF",
        // primary: "#407C98",
        primary: "#3586FF",
        secondary: "#FF6363",
        accent: "#F6AD55",
        dark: "#1A202C",
        light: "#EDF2F7",
      },
    },
  },
  plugins: [],
};
