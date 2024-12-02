import { useState } from "react";
import Tabla_Declinaciones_Test from "./test/Tabla_Declinaciones_Test";
import Vocabulary_Card_Test from "./test/Vocabulary_Card_Test";
import Vocabulary_Card_Nouns_Extended_Test from "./test/Vocabulary_Card_Nouns_Extended_Test";

function App() {
  const buttons_desing =
    "bg-white px-2 rounded border border-gray-400 font-BookerlyItalic hover:bg-gradient-to-b from-white from-60% to-gray-300 to-95% hover:scale-105";

  const [tabla_Declinaciones_enabled, setTabla_Declinaciones_enabled] =
    useState(false);

  const [vocabulary_Card_Test_enabled, setVocabulary_Card_Test_enabled] =
    useState(false);

  const [
    vocabulary_Card_Nouns_Extended_Test_enabled,
    setVocabulary_Card_Nouns_Extended_Test_enabled,
  ] = useState(true);

  return (
    <div className="w-full h-full z-10">
      <div id="control" className="place-items-center mb-4">
        <h1 className="text-xl font-BookerlyBold">PRUEBAS</h1>
        <div className="flex my-2 gap-2">
          <button
            className={buttons_desing}
            onClick={() =>
              setTabla_Declinaciones_enabled(!tabla_Declinaciones_enabled)
            }
          >
            Tabla declinaciones
          </button>
          <button
            className={buttons_desing}
            onClick={() =>
              setVocabulary_Card_Test_enabled(!vocabulary_Card_Test_enabled)
            }
          >
            Vocabulario
          </button>
          <button
            className={buttons_desing}
            onClick={() =>
              setVocabulary_Card_Nouns_Extended_Test_enabled(
                !vocabulary_Card_Nouns_Extended_Test_enabled,
              )
            }
          >
            Vocabulario (Extendido)
          </button>
        </div>
      </div>

      <div id="tests" className="flex flex-col gap-y-4">
        {tabla_Declinaciones_enabled && <Tabla_Declinaciones_Test />}
        {vocabulary_Card_Test_enabled && <Vocabulary_Card_Test />}
        {vocabulary_Card_Nouns_Extended_Test_enabled && (
          <Vocabulary_Card_Nouns_Extended_Test />
        )}
      </div>
    </div>
  );
}

export default App;
