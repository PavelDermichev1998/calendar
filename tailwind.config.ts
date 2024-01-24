import type { Config } from 'tailwindcss';

const colors = {
  blue: '#d5e5ff',
  border_neutral: '#d0d0d0',
  content_secondary: '#f5f5f5',
  hover_blue: '#8fb9ff',
  red: '#ff2626d3',
};

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      screens: {
        md: '740px',
      },
    },
  },
};

export default config;
