/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url(../../src/assets/images/bannerBg.png)",
        "custom-image2": "url(../../src/assets/images/about.png)",
        "custom-image3": "url(../../src/assets/images/resourch.png)",
        "custom-image4": "url(../../src/assets/images/BI.png)",
      },
      boxShadow: {
        "custom-green": "0 4px 18px rgba(61, 107, 255, 1)",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "#0037EB",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#fff",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
