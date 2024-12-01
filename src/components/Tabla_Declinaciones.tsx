import Celda from "./Celda";

// Definición de los géneros y números principales.

interface Generos_Numero {
  masc: string;
  fem: string;
  neu: string;
  plu: string;
}

// Definición de la estructura del caso acusativo.

interface Acusativo {
  an: Generos_Numero;
  in: Generos_Numero;
}

// Definición de la estructura general para los casos.

interface Casos {
  nom: Generos_Numero;
  gen: Generos_Numero;
  dat: Generos_Numero;
  acu: Acusativo; // Estructura especial para el acusativo
  inst: Generos_Numero;
  prep: Generos_Numero;
}

interface Tabla_DeclinacionesProps {
  tipo?: number; // Tipo de tabla: 0, 1 o 2
  casos?: boolean; // Mostrar la columna de casos.
  titulo?: string; // Agregar título a la tabla.
  color_titulo?: string; // Color de fondo del título.
  datos?: Casos; // JSON con los datos de la tabla.
}

function Tabla_Declinaciones({
  tipo = 0,
  casos = true,
  titulo = "",
  color_titulo = "bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95%",
  datos = {
    nom: { masc: "", fem: "", neu: "", plu: "" },
    gen: { masc: "", fem: "", neu: "", plu: "" },
    dat: { masc: "", fem: "", neu: "", plu: "" },
    acu: {
      an: { masc: "", fem: "", neu: "", plu: "" },
      in: { masc: "", fem: "", neu: "", plu: "" },
    },
    inst: { masc: "", fem: "", neu: "", plu: "" },
    prep: { masc: "", fem: "", neu: "", plu: "" },
  },
}: Tabla_DeclinacionesProps) {
  const fuente_titulo = "font-BookerlyBold text-lg text-white";
  const caso_genero = `row-span-2 bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95% ${!titulo && "rounded-tl-3xl"} ${fuente_titulo}`;
  const numero: { [key: string]: string } = {
    singular: `col-span-3 bg-gradient-to-b from-singular-primario-claro from-5% via-singular-primario-base to-singular-primario-oscuro to-95% ${fuente_titulo}`,
    plural: `row-span-2 bg-gradient-to-b from-plural-primario-claro from-5% via-plural-primario-base to-plural-primario-oscuro to-95% ${!titulo && "rounded-tr-3xl"} ${fuente_titulo}`,
  };
  const genero: { [key: string]: string } = {
    masculino: `bg-gradient-to-b from-masculino-primario-claro from-5% via-masculino-primario-base to-masculino-primario-oscuro to-95% ${fuente_titulo}`,
    femenino: `bg-gradient-to-b from-femenino-primario-claro from-5% via-femenino-primario-base to-femenino-primario-oscuro to-95% ${fuente_titulo}`,
    neutro: `bg-gradient-to-b from-neutro-primario-claro from-5% via-neutro-primario-base to-neutro-primario-oscuro to-95% ${fuente_titulo}`,
  };
  const caso: { [key: string]: string } = {
    nominativo: `bg-gradient-to-b from-nominativo-primario-claro from-5% via-nominativo-primario-base to-nominativo-primario-oscuro to-95% ${fuente_titulo}`,
    genitivo: `bg-gradient-to-b from-genitivo-primario-claro from-5% via-genitivo-primario-base to-genitivo-primario-oscuro to-95% ${fuente_titulo}`,
    dativo: `bg-gradient-to-b from-dativo-primario-claro from-5% via-dativo-primario-base to-dativo-primario-oscuro to-95% ${fuente_titulo}`,
    acusativo: `bg-gradient-to-b from-acusativo-primario-claro from-5% via-acusativo-primario-base to-acusativo-primario-oscuro to-95% font-BookerlyBold text-sm text-white`,
    acusativo_animado: `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`,
    acusativo_inanimado: `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`,
    instrumental: `bg-gradient-to-b from-instrumental-primario-claro from-5% via-instrumental-primario-base to-instrumental-primario-oscuro to-95% ${fuente_titulo}`,
    preposicional: `bg-gradient-to-b from-preposicional-primario-claro from-5% via-preposicional-primario-base to-preposicional-primario-oscuro to-95% rounded-bl-3xl ${fuente_titulo}`,
  };
  const lightened: { [key: string]: string } = {
    masculino: `bg-masculino-secundario-base`,
    femenino: `bg-femenino-secundario-base`,
    neutro: `bg-neutro-secundario-base`,
    plural: `bg-plural-secundario-base`,
  };

  return (
    <div
      className={`w-full h-full grid ${casos ? "grid-cols-5" : "grid-cols-4"}`}
    >
      {/* Título opcional de la tabla */}

      <Celda
        className={`${color_titulo} ${fuente_titulo} ${
          casos ? "col-span-5" : "col-span-4"
        } rounded-tl-3xl rounded-tr-3xl ${!titulo && "hidden"}`}
        texto={titulo}
      ></Celda>

      {/* Esquina de la tabla */}

      <Celda
        className={`${caso_genero} ${!casos && "hidden"}`}
        texto="Caso / Género"
      />

      {/* Encabezado de géneros y número */}

      <Celda
        className={`${numero["singular"]} ${!casos && !titulo && "rounded-tl-3xl"}`}
        texto="Singular"
      />
      <Celda
        className={numero["plural"]}
        texto="Plural"
        texto_2="(Todos los géneros)"
      />
      <Celda className={genero["masculino"]} texto="Masculino" />
      <Celda className={genero["femenino"]} texto="Femenino" />
      <Celda className={genero["neutro"]} texto="Neutro" />

      {/* Fila del caso nominativo */}

      <Celda
        className={`${caso["nominativo"]} ${!casos && "hidden"}`}
        texto="Nominativo"
      />
      <Celda className={lightened["masculino"]} texto={datos.nom.masc} />
      <Celda className={lightened["femenino"]} texto={datos.nom.fem} />
      <Celda className={lightened["neutro"]} texto={datos.nom.neu} />
      <Celda className={lightened["plural"]} texto={datos.nom.plu} />

      {/* Fila del caso genitivo */}

      <Celda
        className={`${caso["genitivo"]} ${!casos && "hidden"}`}
        texto="Genitivo"
      />
      <Celda className={lightened["masculino"]} texto={datos.gen.masc} />
      <Celda
        className={`${lightened["femenino"]} ${tipo == 1 && "row-span-2"}`}
        texto={datos.gen.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${tipo == 2 && "row-span-2"}`}
        texto={datos.gen.neu}
      />
      <Celda className={lightened["plural"]} texto={datos.gen.plu} />

      {/* Fila del caso dativo */}

      <Celda
        className={`${caso["dativo"]} ${!casos && "hidden"}`}
        texto="Dativo"
      />
      <Celda className={lightened["masculino"]} texto={datos.dat.masc} />
      <Celda
        className={`${lightened["femenino"]} ${!(tipo == 0 || tipo == 2) && "hidden"}`}
        texto={datos.dat.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${!(tipo == 0 || tipo == 1) && "hidden"}`}
        texto={datos.dat.neu}
      />
      <Celda className={lightened["plural"]} texto={datos.dat.plu} />

      {/* Fila del caso acusativo */}

      <div className={`row-span-2 grid grid-cols-2 ${!casos && "hidden"}`}>
        <Celda className={caso["acusativo"]} texto="Acusativo" />
        <div className="grid grid-rows-2">
          <Celda className={caso["acusativo_animado"]} texto="Animado" />
          <Celda className={caso["acusativo_inanimado"]} texto="Inanimado" />
        </div>
      </div>

      {/* Fila del caso acusativo animado */}

      <Celda className={lightened["masculino"]} texto={datos.acu.an.masc} />
      <Celda
        className={`${lightened["femenino"]} ${(tipo == 1 || tipo == 2) && "row-span-2"}`}
        texto={datos.acu.an.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${(tipo == 1 || tipo == 2) && "row-span-2"}`}
        texto={datos.acu.an.neu}
      />
      <Celda className={lightened["plural"]} texto={datos.acu.an.plu} />

      {/* Fila del caso acusativo inanimado */}

      <Celda className={lightened["masculino"]} texto={datos.acu.in.masc} />
      <Celda
        className={`${lightened["femenino"]} ${tipo != 0 && "hidden"}`}
        texto={datos.acu.in.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${tipo != 0 && "hidden"}`}
        texto={datos.acu.in.neu}
      />
      <Celda className={lightened["plural"]} texto={datos.acu.in.plu} />

      {/* Fila del caso instrumental */}

      <Celda
        className={`${caso["instrumental"]} ${!casos && "hidden"}`}
        texto="Instrumental"
      />
      <Celda className={lightened["masculino"]} texto={datos.inst.masc} />
      <Celda
        className={`${lightened["femenino"]} ${tipo == 1 && "row-span-2"}`}
        texto={datos.inst.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${tipo == 2 && "row-span-2"}`}
        texto={datos.inst.neu}
      />
      <Celda className={lightened["plural"]} texto={datos.inst.plu} />

      {/* Fila del caso preposicional */}

      <Celda
        className={`${caso["preposicional"]} ${!casos && "hidden"}`}
        texto="Preposicional"
      />
      <Celda
        className={`${lightened["masculino"]} ${!casos && "rounded-bl-3xl"}`}
        texto={datos.prep.masc}
      />
      <Celda
        className={`${lightened["femenino"]} ${!(tipo == 0 || tipo == 2) && "hidden"}`}
        texto={datos.prep.fem}
      />
      <Celda
        className={`${lightened["neutro"]} ${!(tipo == 0 || tipo == 1) && "hidden"}`}
        texto={datos.prep.neu}
      />
      <Celda
        className={`${lightened["plural"]} rounded-br-3xl`}
        texto={datos.prep.plu}
      />
    </div>
  );
}

export default Tabla_Declinaciones;
