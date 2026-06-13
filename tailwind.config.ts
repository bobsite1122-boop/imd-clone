import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b3bff',
          dark: '#2929cc',
          light: '#6b6bff',
        },
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#252545',
        },
        whatsapp: '#25d366',
        telegram: '#2aabee',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(59,59,255,0.08)',
        'card-hover': '0 8px 32px 0 rgba(59,59,255,0.16)',
      },
    },
  },
  plugins: [],
}

export default config
