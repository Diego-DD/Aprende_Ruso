import Tabla_Declinaciones from "../components/Tabla_Declinaciones";

export default function Tabla_Declinaciones_Test() {
  const datos = {
    nom: {
      masc: "nm",
      fem: "nf",
      neu: "nn",
      plu: "np",
    },
    gen: {
      masc: "gm",
      fem: "gf",
      neu: "gn",
      plu: "gp",
    },
    dat: {
      masc: "dm",
      fem: "df",
      neu: "dn",
      plu: "dp",
    },
    acu: {
      an: {
        masc: "aam",
        fem: "aaf",
        neu: "aan",
        plu: "aap",
      },
      in: {
        masc: "aim",
        fem: "aif",
        neu: "ain",
        plu: "aip",
      },
    },
    inst: {
      masc: "im",
      fem: "if",
      neu: "in",
      plu: "ip",
    },
    prep: {
      masc: "pm",
      fem: "pf",
      neu: "pn",
      plu: "pp",
    },
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      <Tabla_Declinaciones datos={datos} tipo={0} />
      <Tabla_Declinaciones datos={datos} tipo={1} titulo="Título" />
      <Tabla_Declinaciones
        datos={datos}
        tipo={2}
        titulo="Título"
        casos={false}
      />
      <Tabla_Declinaciones datos={datos} casos={false} />
    </div>
  );
}
