/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    fontFamily: {
      nexa: ["Nexa", "sans"],
      commuter: ["CommuterSans", "sans"],
      lato: ["Lato", "sans"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      "mad-white": "#F2F0F0",
      gray: {
        10: "rgba(0, 0, 0, 0.4)",
        20: "#FEFEFE",
        30: "#333333",
        45: "#5C5959",
        100: "#E2E2E2",
        200: "#747474",
        300: "#484848",
        400: "#353535",
        500: "#323232",
        600: "#1D1D1D",
        "bg-dark": "#171717",
        "500-85": "rgba(23, 22, 23, .85)",
        "modal-bg": "rgb(39, 49, 56)",
        "modal-main": "rgb(199, 199, 199)",
        "modal-secondary": "rgb(136, 136, 136)",
        "modal-border": "rgba(195, 195, 195, 0.14)",
        "modal-hover": "rgb(16, 26, 32)"
      },
      indigo: colors.indigo,
      red: {
        ...colors.red,
        100: "#EE9A9A",
        200: "#E25A5A",
        300: "#D62222"
      },
      yellow: {
        ...colors.amber,
        100: "#EDF7C5",
        200: "#EEF78E",
        300: "#EDF83C",
        400: "#E5F127"
      },
      green: {
        100: "#B9E5D4",
        200: "#7DCEAD",
        300: "#036E44",
        400: "#035144"
      },
      pink: {
        10: "#F4E6F3",
        "10-a37": "rgb(244, 230, 245, 0.37)",
        30: "#D4B4D6",
        50: "#FF79C9",
        70: "#AC0167",
        80: "#E86FB7",
        "80h": "rgba(152,1,91,0.5)",
        100: "#F4E6F5"
      },
      purple: {
        100: "#F4E6F5",
        200: "#D3B4D6",
        300: "#B88BB6",
        400: "#6E416C"
      },
      blue: {
        100: "#D1F3FC",
        200: "#A9CEFB",
        300: "#1C5BA8",
        400: "#143F74"
      },
      orange: colors.orange,
      black: {
        10: "#D7D7D7",
        17: "#171717",
        20: "#202020",
        21: "#212121",
        23: "#232323",
        26: "#262626",
        ...colors.black
      },
      ".modal-container": {
        width: "calc(100% - 2.5rem)",
        100: "#EE9A9A"
      }
    },
    screens: {
      xs: "475px",
      "8xl": "90rem",
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        "fade-gray-500": "linear-gradient(180deg, rgba(23, 22, 23, 0.0) 0%, rgba(23, 22, 23, 1.0) 79.76%)",
        button: "url('./assets/button.svg')"
      },
      zIndex: {
        "-10": "-10",
        1: "1",
        2: "2",
        999: "999",
        1100: "1100"
      },
      gridTemplateColumns: {
        modal: "repeat(auto-fit, minmax(320px, 1fr))",
        "icon-tab": "26px auto",
        "modal-mobile": "1fr"
      },
      width: {
        "48/100": "48%",
        100: "25rem",
        144: "36rem",
        192: "48rem",
        240: "60rem",
        "fit-content": "fit-content",
        "profile-w": "calc(100% - 14rem)"
      },
      maxWidth: {
        "95/100": "95%",
        100: "25rem"
      },
      rotate: {
        15: "15deg",
        "-15": "-15deg",
        10: "10deg",
        "-10": "-10deg",
        5: "5deg",
        "-5": "-5deg"
      }
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      navbar: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      adbanner: "0.5rem 0.5rem #AAD2C2",
      daobanner: "0 10px 15px -3px rgba(229, 241, 39, 0.1), 0 4px 6px -2px rgba(229, 241, 39, 0.3)",
      aucbanner: "-1.5rem 1.5rem #D4B4D6"
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      15: "15px",
      12: "12px",
      8: "8px",
      Heading1: [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0px"
        }
      ],
      Heading2: [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0px"
        }
      ],
      Heading3: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "0px"
        }
      ],
      Body: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0px"
        }
      ],
      "Body-Bold": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0px"
        }
      ],
      Caption: [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "0px"
        }
      ]
    },
    minHeight: {
      72: "18rem",
      100: "25rem",
      ...defaultTheme.minHeight
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "active", "hover"],
      borderColor: ["checked"]
    }
  },
  plugins: []
};
