/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-bg': '#050505',
        'neon-bg-secondary': '#0B0B0F',
        'neon-cyan': '#00FFF5',
        'neon-pink': '#FF2EEA',
        'neon-text': '#EDEDED',
        'neon-muted': '#8B8B8B',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'], // We might need to import Inter
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00FFF5, 0 0 20px #00FFF5',
        'neon-pink': '0 0 10px #FF2EEA, 0 0 20px #FF2EEA',
      }
    },
  },
  plugins: [],
}
