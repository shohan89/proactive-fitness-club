/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#e29e2f",
                  
          "secondary": "#215484",
                  
          "accent": "#0319bf",
                  
          "neutral": "#252932",
                  
          "base-100": "#F0EDF2",
                  
          "info": "#30A2E8",
                  
          "success": "#168840",
                  
          "warning": "#FBA94B",
                  
          "error": "#EC4E3C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

