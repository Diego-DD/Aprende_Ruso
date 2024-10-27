import Tabla_Declinaciones from "./components/Tabla_Declinaciones";
import Vocabulario from "./components/Vocabulario";

function App() {
  return (
    <div className="flex w-full h-full p-1.5">
      <div className="bg-transparent w-20"></div>
      <div>
        <div className="w-auto h-auto">
          <Tabla_Declinaciones />
        </div>
        <Vocabulario />
        <Vocabulario />
        <Vocabulario />
        <Vocabulario />
        <Vocabulario />
      </div>
    </div>
  );
}

export default App;
