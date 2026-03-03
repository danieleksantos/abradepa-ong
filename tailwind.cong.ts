import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores extraídas do manual da ABRADEPA
        abradepa: {
          dark: "#02767C",    // Petróleo principal 
          medium: "#03989E",  // Teal intermediário 
          light: "#40E0D0",   // Turquesa vibrante 
          pale: "#59E1E4",    // Turquesa claro 
          yellow: "#FCEE21",  // Amarelo destaque 
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;