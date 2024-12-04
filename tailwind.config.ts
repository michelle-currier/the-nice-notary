import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-raleway'],
      // },
      dropShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            'a': {
              color: 'teal',
              borderBottom: '2px solid',
              borderColor: 'teal-400',
              transition: 'all ease-in-out 0.3s',
              '&:hover': {
                color: 'pink-400',
                borderColor: 'pink-600',
              },
            },
          
          'Link': {
            color: 'teal',
            borderBottom: '2px solid',
            borderColor: 'teal-400',
            transition: 'all ease-in-out 0.3s',
            '&:hover': {
              color: 'pink-400',
              borderColor: 'pink-600',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;