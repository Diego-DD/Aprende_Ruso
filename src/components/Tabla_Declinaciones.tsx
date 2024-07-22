import Celda from "./Celda";

interface Tabla_DeclinacionesProps {
  tipo?: number;
}

function Tabla_Declinaciones({ tipo = 0 }: Tabla_DeclinacionesProps) {
  /*const titulo = "font-BookerlyBold text-lg text-white";
  const caso = `border-b-verbos1 bg-verbos_1 ${titulo}`;
  const singular = `bg-singular_1 ${titulo}`;
  const masculino = `bg-masculino_1 ${titulo}`;
  const femenino = `bg-femenino_1 ${titulo}`;
  const neutro = `bg-neutro_1 ${titulo}`;
  const plural_1 = `border-b-plural_1 content-end bg-plural_1 ${titulo}`;
  const plural_2 = `border-t-plural_1 content-start text-xs bg-plural_1 font-BookerlyBold text-xs text-white`;
  const nominativo = `bg-nominativo_1 ${titulo}`;
  const genitivo = `bg-genitivo_1 ${titulo}`;
  const dativo = `bg-dativo_1 ${titulo}`;
  const acusativo = `bg-acusativo_1 font-BookerlyBold text-sm text-white`;
  const animado = `bg-acusativo_2 font-BookerlyBold text-xs text-white`;
  const inanimado = `bg-acusativo_2 font-BookerlyBold text-xs text-white`;
  const instrumental = `bg-instrumental_1 ${titulo}`;
  const preposicional = `bg-preposicional_1 ${titulo}`;
  const cuerpo_masculino = `bg-masculino_2`;
  const cuerpo_femenino = `bg-femenino_2`;
  const cuerpo_neutro = `bg-neutro_2`;
  const cuerpo_plural = `bg-plural_2`;*/
  return (
    <div className="bg-lime-400 w-full h-full grid grid-cols-5">
      <Celda texto="Caso / Género" className="bg-verbos_1 row-span-2" />
      <Celda className="col-span-3" />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <div className="row-span-2 grid grid-cols-2">
        <Celda />
        <div className="grid grid-rows-2">
          <Celda />
          <Celda />
        </div>
      </div>
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
      <Celda />
    </div>
  );
}

export default Tabla_Declinaciones;
