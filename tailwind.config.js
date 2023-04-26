

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    "sans": ['Poppins', 'system-ui'],
  },
  extend: {
    colors: {
      "whitePrime" : "#fff",
      "btn-color"  : "#6366f1",
      "lightGray" : "#d1d5db",
      "darkGray" : "#64748b"
    },
  },
};
export const plugins = [];


