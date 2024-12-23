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

export default function Vocabulary_Card({ data }: { data: Vocabutary_Data }) {
  const num_variants = data.variants.length;

  function remark_text(text: string, unnused: boolean) {
    return unnused ? "*" + text : text;
  }

  const num_cols: { [key: number]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const num_col_span: { [key: number]: string } = {
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
  };

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
        className={`grid ${num_cols[num_variants]} w-full place-items-center gap-2`}
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
          className="bg-gradient-to-b from-singular-primario-claro from-5% via-singular-primario-base to-singular-primario-oscuro to-95% text-white text-sm border-none rounded-3xl text-2xs"
          texto="Singular"
        />
        <Celda
          className="bg-gradient-to-b from-plural-primario-claro from-5% via-plural-primario-base to-plural-primario-oscuro to-95% text-white text-sm border-none rounded-3xl text-2xs"
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
        className="bg-red-600 text-white text-xs border-none w-fit h-max px-4 col-span-2 rounded mb-1"
        texto="INDLECLINABLE"
      />
    );
  };

  const WordRow = ({ word }: { word: Words }) => {
    const classes: { [key: number]: string } = {
      0: "bg-white",
      1: "bg-masculino-secundario-base",
      2: "bg-femenino-secundario-base",
      3: "bg-neutro-secundario-base",
    };

    const unnused: { [key: string]: boolean } = {
      ns: word.declinations.nominative.singular.unnused,
      np: word.declinations.nominative.plural.unnused,
    };

    const declinations: { [key: string]: string } = {
      ns: remark_text(
        word.declinations.nominative.singular.word,
        unnused["ns"],
      ),
      np: remark_text(word.declinations.nominative.plural.word, unnused["np"]),
    };

    const words_style = "border-none text-sm rounded";

    return (
      <div className="grid grid-cols-2 gap-1 place-items-center">
        <Celda
          className={`${classes[word.gender]} ${words_style} ${unnused["ns"] && "text-orange-700"}`}
          texto={declinations["ns"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["np"] && "text-orange-700"}`}
          texto={declinations["np"]}
          lang="ru"
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
        className={`grid ${num_cols[num_variants]} w-full place-items-center gap-2`}
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
      className={`bg-white border-2 border-gray-400 rounded-3xl overflow-hidden ${num_variants > 1 && num_col_span[num_variants]} w-full h-full place-items-center p-2 place-content-center flex flex-col justify-evenly hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <Image />
      <Title />
      <Tables />
    </div>
  );
}
