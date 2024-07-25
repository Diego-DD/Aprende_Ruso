import Tabla_Declinaciones from "./components/Tabla_Declinaciones";
import * as Datos from "./data/index";
import Celda from "./components/Celda";

function App() {
  return (
    <div className="h-screen bg-black items-center justify-center grid grid-cols-2">
      <Tabla_Declinaciones datos={Datos.Tabla_P} />
      {/* 
      <Tabla_Declinaciones tipo={1} datos={Datos.Tabla_1} />
      <Tabla_Declinaciones tipo={2} datos={Datos.Tabla_2} />*/}
    </div>
  );
}

export default App;
