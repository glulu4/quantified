/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


export const defaultGraphColors = [
  {colorLabel: 'Purple', colorValue: '#6231ff'},
  {colorLabel: 'Orange', colorValue: '#f2a93b'},
  {colorLabel: 'Red Orange', colorValue: '#f27b3b'},
  {colorLabel: 'Yellow', colorValue: '#f2d13b'},
  {colorLabel: 'Mint Green', colorValue: '#3bf2a9'},
  {colorLabel: 'Blue', colorValue: '#3b6ef2'},
  {colorLabel: 'Lavender', colorValue: '#B191FF'},
];

export type GraphColor = typeof defaultGraphColors[number];

export const defaultPieGraphColors = [
  {colorLabel: 'Aqua/Turquoise', colorValue: '#93FCF8'},
  {colorLabel: 'Lavender', colorValue: '#BDB2FA'},
  {colorLabel: 'Soft Pink', colorValue: '#FFA5BA'},
  {colorLabel: 'Sky Blue', colorValue: '#009FFF'},
  {colorLabel: 'Coral Pink', colorValue: '#FF7F97'},
  {colorLabel: 'Teal', colorValue: '#3BE9DE'},
  {colorLabel: 'Violet', colorValue: '#8F80F3'},
  {colorLabel: 'Deep Blue', colorValue: '#006DFF'},
  {colorLabel: 'Warm Yellow', colorValue: '#FFC75F'},
  {colorLabel: 'Orange', colorValue: '#F28E2B'},
];


export const Colors = {
  primary: "#0E86D4",
  red: "red",
  green: "#22c55e",
  warning: "#f43f5e",
  cardBlue: "#bae6fd",
  cardPink: "#f5d0fe",

  light: {



    red: 'rgb(255, 59, 48)',
    orange: 'rgb(255, 149, 0)',
    yellow: 'rgb(255, 204, 0)',
    green: 'rgb(52, 199, 89)',
    mint: 'rgb(0, 199, 190)',
    teal: 'rgb(48, 176, 199)',
    cyan: 'rgb(50, 173, 230)',
    blue: 'rgb(0, 122, 255)',
    indigo: 'rgb(88, 86, 214)',
    purple: 'rgb(175, 82, 222)',
    pink: 'rgb(255, 45, 85)',
    brown: 'rgb(162, 132, 94)',
    black: "#000000",

    bgPrimary: "#FFFFFF",
    bgSecondary: "rgba(242, 242, 247, 1)",
    bgTertiary: "#FFFFFF",

    systemGray: 'rgb(142, 142, 147)',
    systemGray2: 'rgb(174, 174, 178)',
    systemGray3: 'rgb(199, 199, 204)',
    systemGray4: 'rgb(209, 209, 214)',
    systemGray5: 'rgb(229, 229, 234)',
    systemGray6: 'rgb(242, 242, 247)',

    labelPrimary: 'rgba(0, 0, 0, 1)',
    labelSecondary: 'rgba(60, 60, 67, 0.6)',
    labelTertiary: 'rgba(60, 60, 67, 0.3)',
    labelQuaternary: 'rgba(60, 60, 67, 0.18)',


    seperatorOpaque: 'rgba(198, 198, 200, 1)',
    seperator: 'rgba(84, 84, 86, 0.34)',

    primaryFill: "rgba(120, 120, 128, 0.2)",
    secondaryFill: "rgba(120, 120, 128, 0.16)",
    tertiaryFill: "rgba(120, 120, 128, 0.12)",
    quaternaryFill: "rgba(120, 120, 128, 0.08)",


  },
  // rendered during dark mode
  dark: {


    red: 'rgb(255, 69, 58)',
    orange: 'rgb(255, 159, 10)',
    yellow: 'rgb(255, 214, 10)',
    green: 'rgb(48, 209, 88)',
    mint: 'rgb(99, 230, 226)',
    teal: 'rgb(64, 224, 208)',
    cyan: 'rgb(100, 210, 255)',
    blue: 'rgb(10, 132, 255)',
    indigo: 'rgb(94, 92, 230)',
    purple: 'rgb(191, 90, 242)',
    pink: 'rgb(255, 55, 95)',
    brown: 'rgb(172, 142, 104)',
    black: "#000000",

    systemGray: 'rgb(142, 142, 147)',
    systemGray2: 'rgb(99, 99, 102)',
    systemGray3: 'rgb(72, 72, 74)',
    systemGray4: 'rgb(58, 58, 60)',
    systemGray5: 'rgb(44, 44, 46)',
    systemGray6: 'rgb(28, 28, 30)',

    // from bottom row of sytem background colors from figma
    bgPrimary: 'rgba(0, 0, 0, 1)',
    bgSecondary: 'rgba(28, 28, 30, 1)',
    bgTertiary: 'rgba(44, 44, 46, 1)',

    labelPrimary: 'rgba(255, 255, 255, 1)',
    labelSecondary: 'rgba(235, 235, 245, 0.6)',
    labelTertiary: 'rgba(235, 235, 245, 0.3)',
    labelQuaternary: 'rgba(235, 235, 245, 0.16)',


    seperatorOpaque: 'rgba(56, 56, 58, 1)',
    seperator: 'rgba(84, 84, 86, 0.6)',

    primaryFill: "rgba(120, 120, 128, 0.36)",
    secondaryFill: "rgba(120, 120, 128, 0.32)",
    tertiaryFill: "rgba(120, 120, 128, 0.24)",
    quaternaryFill: "rgba(120, 120, 128, 0.18)",

    tintedButtonFill: "rgba(0, 122, 255, 0.15)",


  },
};
