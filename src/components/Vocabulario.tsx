import Celda from "./Celda";

function Vocabulario() {
  return (
    <div className="bg-white h-auto w-32 text-center text-white rounded-3xl border-gray-400 border-2 m-2">
      <div className="h-auto w-auto rounded-t-3xl border-none items-center justify-center flex p-2">
        <div className="bg-white h-full w-fit rounded-3xl">
          <img
            src="/images/Vocabulario/La Comida/Fruta seca.jpg"
            className="max-h-full max-w-full object-contain rounded-3xl"
          />
        </div>
      </div>
      <Celda
        className="text-black border-none h-auto text-xs"
        texto="FRUTOS SECOS"
      />
      <div className="grid grid-cols-[8%_46%_46%]">
        <Celda className="bg-white" />
        <Celda
          className="bg-singular-primario-base text-xs flex items-center justify-center border-none"
          texto="Singular"
        />
        <Celda
          className="bg-plural-primario-base text-xs flex items-center justify-center border-none"
          texto="Plural"
        />
      </div>
      <div className="w-auto grid grid-cols-[8%_46%_46%]">
        <Celda
          className="bg-nominativo-primario-oscuro flex items-center justify-center border-none text-xs"
          texto="N"
        />
        <Celda
          className="bg-masculino-primario-claro text-black  flex items-center justify-center border-none text-xs"
          texto="Texto"
        />
        <Celda
          className="bg-white text-black  flex items-center justify-center border-none text-xs"
          texto="Texto"
        />
      </div>
      <div className="text-black font-BookerlyItalic flex items-center justify-center h-[8%] text-xs">
        Ver declinaciones
      </div>
    </div>
  );
}

export default Vocabulario;
