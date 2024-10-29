/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightgreen: "#84cc16",
      lightblue: "#6439FF",
      darkblue: "#478CCF",
      lightpink: "#ffc13c",
      grey: "#E4E0E1",
      skyblue:"#BFECFF",
      darkgreen: "#399918",
      brown: "#EC8305",
      white:"#FEF9F2",
      gray: {
        600: '#4B5563',
        800: '#1F2937'
      },
      yellow: {
        500: '#EAB308',
      },
      black:'#000000',
      pink: {
        500: '#ec4899'
      }
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #84cc16, #6439FF, #ffc13c)',
        fontFamily: {
          custom: ["Anta", "sans-serif"], 
        },
        'background':"url('./background_login.jpg')",
      },
    },
  },
  plugins: [],
};
