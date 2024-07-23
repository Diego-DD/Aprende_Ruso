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
      },
      colors: {
        singular: {
          primary: "#BF8F00",
          secondary: "#FFD765",
        },
        plural: {
          primary: "#FFFF00",
          secondary: "#FFFF9B",
        },
        masculino: {
          primary: "#00B0F0",
          secondary: "#B7ECFF",
        },
        femenino: {
          primary: "#FF66CC",
          secondary: "#FFBDE9",
        },
        neutro: {
          primary: "#00FF00",
          secondary: "#9BFF9B",
        },
        nominativo: {
          primary: "#1F3864",
          secondary: "#B4C6E7",
          tertiary: "#D9E2F3",
        },
        genitivo: {
          primary: "#FF3399",
          secondary: "#FFBDDE",
        },
        dativo: {
          primary: "#FF6600",
          secondary: "#FFCFAF",
        },
        acusativo: {
          primary: "#7030A0",
          secondary: "#9954CC",
          tertiary: "#D5B8EA",
        },
        instrumental: {
          primary: "#FFC000",
          secondary: "#FFEAA7",
        },
        preposicional: {
          primary: "#00B050",
          secondary: "#7DFFB8",
        },
        verbos: {
          primary: "#C00000",
          secondary: "#FF8181",
        },
        celeste: {
          encabezado: "#5B9BD5",
          pregunta: "#00B0F0",
        },
        imperfectivo: {
          primary: "#9900FF",
          secondary: "#C46DFF",
        },
        perfectivo: {
          primary: "#70309F",
          secondary: "#9F5FCF",
          tertiary: "#9966FF",
        },
        frases: {
          primary: "#339933",
          secondary: "#B0FF2F",
          tertiary: "#E4FFB7",
          cuaternario: "#F2FFDD",
        },
      },
    },
  },
  plugins: [],
};
