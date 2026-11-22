/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#070B18',
          secondary: '#0D1428',
          elevated: '#121B35',
          card: 'rgba(13, 20, 40, 0.75)',
        },
        navy: {
          950: '#070B18',
          900: '#0D1428',
          850: '#121B35',
          800: '#172242',
          700: '#1F2E59',
          600: '#2A3C72',
        },
        electric: {
          DEFAULT: '#398BFF',
          blue: '#398BFF',
          cyan: '#00F0FF',
          glow: '#38BDF8',
          deep: '#1D4ED8',
        },
        cyber: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          neon: '#C084FC',
          deep: '#6D28D9',
        },
        slateText: {
          primary: '#F8FAFC',
          secondary: '#A7B1C5',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Tamil', 'Noto Sans Sinhala', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -4px rgba(57, 139, 255, 0.35)',
        'glow-cyan': '0 0 25px -4px rgba(0, 240, 255, 0.35)',
        'glow-purple': '0 0 25px -4px rgba(139, 92, 246, 0.35)',
        'glow-dual': '0 0 35px -5px rgba(57, 139, 255, 0.25), 0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'futuristic-grid': 'linear-gradient(to right, rgba(57, 139, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(57, 139, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-rev 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
};
