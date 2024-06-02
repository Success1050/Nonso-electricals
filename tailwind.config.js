/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0 0 10px rgba(16, 24, 40, .18)",
      },

      backgroundColor: {
        bgColor1: "rgba(44, 29, 24, 0.8)",
        cusBgCol: "rgba(234, 88, 12, 1)",
        cusBgCol2: "rgba(234, 88, 12, 0.3)",
        cusBgCol3: "rgba(32, 26, 26, 0.7)",
        cusBgCol4: "#101828",
      },

      colors: {
        cusBtnColor: "rgb(234, 88, 12, 0.8)",
      },

      backdropBlur: {
        blurCustom: "15px",
      },

      borderWidth: {
        cusBwidth: "1px",
      },

      borderRadius: {
        cusBradius: "50%",
        cusBradius2: "6px",
        cusBradius3: "50px",
      },

      borderColor: {
        cusBcolor: "rgba(234, 88, 12, 0.7)",
        cusBcolor2: "rgba(71, 84, 103, .4)",
      },

      spacing: {
        cusPd: "20px 60px",
        cusPt: "50px",
        cusTop: "0",
        cusTop2: "-27px",
        cusRight: "-17px",
        cusLeft: "-500px",
        cuspl: "0.9rem",
        cusgap: "1.2rem",
        cusgap2: "1.5rem",
        cusmr: "0.9rem",
        cuspd2: "0.6rem",
        cusm: "8px auto",
        cusmr2: "0.9rem",
        cusmx: "0.98rem",
        cuslineheight: "1.1em",
        cusp1: "30px",
        cusmb: "30px",
        custop3: "28%",
        custop4: "45%",
        custop5: "20%",
        cusmb2: "30px",
      },

      lineHeight: {
        cuslineheight: "50px",
        cuslineheight2: "22px",
      },

      boxShadowColor: {
        boxShadowColor: {
          cusshadow: " 0 0 10px rgba(16, 24, 40, .18);",
        },
      },

      width: {
        cusWidth: "250px",
        cusWidth2: "20px",
        cusWidth3: "80%",
        cusWidth5: "70%",
        cusWidth4: "90%",
        cusWidth6: "60%",
        cusWidth7: "85%",
        cusWidth8: "36px",
        cusWidth9: "100vw",
        cusWidth10: "45px",
        cusWidth11: "50vw",
      },

      maxWidth: {
        cusmaxwidth: "70%",
        cusmaxwidth2: "70%",
      },

      height: {
        cusHeight: "3.5rem",
        cusHeight2: "20px",
        cusHeight3: "10px",
        cusHeight4: "36px",
        cusHeight5: "45px",
        cusHeight6: "40vh",
      },

      zIndex: {
        zCus: "3",
      },
      screens: {
        cusLg: "987px",
        custom: "1030px",
        cussm: "300px",
        cussm: "300px",
        cussmall: "450px",
        cusmd: "840px",
      },
      transitionProperty: {
        custom: "all",
      },

      transitionDuration: {
        cusDuration: "0.5s",
      },

      fontSize: {
        cusFontSize: "1.2rem",
        cusFontSize2: "13px",
        cusFontSize3: "14px",
        cusFontSize4: "16px",
        cusfontsize5: "1.6rem",
        cusFontSiz6: "1.3rem",
        cusFontSiz7: "40px",
        cusFontSize8: "18px",
        cusFontSize9: "20px",
        cusFontSize10: "34px",
      },
      fontFamily: {
        cusFontFamily: " 'Kaushan Script', cursive",
        cusFontFamily2: "inter , sans-serif",
      },

      flexBasis: {
        cusBasis: "47%",
        cusBasis2: "45%",
      },

      translate: {
        custranslateX: "-50%",
        custranslateY: "-50%",
      },

      animation: {
        straight: "straight 1s cubic-bezier(1,0,0.5,1) forwards",
        showtext: "showtext 0.5s 1s linear forwards",
      },

      keyframes: {
        showtext: " '0%, 100%': { opacity: '1' } ",
        straight: " '100%': { transform: 'scale(1)' },",
      },
    },
  },
  plugins: [],
};
