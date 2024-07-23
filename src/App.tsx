import Tabla_Declinaciones from "./components/Tabla_Declinaciones";
const arreglo_1 = [""];
const arreglo_2 = [""];
const arreglo_3 = [""];
function App() {
  return (
    <div className="h-screen bg-black items-center justify-center grid grid-cols-2">
      <Tabla_Declinaciones datos={arreglo_1} />
      <Tabla_Declinaciones tipo={1} datos={arreglo_2} />
      <Tabla_Declinaciones tipo={2} datos={arreglo_3} />
    </div>
  );
}

export default App;
