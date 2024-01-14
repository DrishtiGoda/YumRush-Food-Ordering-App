/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];

export const theme = {
  extend: {
    colors: {
      orange: "rgba(245, 131, 58, 1)",
      pink: "rgba(238, 59, 101, 1)",
    },
    fontFamily: {
      sans: ["Gill Sans"],
    },
  },
};
export const plugins = [];
