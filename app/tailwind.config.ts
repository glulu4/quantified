/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind");

module.exports = {
  // presets: [nativewind],
  presets: [require("nativewind/preset")],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        tintedBlue: "rgba(0, 122, 255, 0.15)",
        red: {
          light: 'rgb(255, 59, 48)',
          dark: 'rgb(255, 69, 58)',
        },
        orange: {
          light: 'rgb(255, 149, 0)',
          dark: 'rgb(255, 159, 10)',
        },
        yellow: {
          light: 'rgb(255, 204, 0)',
          dark: 'rgb(255, 214, 10)',
        },
        green: {
          light: 'rgb(52, 199, 89)',
          dark: 'rgb(48, 209, 88)',
        },
        mint: {
          light: 'rgb(0, 199, 190)',
          dark: 'rgb(99, 230, 226)',
        },
        teal: {
          light: 'rgb(48, 176, 199)',
          dark: 'rgb(64, 224, 208)',
        },
        cyan: {
          light: 'rgb(50, 173, 230)',
          dark: 'rgb(100, 210, 255)',
        },
        blue: {
          light: 'rgb(0, 122, 255)',
          dark: 'rgb(10, 132, 255)',
        },
        indigo: {
          light: 'rgb(88, 86, 214)',
          dark: 'rgb(94, 92, 230)',
        },
        purple: {
          light: 'rgb(175, 82, 222)',
          dark: 'rgb(191, 90, 242)',
        },
        pink: {
          light: 'rgb(255, 45, 85)',
          dark: 'rgb(255, 55, 95)',
        },
        brown: {
          light: 'rgb(162, 132, 94)',
          dark: 'rgb(172, 142, 104)',
        },

        // Background Colors
        bgPrimary: {
          light: '#FFFFFF',
          dark: 'rgba(0, 0, 0, 1)', //'rgba(28, 28, 30, 1)',
        },
        bgSecondary: {
          light: "rgba(242, 242, 247, 1)", //'#F2F2F7',
          dark: 'rgba(28, 28, 30, 1)',
        },
        bgTertiary: {
          light: '#FFFFFF',
          dark: 'rgba(44, 44, 46, 1)',
        },

        // System Grays
        systemGray: {
          light: 'rgb(142, 142, 147)',
          dark: 'rgb(142, 142, 147)',
        },
        systemGray2: {
          light: 'rgb(174, 174, 178)',
          dark: 'rgb(99, 99, 102)',
        },
        systemGray3: {
          light: 'rgb(199, 199, 204)',
          dark: 'rgb(72, 72, 74)',
        },
        systemGray4: {
          light: 'rgb(209, 209, 214)',
          dark: 'rgb(58, 58, 60)',
        },
        systemGray5: {
          light: 'rgb(229, 229, 234)',
          dark: 'rgb(44, 44, 46)',
        },
        systemGray6: {
          light: 'rgb(242, 242, 247)',
          dark: 'rgb(28, 28, 30)',
        },

        // Labels
        labelPrimary: {
          light: 'rgba(0, 0, 0, 1)',
          dark: 'rgba(255, 255, 255, 1)',
        },
        labelSecondary: {
          light: 'rgba(60, 60, 67, 0.6)',
          dark: 'rgba(235, 235, 245, 0.6)',
        },
        labelTertiary: {
          light: 'rgba(60, 60, 67, 0.3)',
          dark: 'rgba(235, 235, 245, 0.3)',
        },
        labelQuaternary: {
          light: 'rgba(60, 60, 67, 0.18)',
          dark: 'rgba(235, 235, 245, 0.16)',
        },

        // Separators
        separatorOpaque: {
          light: 'rgba(198, 198, 200, 1)',
          dark: 'rgba(56, 56, 58, 1)',
        },
        separator: {
          light: 'rgba(84, 84, 86, 0.34)',
          dark: 'rgba(84, 84, 86, 0.6)',
        },

        // Fills
        primaryFill: {
          light: 'rgba(120, 120, 128, 0.2)',
          dark: 'rgba(120, 120, 128, 0.36)',
        },
        secondaryFill: {
          light: 'rgba(120, 120, 128, 0.16)',
          dark: 'rgba(120, 120, 128, 0.32)',
        },
        tertiaryFill: {
          light: 'rgba(120, 120, 128, 0.12)',
          dark: 'rgba(120, 120, 128, 0.24)',
        },
        quaternaryFill: {
          light: 'rgba(120, 120, 128, 0.08)',
          dark: 'rgba(120, 120, 128, 0.18)',
        },

        // Buttons
        tintedButtonFill: {
          light: 'rgba(0, 122, 255, 0.15)',
          dark: 'rgba(0, 122, 255, 0.15)',
        },
      },
    },
  },
  plugins: [],
};
