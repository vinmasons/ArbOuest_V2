import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import form from '@tailwindcss/forms';

export default {
  content: ['./app/**/*.{ts,tsx}', './sanity/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-degular)'],
      },
      colors: {
        'arb-green': '#79B892',
        'deep-green': '#014E42',
        'vib-orange': '#F0562D',
        'deep-burg': '#1D0F1B',
        'soft-cream': '#FFF5ED',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      button: {
        base: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arbouest-green',
        primary: 'bg-arbouest-green text-white hover:bg-deep-green',
        secondary: 'bg-soft-cream text-deep-burgundy hover:bg-vibrant-orange',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, form],
} satisfies Config;
