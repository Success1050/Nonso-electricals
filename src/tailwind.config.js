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
        cusBgCol5: "rgba(255, 255, 255, .3)",
      },

      colors: {
        cusBtnColor: "rgb(234, 88, 12, 0.8)",
        cuscolor: "#475467",
        cusCol2: "rgba(234, 88, 12, 1)",
        cusBgCol6: "#101828",
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
        cusBcolor3: "rgba(71, 84, 103, .3)",
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
        cuspl2: "20px",
        custop3: "28%",
        custop4: "45%",
        custop5: "20%",
        cuspd4: "30px 30px 20px",
        cuspd5: "6px 10px",
        cusgap3: "15px",
        cuspd6: "10px",
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
        cusWidth12: "370px",
        cusWidth13: "42px",
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
        cusheight7: "42px",
        cusheight8: "2px",
        cusheight9: "500px",
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
        cusmd2: "818px",
        cuslg2: "750px",
        cuslg3: "1221px",
        cuslg4: "1198px",
        cuslg5: "1000px",
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
        cusFontSize11: "56px",
        cusFontSize12: "30px",
        cusFontSize13: "4rem",
      },
      fontFamily: {
        cusFontFamily: " 'Kaushan Script', cursive",
        cusFontFamily2: "inter , sans-serif",
      },

      flexBasis: {
        cusBasis: "47%",
        cusBasis2: "45%",
        cusBasis3: "35%",
        cusBasis4: "60%",
        cusBasis5: "32%",
        cusBasis6: "32%",
        cusBasis7: "33%",
        cusBasis8: "48%",
        cusBasis9: "40%",
        cusBasis10: "50%",
      },

      translate: {
        custranslateX: "-50%",
        custranslateY: "-50%",
      },

      gridTemplateColumns: {
        cusgridcul: "60% 25%",
        cusgridcul2: "1/ -1",
        cusgridcul3: "1px",
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
