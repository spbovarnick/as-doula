import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        libre_baskerville: ["var(--font-libre-baskerville)"]
      },
      colors: {
        "blueOne": "#8DA1B9",
        "blueTwo": "#95ADB6",
        "thistle": "#CBB3BF",
        "dogwood": "#DBC7BE",
        "sheenGold": "#B39C4D",
        "mossGreen": "#768948",
        "fernGreen": "#607744",
        "hunterGreen": "#34623F",
        "egshellOne": "#FFFBF0",
        "eggshellTwo": "#F0EAD6",
      }
    },
  },
  plugins: [],
};
export default config;
