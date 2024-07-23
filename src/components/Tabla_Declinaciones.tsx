import Celda from "./Celda";

interface Tabla_DeclinacionesProps {
  tipo?: number;
  datos?: string[];
}

function Tabla_Declinaciones({ tipo = 0 }: Tabla_DeclinacionesProps) {
  const titulo = "font-BookerlyBold text-lg text-white";
  const caso_genero = `row-span-2 bg-verbos-primary ${titulo}`;
  const singular = `col-span-3 bg-singular-primary ${titulo}`;
  const masculino = `bg-masculino-primary ${titulo}`;
  const femenino = `bg-femenino-primary ${titulo}`;
  const neutro = `bg-neutro-primary ${titulo}`;
  const plural_1 = `border-b-plural-primary content-end bg-plural-primary ${titulo}`;
  const plural_2 = `border-t-plural-primary content-start text-xs bg-plural-primary font-BookerlyBold text-xs text-white`;
  const nominativo = `bg-nominativo-primary ${titulo}`;
  const genitivo = `bg-genitivo-primary ${titulo}`;
  const dativo = `bg-dativo-primary ${titulo}`;
  const acusativo = `bg-acusativo-primary font-BookerlyBold text-sm text-white`;
  const animado = `bg-acusativo-secondary font-BookerlyBold text-sm text-white`;
  const inanimado = `bg-acusativo-secondary font-BookerlyBold text-sm text-white`;
  const instrumental = `bg-instrumental-primary ${titulo}`;
  const preposicional = `bg-preposicional-primary ${titulo}`;
  const cuerpo_masculino = `bg-masculino-secondary`;
  const cuerpo_femenino = `bg-femenino-secondary`;
  const cuerpo_neutro = `bg-neutro-secondary`;
  const cuerpo_plural = `bg-plural-secondary`;

  if (tipo > 2) {
    tipo = 0;
  }

  return (
    <div className="bg-lime-400 w-full h-full grid grid-cols-5">
      <Celda texto="Caso / Género" className={caso_genero} />
      <Celda texto="Singular" className={singular} />
      <Celda texto="Plurales" className={plural_1} />
      <Celda texto="Masculino" className={masculino} />
      <Celda texto="Femenino" className={femenino} />
      <Celda texto="Neutro" className={neutro} />
      <Celda texto="(Todos los géneros)" className={plural_2} />
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
