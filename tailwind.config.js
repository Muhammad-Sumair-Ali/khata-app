/** @type {import('tailwindcss').Config} */
export default {
  build: {
    rollupOptions: {
      external: ['@headlessui/react']
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

