import Tabla_Declinaciones from "./components/Tabla_Declinaciones";
import Vocabulario from "./components/Vocabulario";
import Prueba from "./components/Prueba";

const cereza = {
  image: "/images/Vocabulario/La Comida/Cereza.jpg",
  title: "CEREZA",
  variants: [
    {
      annotation: "Variedad ácida y jugosa",
      words: [
        {
          gender: 2,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Ви́шня", unnused: false },
              plural: { word: "Ви́шни", unnused: false },
            },
            genitive: {
              singular: { word: "Ви́шни", unnused: false },
              plural: { word: "Ви́шен", unnused: false },
            },
            dative: {
              singular: { word: "Ви́шне", unnused: false },
              plural: { word: "Ви́шням", unnused: false },
            },
            accusative: {
              singular: { word: "Ви́шню", unnused: false },
              plural: { word: "Ви́шни", unnused: false },
            },
            instrumental: {
              singular: { word: "Ви́шней", unnused: false },
              plural: { word: "Ви́шнями", unnused: false },
            },
            prepositional: {
              singular: { word: "Ви́шне", unnused: false },
              plural: { word: "Ви́шнях", unnused: false },
            },
          },
        },
      ],
    },
    {
      annotation: "Variedad dulce y carnosa",
      words: [
        {
          gender: 2,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Чере́шня", unnused: false },
              plural: { word: "Чере́шни", unnused: false },
            },
            genitive: {
              singular: { word: "Чере́шни", unnused: false },
              plural: { word: "Чере́шен", unnused: false },
            },
            dative: {
              singular: { word: "Чере́шне", unnused: false },
              plural: { word: "Чере́шням", unnused: false },
            },
            accusative: {
              singular: { word: "Чере́шню", unnused: false },
              plural: { word: "Чере́шни", unnused: false },
            },
            instrumental: {
              singular: { word: "Чере́шней", unnused: false },
              plural: { word: "Чере́шнями", unnused: false },
            },
            prepositional: {
              singular: { word: "Чере́шне", unnused: false },
              plural: { word: "Чере́шнях", unnused: false },
            },
          },
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <Vocabulario />
        <Prueba data={cereza} />
      </div>
      <Prueba data={cereza} />
    </div>
  );
}

export default App;
