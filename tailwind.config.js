/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefef8',
          100: '#fefce8',
          200: '#fef9c3',
          300: '#fef3c7',
          400: '#fde047',
          500: '#facc15',
          600: '#eab308',
          700: '#ca8a04',
          800: '#a16207',
          900: '#854d0e',
        },
        silver: {
          50: '#f8f8f8',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        bronze: {
          50: '#fef5f0',
          100: '#fce7dc',
          200: '#f9d5c4',
          300: '#f5c9b8',
          400: '#e8a878',
          500: '#d97d63',
          600: '#b8644f',
          700: '#8d4a38',
          800: '#6b3828',
          900: '#542b1d',
        },
      },
    },
  },
  plugins: [],
}
