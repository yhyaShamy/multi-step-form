/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        danger: "hsl(354, 84%, 57%)",
        "primary-900": "hsl(213, 96%, 18%)",
        "primary-800": "hsl(243, 100%, 62%)",

        "primary-500": "hsl(228, 100%, 84%)",
        "primary-400": "hsl(206, 94%, 87%)",
        "secondary-900": "hsl(231, 11%, 63%)",
        "secondary-800": "hsl(229, 24%, 87%)",
        "secondary-700": "hsl(217, 100%, 97%)",
        "secondary-500": "hsl(231, 100%, 99%)",
      },
    },
    backgroundImage: {
      "sideBar-desktop": "url('/public/bg-sidebar-desktop.svg')",
      "sideBar-mobile": "url('/public/bg-sidebar-mobile.svg')",
    },
  },
  plugins: [],
};
