

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    "sans": ['Poppins', 'system-ui'],
  },
  extend: {
    colors: {
      "primaryPurple": "#646ff0",
      "list-bg": "#fff",
      "list-box-bg": "#ecedf6",
      "filter-bg": "#cccdde",
      "heading" : "#646681",
      "btn-hover" : "hsl(235, 90%, 65%)"
    },
  },
};
export const plugins = [];


/* 
font-family: 'DM Sans', sans-serif;
font-family: 'Signika Negative', sans-serif;
*/



/*
  --primaryPurple: #646ff0;
  --list-bg: #fff;
  --list-box-bg: #ecedf6;
  --filter-bg: #cccdde;

    // --black-1: #646681;
    --black-2: #585858;
    --bg-1: #f8f8ff;
    --gray-1: #eee;
    --gray-2: #dedfe1;
}

*/
