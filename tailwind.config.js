/** @type {import('tailwindcss').Config} */
module.exports = {
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
        transparent: 'transparent',
        currentColor: 'currentColor',
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          'orange-yellow': 'hsl(39, 100%, 56%)',
          'green-teal': 'hsl(166, 100%, 37%)',
          'cobalt-blue': 'hsl(234, 85%, 45%)'
        },
        gradients: {
          'slate-blue': 'hsl(252, 100%, 67%)',
          'royal-blue': 'hsl(241, 81%, 54%)',
          'violet-blue': 'hsla(256, 72%, 46%, 1)',
          'persian-blue': 'hsla(241, 72%, 46%, 0)'
        },
        neutral : {
          'white': 'hsl(0, 0%, 100%)',
          'pale-blue': 'hsl(221, 100%, 96%)',
          'light-lavender': 'hsl(241, 100%, 89%)',
          'dark-gray-blue': 'hsl(224, 30%, 27%)'
        }
      }
    },
  },
  plugins: [],
}
