import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          1: "var(--primary)",
          100: "var(--primary-100)",
          200: "var(--primary-200)"
        },
        secondary: {
          1: "var(--secondary)",
          100: "var(--secondary-100)",
        }
      }
    },
  },
  plugins: [],
}
export default config
