import Celda from "./Celda";

// Definición de una declinación en un caso gramatical.

interface Word {
  word: string;
  unnused: boolean;
}

// Definición de los casos gramaticales en singular y plural.

interface Cases {
  nominative: {
    singular: Word;
    plural: Word;
  };
  genitive: {
    singular: Word;
    plural: Word;
  };
  dative: {
    singular: Word;
    plural: Word;
  };
  accusative: {
    singular: Word;
    plural: Word;
  };
  instrumental: {
    singular: Word;
    plural: Word;
  };
  prepositional: {
    singular: Word;
    plural: Word;
  };
}

// Definición de una palabra con su género y declinaciones.

interface Words {
  gender: number; // Puedes usar un enum si los valores de género son fijos
  declinable: boolean;
  declinations: Cases;
}

// Definición de las variantes de traducción de una palabra.

interface Variant {
  annotation: string;
  words: Words[];
}

// Definición de la estructura principal general del componente.

interface Vocabutary_Data {
  image: string;
  title: string;
  variants: Variant[];
}

function Vocabulary_Card({ data }: { data: Vocabutary_Data }) {
  const num_variants = data.variants.length;

  const playButtonSound = () => {
    const optionSound = new Audio("./src/assets/sounds/game_bleep.mp3");
    optionSound.play();
  };

  const Image = () => {
    return (
      <img
        src={data.image}
        className="w-52 h-32 rounded-3xl object-fill mb-2"
      />
    );
  };

  const Title = () => {
    return (
      <div
        className={`grid grid-cols-${num_variants} w-full place-items-center gap-2`}
      >
        {data.variants.map((variant, index) => (
          <div key={index} className="w-full h-full mb-2">
            <Celda
              className="rounded-xl border-double border-x-4 border-y-4 border-gray-300 py-1"
              texto={data.title}
              texto_2={`${variant.annotation && "(" + variant.annotation + ")"}`}
            />
          </div>
        ))}
      </div>
    );
  };

  const Table_Header = () => {
    return (
      <div className="grid grid-cols-2 gap-1 mb-2">
        <Celda
          className="bg-gradient-to-b from-singular-primario-claro from-5% via-singular-primario-base to-singular-primario-oscuro to-95% text-white text-sm border-none rounded-3xl"
          texto="Singular"
        />
        <Celda
          className="bg-gradient-to-b from-plural-primario-claro from-5% via-plural-primario-base to-plural-primario-oscuro to-95% text-white text-sm border-none rounded-3xl"
          texto="Plural"
        />
      </div>
    );
  };

  const ActionButton = ({ declinable }: { declinable: boolean }) => {
    return declinable ? (
      <button
        className="text-black font-BookerlyItalic text-xs w-fit h-max col-span-2 border-2 border-sky-100 rounded-3xl px-5 hover:border-sky-400 hover:bg-gradient-to-b from-white from-60% to-gray-300 to-95% hover:font-BookerlyBoldItalic hover:border-double mb-1"
        onMouseEnter={playButtonSound}
      >
        Ver declinaciones
      </button>
    ) : (
      <Celda
        className="bg-red-600 text-white text-xs border-none w-fit px-1 col-span-2 rounded mb-1"
        texto="INDLECLINABLE"
      />
    );
  };

  const WordRow = ({ word }: { word: Words }) => {
    const getGenderClass = (gender: number): string => {
      const classes: { [key: number]: string } = {
        0: "bg-white",
        1: "bg-masculino-primario-claro",
        2: "bg-femenino-primario-claro",
        3: "bg-neutro-primario-claro",
      };
      return classes[gender];
    };

    let singular = word.declinations.nominative.singular.word;
    const singular_unnused = word.declinations.nominative.singular.unnused;
    let plural = word.declinations.nominative.plural.word;
    const plural_unnused = word.declinations.nominative.plural.unnused;

    if (singular_unnused) {
      singular = "*" + singular;
    }
    if (plural_unnused) {
      plural = "*" + singular;
    }
    return (
      <div className="grid grid-cols-2 gap-1 place-items-center">
        <Celda
          className={`${getGenderClass(word.gender)} border-none text-sm rounded ${singular_unnused && "text-orange-700"}`}
          texto={singular}
        />
        <Celda
          className={`border-none text-sm rounded ${plural_unnused && "text-orange-700"}`}
          texto={plural}
        />
        <ActionButton declinable={word.declinable} />
      </div>
    );
  };

  const Tables = () => {
    const num_variants = data.variants.length;

    return (
      <div
        id="tlables_space"
        className={`grid grid-cols-${num_variants} w-full place-items-center gap-2`}
      >
        {data.variants.map((variant, index) => (
          <div key={index} className="w-full">
            <div className="border-gray-300 border-4 border-double rounded-2xl overflow-hidden px-1 pt-1">
              <Table_Header />

              {variant.words.map((word, i) => (
                <WordRow key={i} word={word} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      className={`bg-white border-2 border-gray-400 rounded-3xl overflow-hidden ${num_variants == 1 ? "w-56" : "w-112"} h-full place-items-center p-2 place-content-center flex flex-col justify-evenly col-span-${num_variants}`}
    >
      <Image />
      <Title />
      <Tables />
    </div>
  );
}

export default Vocabulary_Card;
