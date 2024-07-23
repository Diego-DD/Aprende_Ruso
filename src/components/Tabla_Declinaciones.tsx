import Celda from "./Celda";

interface Tabla_DeclinacionesProps {
  tipo?: number;
}

function Tabla_Declinaciones({ tipo = 0 }: Tabla_DeclinacionesProps) {
  const titulo = "font-BookerlyBold text-lg text-white";
  const caso_genero = `row-span-2 bg-gradient-to-b from-verbos-primario-claro from-5% via-verbos-primario-base to-verbos-primario-oscuro to-95% ${titulo}`;
  const singular = `col-span-3 bg-gradient-to-b from-singular-primario-claro from-5% via-singular-primario-base to-singular-primario-oscuro to-95% ${titulo}`;
  const masculino = `bg-gradient-to-b from-masculino-primario-claro from-5% via-masculino-primario-base to-masculino-primario-oscuro to-95% ${titulo}`;
  const femenino = `bg-gradient-to-b from-femenino-primario-claro from-5% via-femenino-primario-base to-femenino-primario-oscuro to-95% ${titulo}`;
  const neutro = `bg-gradient-to-b from-neutro-primario-claro from-5% via-neutro-primario-base to-neutro-primario-oscuro to-95% ${titulo}`;
  const plural = `bg-gradient-to-b from-plural-primario-claro from-5% via-plural-primario-base to-plural-primario-oscuro to-95% ${titulo}`;
  const nominativo = `bg-gradient-to-b from-nominativo-primario-claro from-5% via-nominativo-primario-base to-nominativo-primario-oscuro to-95% ${titulo}`;
  const genitivo = `bg-gradient-to-b from-genitivo-primario-claro from-5% via-genitivo-primario-base to-genitivo-primario-oscuro to-95% ${titulo}`;
  const dativo = `bg-gradient-to-b from-dativo-primario-claro from-5% via-dativo-primario-base to-dativo-primario-oscuro to-95% ${titulo}`;
  const acusativo = `bg-gradient-to-b from-acusativo-primario-claro from-5% via-acusativo-primario-base to-acusativo-primario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const animado = `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const inanimado = `bg-gradient-to-b from-acusativo-secundario-claro from-5% via-acusativo-secundario-base to-acusativo-secundario-oscuro to-95% font-BookerlyBold text-sm text-white`;
  const instrumental = `bg-gradient-to-b from-instrumental-primario-claro from-5% via-instrumental-primario-base to-instrumental-primario-oscuro to-95% ${titulo}`;
  const preposicional = `bg-gradient-to-b from-preposicional-primario-claro from-5% via-preposicional-primario-base to-preposicional-primario-oscuro to-95% ${titulo}`;
  const cuerpo_masculino = `bg-masculino-secundario-base`;
  const cuerpo_femenino = `bg-femenino-secundario-base`;
  const cuerpo_neutro = `bg-neutro-secundario-base`;
  const cuerpo_plural = `bg-plural-secundario-base`;

  if (tipo > 2) {
    tipo = 0;
  }

  return (
    <div className="bg-lime-400 w-full h-full grid grid-cols-5">
      <Celda texto="Caso / Género" className={caso_genero} />
      <Celda texto="Singular" className={singular} />
      <Celda
        texto="Plurales"
        className={`row-span-2 ` + plural}
        texto_2="(Todos los géneros)"
      />
      <Celda texto="Masculino" className={masculino} />
      <Celda texto="Femenino" className={femenino} />
      <Celda texto="Neutro" className={neutro} />
      <Celda texto="Nominativo" className={nominativo} />
      <Celda className={cuerpo_masculino} />
      <Celda className={cuerpo_femenino} />
      <Celda className={cuerpo_neutro} />
      <Celda className={cuerpo_plural} />
      <Celda texto="Genitivo" className={genitivo} />
      <Celda className={cuerpo_masculino} />
      {(tipo === 0 || tipo === 2) && <Celda className={cuerpo_femenino} />}
      {tipo === 1 && <Celda className={`row-span-2 ` + cuerpo_femenino} />}
      {(tipo === 0 || tipo === 1) && <Celda className={cuerpo_neutro} />}
      {tipo === 2 && <Celda className={`row-span-2 ` + cuerpo_neutro} />}
      <Celda className={cuerpo_plural} />
      <Celda texto="Dativo" className={dativo} />
      <Celda className={cuerpo_masculino} />
      {(tipo === 0 || tipo === 2) && <Celda className={cuerpo_femenino} />}
      {(tipo === 0 || tipo === 1) && <Celda className={cuerpo_neutro} />}
      <Celda className={cuerpo_plural} />
      <div className="row-span-2 grid grid-cols-2">
        <Celda texto="Acusativo" className={acusativo} />
        <div className="grid grid-rows-2">
          <Celda texto="Animnado" className={animado} />
          <Celda texto="Inanimado" className={inanimado} />
        </div>
      </div>
      <Celda className={cuerpo_masculino} />
      {tipo === 0 && <Celda className={cuerpo_femenino} />}
      {(tipo === 1 || tipo === 2) && (
        <Celda className={`row-span-2 ` + cuerpo_femenino} />
      )}
      {tipo === 0 && <Celda className={cuerpo_neutro} />}
      {(tipo === 1 || tipo === 2) && (
        <Celda className={`row-span-2 ` + cuerpo_neutro} />
      )}
      <Celda className={cuerpo_plural} />
      <Celda className={cuerpo_masculino} />
      {tipo === 0 && <Celda className={cuerpo_femenino} />}
      {tipo === 0 && <Celda className={cuerpo_neutro} />}
      <Celda className={cuerpo_plural} />
      <Celda texto="Instrumental" className={instrumental} />
      <Celda className={cuerpo_masculino} />
      {(tipo === 0 || tipo === 2) && <Celda className={cuerpo_femenino} />}
      {tipo === 1 && <Celda className={`row-span-2 ` + cuerpo_femenino} />}
      {(tipo === 0 || tipo === 1) && <Celda className={cuerpo_neutro} />}
      {tipo === 2 && <Celda className={`row-span-2 ` + cuerpo_neutro} />}
      <Celda className={cuerpo_plural} />
      <Celda texto="Preposicional" className={preposicional} />
      <Celda className={cuerpo_masculino} />
      {(tipo === 0 || tipo === 2) && <Celda className={cuerpo_femenino} />}
      {(tipo === 0 || tipo === 1) && <Celda className={cuerpo_neutro} />}
      <Celda className={cuerpo_plural} />
    </div>
  );
}

export default Tabla_Declinaciones;
