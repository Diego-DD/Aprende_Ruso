/*
Uso del componente Tabla_Declinaciones:
import Tabla_Declinaciones from "./components/Tabla_Declinaciones";   // Componente
import * as Datos from "./data/index";                                // Datos JSON

<Tabla_Declinaciones datos={Datos.Tabla_0}
*/

import Celda from "./Celda";

interface Tabla_DeclinacionesProps {
  tipo?: number; // Tipo de tabla: 0, 1 o 2
  casos?: boolean; // Mostrar la columna de casos.
  titulo?: string; // Agregar título a la tabla.
  color_titulo?: string; // Color de fondo del título.
  datos?: unknown; // JSON con los datos de la tabla.
}

function Tabla_Declinaciones({
  tipo = 0,
  casos = true,
  titulo = "",
  color_titulo = "bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95%",
  datos = "",
}: Tabla_DeclinacionesProps) {
  // Variables de control de estilos en la tabla.

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

  // Conversión del JSON entrante a objeto.

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
        texto={datos != "" ? obj.nm.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.nm.mitad : 0}
      />
      <Celda
        texto={datos != "" ? obj.nf.texto : ""}
        className={cuerpo_femenino}
        mitad={datos != "" ? obj.nf.mitad : 0}
      />
      <Celda
        texto={datos != "" ? obj.nn.texto : ""}
        className={cuerpo_neutro}
        mitad={datos != "" ? obj.nn.mitad : 0}
      />
      <Celda
        texto={datos != "" ? obj.np.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.np.mitad : 0}
      />

      {/* Genitivo */}

      {casos && <Celda texto="Genitivo" className={genitivo} />}
      <Celda
        texto={datos != "" ? obj.gm.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.gm.mitad : 0}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.gf.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.gf.mitad : 0}
        />
      )}
      {tipo === 1 && (
        <Celda
          texto={datos != "" ? obj.gdf.texto : ""}
          className={`row-span-2 ` + cuerpo_femenino}
          mitad={datos != "" ? obj.gdf.mitad : 0}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={datos != "" ? obj.gn.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.gn.mitad : 0}
        />
      )}
      {tipo === 2 && (
        <Celda
          texto={datos != "" ? obj.gdn.texto : ""}
          className={`row-span-2 ` + cuerpo_neutro}
          mitad={datos != "" ? obj.gdn.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.gp.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.gp.mitad : 0}
      />

      {/* Dativo */}

      {casos && <Celda texto="Dativo" className={dativo} />}
      <Celda
        texto={datos != "" ? obj.dm.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.dm.mitad : 0}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.df.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.df.mitad : 0}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={datos != "" ? obj.dn.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.dn.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.dp.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.dp.mitad : 0}
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
        texto={datos != "" ? obj.aam.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.aam.mitad : 0}
      />
      {tipo === 0 && (
        <Celda
          texto={datos != "" ? obj.aaf.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.aaf.mitad : 0}
        />
      )}
      {(tipo === 1 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.af.texto : ""}
          className={`row-span-2 ` + cuerpo_femenino}
          mitad={datos != "" ? obj.af.mitad : 0}
        />
      )}
      {tipo === 0 && (
        <Celda
          texto={datos != "" ? obj.aan.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.aan.mitad : 0}
        />
      )}
      {(tipo === 1 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.an.texto : ""}
          className={`row-span-2 ` + cuerpo_neutro}
          mitad={datos != "" ? obj.an.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.aap.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.aap.mitad : 0}
      />

      {/* Acusativo inanimado */}

      <Celda
        texto={datos != "" ? obj.aim.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.aim.mitad : 0}
      />
      {tipo === 0 && (
        <Celda
          texto={datos != "" ? obj.aif.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.aif.mitad : 0}
        />
      )}
      {tipo === 0 && (
        <Celda
          texto={datos != "" ? obj.ain.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.ain.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.aip.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.aip.mitad : 0}
      />

      {/* Instrumental */}

      {casos && <Celda texto="Instrumental" className={instrumental} />}
      <Celda
        texto={datos != "" ? obj.im.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.im.mitad : 0}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.if.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.if.mitad : 0}
        />
      )}
      {tipo === 1 && (
        <Celda
          texto={datos != "" ? obj.ipf.texto : ""}
          className={`row-span-2 ` + cuerpo_femenino}
          mitad={datos != "" ? obj.ipf.mitad : 0}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={datos != "" ? obj.in.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.in.mitad : 0}
        />
      )}
      {tipo === 2 && (
        <Celda
          texto={datos != "" ? obj.ipn.texto : ""}
          className={`row-span-2 ` + cuerpo_neutro}
          mitad={datos != "" ? obj.ipn.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.ip.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.ip.mitad : 0}
      />

      {/* Preposicional */}

      {casos && <Celda texto="Preposicional" className={preposicional} />}
      <Celda
        texto={datos != "" ? obj.pm.texto : ""}
        className={cuerpo_masculino}
        mitad={datos != "" ? obj.pm.mitad : 0}
      />
      {(tipo === 0 || tipo === 2) && (
        <Celda
          texto={datos != "" ? obj.pf.texto : ""}
          className={cuerpo_femenino}
          mitad={datos != "" ? obj.pf.mitad : 0}
        />
      )}
      {(tipo === 0 || tipo === 1) && (
        <Celda
          texto={datos != "" ? obj.pn.texto : ""}
          className={cuerpo_neutro}
          mitad={datos != "" ? obj.pn.mitad : 0}
        />
      )}
      <Celda
        texto={datos != "" ? obj.pp.texto : ""}
        className={cuerpo_plural}
        mitad={datos != "" ? obj.pp.mitad : 0}
      />
    </div>
  );
}

export default Tabla_Declinaciones;
