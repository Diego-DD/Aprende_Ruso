import Celda from "./Celda";

interface Tabla_DeclinacionesProps {
  tipo?: number;
  casos?: boolean;
  titulo?: string;
  color_titulo?: string;
  datos?: unknown;
}

function Tabla_Declinaciones({
  tipo = 0,
  casos = true,
  titulo = "",
  color_titulo = "bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95%",
  datos = "",
}: Tabla_DeclinacionesProps) {
  const fuente_titulo = "font-BookerlyBold text-lg text-white";
  const caso_genero = `row-span-2 bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95% ${fuente_titulo}`;
  const singular = `col-span-3 bg-gradient-to-b from-singular-primario-claro from-5% via-singular-primario-base to-singular-primario-oscuro to-95% ${fuente_titulo}`;
  const masculino = `bg-gradient-to-b from-masculino-primario-claro from-5% via-masculino-primario-base to-masculino-primario-oscuro to-95% ${fuente_titulo}`;
  const femenino = `bg-gradient-to-b from-femenino-primario-claro from-5% via-femenino-primario-base to-femenino-primario-oscuro to-95% ${fuente_titulo}`;
  const neutro = `bg-gradient-to-b from-neutro-primario-claro from-5% via-neutro-primario-base to-neutro-primario-oscuro to-95% ${fuente_titulo}`;
  const plural = `bg-gradient-to-b from-plural-primario-claro from-5% via-plural-primario-base to-plural-primario-oscuro to-95% ${fuente_titulo}`;
  const nominativo = `bg-gradient-to-b from-nominativo-primario-claro from-5% via-nominativo-primario-base to-nominativo-primario-oscuro to-95% ${fuente_titulo}`;
  const genitivo = `bg-gradient-to-b from-genitivo-primario-claro from-5% via-genitivo-primario-base to-genitivo-primario-oscuro to-95% ${fuente_titulo}`;
  const dativo = `bg-gradient-to-b from-dativo-primario-claro from-5% via-dativo-primario-base to-dativo-primario-oscuro to-95% ${fuente_titulo}`;
  const acusativo = `bg-gradient-to-b from-acusativo-primario-claro from-5% via-acusativo-primario-base to-acusativo-primario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const animado = `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const inanimado = `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const instrumental = `bg-gradient-to-b from-instrumental-primario-claro from-5% via-instrumental-primario-base to-instrumental-primario-oscuro to-95% ${fuente_titulo}`;
  const preposicional = `bg-gradient-to-b from-preposicional-primario-claro from-5% via-preposicional-primario-base to-preposicional-primario-oscuro to-95% ${fuente_titulo}`;
  const cuerpo_masculino = `bg-masculino-secundario-base`;
  const cuerpo_femenino = `bg-femenino-secundario-base`;
  const cuerpo_neutro = `bg-neutro-secundario-base`;
  const cuerpo_plural = `bg-plural-secundario-base`;

  if (tipo > 2) {
    tipo = 0;
  }

  let obj = null;
  if (datos != "") {
    obj = JSON.parse(JSON.stringify(datos));
  }

  return (
    <div
      className={`w-full h-full grid ${casos ? "grid-cols-5" : "grid-cols-4"}`}
    >
      {/* Encabezado */}

      {titulo != "" && (
        <Celda
          texto={titulo}
          className={`${
            casos ? "col-span-5" : "col-span-4"
          } ${fuente_titulo} ${color_titulo}`}
        />
      )}

      {/* Casos y Géneros */}

      {casos && <Celda texto="Caso / Género" className={caso_genero} />}
      <Celda texto="Singular" className={singular} />
      <Celda
        texto="Plurales"
        className={`row-span-2 ` + plural}
        texto_2="(Todos los géneros)"
      />
      <Celda texto="Masculino" className={masculino} />
      <Celda texto="Femenino" className={femenino} />
      <Celda texto="Neutro" className={neutro} />

      {/* Nominativo */}

      {casos && <Celda texto="Nominativo" className={nominativo} />}
      <Celda
        texto={obj !== null ? obj.nominativo_masculino : undefined}
        className={cuerpo_masculino}
      />
      <Celda
        texto={obj !== null ? obj.nominativo_femenino : undefined}
        className={cuerpo_femenino}
      />
      <Celda
        texto={obj !== null ? obj.nominativo_neutro : undefined}
        className={cuerpo_neutro}
      />
      <Celda
        texto={obj !== null ? obj.nominativo_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Genitivo */}

      {casos && <Celda texto="Genitivo" className={genitivo} />}
      <Celda
        texto={obj !== null ? obj.genitivo_masculino : undefined}
        className={cuerpo_masculino}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.genitivo_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {tipo === 1 && (
        <Celda
          texto={obj !== null ? obj.genitivo_dativo_femenino : undefined}
          className={`row-span-2 ` + cuerpo_femenino}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={obj !== null ? obj.genitivo_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      {tipo === 2 && (
        <Celda
          texto={obj !== null ? obj.genitivo_dativo_neutro : undefined}
          className={`row-span-2 ` + cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.genitivo_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Dativo */}

      {casos && <Celda texto="Dativo" className={dativo} />}
      <Celda
        texto={obj !== null ? obj.dativo_masculino : undefined}
        className={cuerpo_masculino}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.dativo_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={obj !== null ? obj.dativo_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.dativo_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Acusativo */}

      {casos && (
        <div className="row-span-2 grid grid-cols-2">
          <Celda texto="Acusativo" className={acusativo} />
          <div className="grid grid-rows-2">
            <Celda texto="Animnado" className={animado} />
            <Celda texto="Inanimado" className={inanimado} />
          </div>
        </div>
      )}

      {/* Acusativo animado */}

      <Celda
        texto={obj !== null ? obj.acusativo_animado_masculino : undefined}
        className={cuerpo_masculino}
      />
      {tipo === 0 && (
        <Celda
          texto={obj !== null ? obj.acusativo_animado_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {(tipo === 1 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.acusativo_femenino : undefined}
          className={`row-span-2 ` + cuerpo_femenino}
        />
      )}
      {tipo === 0 && (
        <Celda
          texto={obj !== null ? obj.acusativo_animado_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      {(tipo === 1 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.acusativo_neutro : undefined}
          className={`row-span-2 ` + cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.acusativo_animado_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Acusativo inanimado */}

      <Celda
        texto={obj !== null ? obj.acusativo_inanimado_masculino : undefined}
        className={cuerpo_masculino}
      />
      {tipo === 0 && (
        <Celda
          texto={obj !== null ? obj.acusativo_inanimado_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {tipo === 0 && (
        <Celda
          texto={obj !== null ? obj.acusativo_inanimado_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.acusativo_inanimado_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Instrumental */}

      {casos && <Celda texto="Instrumental" className={instrumental} />}
      <Celda
        texto={obj !== null ? obj.instrumental_masculino : undefined}
        className={cuerpo_masculino}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.instrumental_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {tipo === 1 && (
        <Celda
          texto={
            obj !== null ? obj.instrumental_preposicional_femenino : undefined
          }
          className={`row-span-2 ` + cuerpo_femenino}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={obj !== null ? obj.instrumental_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      {tipo === 2 && (
        <Celda
          texto={
            obj !== null ? obj.instrumental_preposicional_neutro : undefined
          }
          className={`row-span-2 ` + cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.instrumental_plural : undefined}
        className={cuerpo_plural}
      />

      {/* Preposicional */}

      {casos && <Celda texto="Preposicional" className={preposicional} />}
      <Celda
        texto={obj !== null ? obj.preposicional_masculino : undefined}
        className={cuerpo_masculino}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={obj !== null ? obj.preposicional_femenino : undefined}
          className={cuerpo_femenino}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={obj !== null ? obj.preposicional_neutro : undefined}
          className={cuerpo_neutro}
        />
      )}
      <Celda
        texto={obj !== null ? obj.preposicional_plural : undefined}
        className={cuerpo_plural}
      />
    </div>
  );
}

export default Tabla_Declinaciones;
