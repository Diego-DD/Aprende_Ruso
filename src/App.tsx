import Celda from "./components/Celda";

function App() {
  return (
    <div className="h-screen bg-black items-center justify-center flex text-lime-400">
      <div className="bg-white h-80 w-80 text-center text-white rounded-3xl border-gray-400 border-8">
        <div className="bg-white h-3/5 w-auto rounded-t-3xl border-none items-center justify-center flex p-2">
          <div id="imagen" className="bg-white h-full w-fit rounded-3xl">
            <img
              src="/images/Vocabulario/Comida/Fruta seca.jpg"
              className="h-full w-full object-contain rounded-3xl"
            />
          </div>
        </div>
        <Celda
          className="h-[12.5%] text-black font-BookerlyBold border-none"
          texto="FRUTOS SECOS"
        ></Celda>
        <div
          className="h-[6%] w-auto grid"
          style={{ gridTemplateColumns: "8% 46% 46%" }}
        >
          <Celda className="bg-white" />
          <Celda
            className="bg-yellow-500 text-xs font-bold flex items-center justify-center border-none"
            texto="Singular"
          />
          <Celda
            className="bg-yellow-800 text-xs font-bold flex items-center justify-center border-none"
            texto="Plural"
          />
        </div>
        <div
          className="h-[12.5%] w-auto grid"
          style={{ gridTemplateColumns: "8% 46% 46%" }}
        >
          <Celda
            className="bg-blue-950 font-BookerlyBold flex items-center justify-center border-none"
            texto="N"
          />
          <Celda
            className="bg-sky-500 text-black font-BookerlyBold flex items-center justify-center border-none"
            texto="Texto"
          />
          <Celda
            className="bg-white text-black font-BookerlyBold flex items-center justify-center border-none"
            texto="Texto"
          />
        </div>
        <div className="text-black font-BookerlyItalic flex items-center justify-center">
          Ver declinaciones
        </div>
      </div>
    </div>
  );
}

export default App;
