/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bookerly: ["Regular"],
        BookerlyItalic: ["Italic"],
        BookerlyBold: ["Bold"],
        BookerlyBoldItalic: ["BoldItalic"],
        RussianSpring: ["RussSpr_Regular"],
        RussianSpringItalic: ["RussSpr_Italic"],
        RussianSpringBold: ["RussSpr_Bold"],
        RussianSpringBoldItalic: ["RussSpr_BoldItalic"],
        RussianSpringShadow: ["RussSprSh_Regular"],
        RussianSpringItalicShadow: ["RussSprSh_Italic"],
      },
      colors: {
        singular: {
          primario: {
            claro: "#FFC84D",
            base: "#BF8F00",
            oscuro: "#806000",
          },
          secundario: {
            claro: "#FFE599",
            base: "#FFD765",
            oscuro: "#CCAB52",
          },
        },
        plural: {
          primario: {
            claro: "#FFFF99",
            base: "#FFFF00",
            oscuro: "#CCCC00",
          },
          secundario: {
            claro: "#FFFFCC",
            base: "#FFFF9B",
            oscuro: "#E3E3A6",
          },
        },
        masculino: {
          primario: {
            claro: "#66CCFF",
            base: "#00B0F0",
            oscuro: "#0073A8",
          },
          secundario: {
            claro: "#E3F8FF",
            base: "#B7ECFF",
            oscuro: "#8AD0E3",
          },
        },
        femenino: {
          primario: {
            claro: "#FF99DD",
            base: "#FF66CC",
            oscuro: "#CC3399",
          },
          secundario: {
            claro: "#FFE5F0",
            base: "#FFBDE9",
            oscuro: "#F99BCF",
          },
        },
        neutro: {
          primario: {
            claro: "#66FF66",
            base: "#00FF00",
            oscuro: "#00CC00",
          },
          secundario: {
            claro: "#C4FFC4",
            base: "#9BFF9B",
            oscuro: "#A0E09F",
          },
        },
        nominativo: {
          primario: {
            claro: "#4A6A8A",
            base: "#1F3864",
            oscuro: "#001A33",
          },
          secundario: {
            claro: "#D0D9F1",
            base: "#B4C6E7",
            oscuro: "#8A9AC2",
          },
          terciario: {
            claro: "#E7EAF9",
            base: "#D9E2F3",
            oscuro: "#B0BFD9",
          },
        },
        genitivo: {
          primario: {
            claro: "#FF66B2",
            base: "#FF3399",
            oscuro: "#CC0066",
          },
          secundario: {
            claro: "#FFE3EB",
            base: "#FFBDDE",
            oscuro: "#FF8FB3",
          },
        },
        dativo: {
          primario: {
            claro: "#FF9933",
            base: "#FF6600",
            oscuro: "#CC5200",
          },
          secundario: {
            claro: "#FFE5D4",
            base: "#FFCFAF",
            oscuro: "#FFB29F",
          },
        },
        acusativo: {
          primario: {
            claro: "#9A66CC",
            base: "#7030A0",
            oscuro: "#4C0072",
          },
          secundario: {
            claro: "#B89BFF",
            base: "#9954CC",
            oscuro: "#6D2A99",
          },
          terciario: {
            claro: "#E4D9F4",
            base: "#D5B8EA",
            oscuro: "#A87EC6",
          },
        },
        instrumental: {
          primario: {
            claro: "#FFE066",
            base: "#FFC000",
            oscuro: "#FF9900",
          },
          secundario: {
            claro: "#FFF3D0",
            base: "#FFEAA7",
            oscuro: "#FFD18F",
          },
        },
        preposicional: {
          primario: {
            claro: "#33D078",
            base: "#00B050",
            oscuro: "#00843F",
          },
          secundario: {
            claro: "#A3FFD5",
            base: "#7DFFB8",
            oscuro: "#4ACF8F",
          },
        },
        verbos: {
          primario: {
            claro: "#FF6666",
            base: "#C00000",
            oscuro: "#800000",
          },
          secundario: {
            claro: "#FFB3B3",
            base: "#FF8181",
            oscuro: "#CC6666",
          },
        },
        celeste: {
          encabezado: {
            claro: "#8AB7E2",
            base: "#5B9BD5",
            oscuro: "#2A5B9A",
          },
          pregunta: {
            claro: "#66C2F2",
            base: "#00B0F0",
            oscuro: "#0083C0",
          },
        },
        imperfectivo: {
          primario: {
            claro: "#CC66FF",
            base: "#9900FF",
            oscuro: "#6600CC",
          },
          secundario: {
            claro: "#D3A3FF",
            base: "#C46DFF",
            oscuro: "#9B3CFF",
          },
        },
        perfectivo: {
          primario: {
            claro: "#8D4BB3",
            base: "#70309F",
            oscuro: "#4B0074",
          },
          secundario: {
            claro: "#B67FE2",
            base: "#9F5FCF",
            oscuro: "#7C2F9F",
          },
          terciario: {
            claro: "#B3A3FF",
            base: "#9966FF",
            oscuro: "#6640CC",
          },
        },
        frases: {
          primario: {
            claro: "#66CC66",
            base: "#339933",
            oscuro: "#006622",
          },
          secundario: {
            claro: "#D0FF6F",
            base: "#B0FF2F",
            oscuro: "#8DCC1F",
          },
          terciario: {
            claro: "#F0FFCF",
            base: "#E4FFB7",
            oscuro: "#C6E89F",
          },
          cuaternario: {
            claro: "#F7FFE8",
            base: "#F2FFDD",
            oscuro: "#D9F7B9",
          },
        },
        rojo_intenso: "#FF0000",
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.55rem",
        "4xs": "0.45rem",
        "5xs": "0.35rem",
        "6xs": "0.25rem",
        "7xs": "0.15rem",
        "8xs": "0.05rem",
      },
    },
  },
  plugins: [],
};
