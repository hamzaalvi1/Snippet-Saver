import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "dashboard-layout": "1fr 6fr",
      },
      colors: {
        "primary-bg-color": "#f8fafc",
        "primary-color": "#8338ec",
        "secondary-color": "#fff",
        "hover-color": "#6d28d9",
      },
      fontSize: {
        sm: "14px",
        md: "18px",
        lg: "24px",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      screens: {
        sm: { max: "648px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
