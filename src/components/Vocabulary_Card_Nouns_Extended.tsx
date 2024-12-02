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

export default function Vocabulary_Card_Nouns_Extended({
  data,
  num_variant,
  num_word,
}: {
  data: Vocabutary_Data;
  num_variant: number;
  num_word: number;
}) {
  function remark_text(text: string, unnused: boolean) {
    return unnused ? "*" + text : text;
  }

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
      <div className={`w-full place-items-center gap-2 mb-1`}>
        <Celda
          className="rounded-xl border-double border-x-4 border-y-4 border-gray-300 py-1"
          texto={data.title}
          texto_2={`${data.variants[num_variant].annotation && "(" + data.variants[num_variant].annotation + ")"}`}
        />
      </div>
    );
  };

  const Table_Header = () => {
    return (
      <div className="grid grid-cols-3 gap-1 mb-2">
        <Celda />
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

  const ActionButton = () => {
    return (
      <button
        className="text-black font-BookerlyItalic text-xs w-fit h-max col-span-3 border-2 border-sky-100 rounded-3xl px-5 hover:border-sky-400 hover:bg-gradient-to-b from-white from-60% to-gray-300 to-95% hover:font-BookerlyBoldItalic hover:border-double mb-1"
        onMouseEnter={playButtonSound}
      >
        Cerrar
      </button>
    );
  };

  const WordRow = ({ word }: { word: Words }) => {
    const gender: { [key: number]: string } = {
      0: "bg-white",
      1: "bg-masculino-secundario-base",
      2: "bg-femenino-secundario-base",
      3: "bg-neutro-secundario-base",
    };

    const unnused: { [key: string]: boolean } = {
      ns: word.declinations.nominative.singular.unnused,
      np: word.declinations.nominative.plural.unnused,
      gs: word.declinations.genitive.singular.unnused,
      gp: word.declinations.genitive.plural.unnused,
      ds: word.declinations.dative.singular.unnused,
      dp: word.declinations.dative.plural.unnused,
      as: word.declinations.accusative.singular.unnused,
      ap: word.declinations.accusative.plural.unnused,
      is: word.declinations.instrumental.singular.unnused,
      ip: word.declinations.instrumental.plural.unnused,
      ps: word.declinations.prepositional.singular.unnused,
      pp: word.declinations.prepositional.plural.unnused,
    };

    const declinations: { [key: string]: string } = {
      ns: remark_text(
        word.declinations.nominative.singular.word,
        unnused["ns"],
      ),
      np: remark_text(word.declinations.nominative.plural.word, unnused["np"]),
      gs: remark_text(word.declinations.genitive.singular.word, unnused["gs"]),
      gp: remark_text(word.declinations.genitive.plural.word, unnused["gp"]),
      ds: remark_text(word.declinations.dative.singular.word, unnused["ds"]),
      dp: remark_text(word.declinations.dative.plural.word, unnused["dp"]),
      as: remark_text(
        word.declinations.accusative.singular.word,
        unnused["as"],
      ),
      ap: remark_text(word.declinations.accusative.plural.word, unnused["ap"]),
      is: remark_text(
        word.declinations.instrumental.singular.word,
        unnused["is"],
      ),
      ip: remark_text(
        word.declinations.instrumental.plural.word,
        unnused["ip"],
      ),
      ps: remark_text(
        word.declinations.prepositional.singular.word,
        unnused["ps"],
      ),
      pp: remark_text(
        word.declinations.prepositional.plural.word,
        unnused["pp"],
      ),
    };

    const fuente_titulo = "font-BookerlyBold text-2xs text-white";
    const cases_style = "rounded";
    const words_style = "border-none text-sm rounded ";
    const caso: { [key: string]: string } = {
      nominativo: `bg-gradient-to-b from-nominativo-primario-claro from-5% via-nominativo-primario-base to-nominativo-primario-oscuro to-95% ${fuente_titulo} ${cases_style}`,
      genitivo: `bg-gradient-to-b from-genitivo-primario-claro from-5% via-genitivo-primario-base to-genitivo-primario-oscuro to-95% ${fuente_titulo} ${cases_style}`,
      dativo: `bg-gradient-to-b from-dativo-primario-claro from-5% via-dativo-primario-base to-dativo-primario-oscuro to-95% ${fuente_titulo} ${cases_style}`,
      acusativo: `bg-gradient-to-b from-acusativo-primario-claro from-5% via-acusativo-primario-base to-acusativo-primario-oscuro to-95% font-BookerlyBold text-sm text-white ${fuente_titulo} ${cases_style}`,
      instrumental: `bg-gradient-to-b from-instrumental-primario-claro from-5% via-instrumental-primario-base to-instrumental-primario-oscuro to-95% ${fuente_titulo} ${cases_style}`,
      preposicional: `bg-gradient-to-b from-preposicional-primario-claro from-5% via-preposicional-primario-base to-preposicional-primario-oscuro to-95% ${fuente_titulo} ${cases_style}`,
    };
    return (
      <div className="grid grid-cols-3 gap-1 place-items-center">
        <Celda className={caso["nominativo"]} texto="Nominativo" />
        <Celda
          className={`${gender[word.gender]} ${words_style} ${unnused["ns"] && "text-orange-700"} hover:bg-nominativo-secundario-claro`}
          texto={declinations["ns"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["np"] && "text-orange-700"} hover:bg-nominativo-secundario-claro`}
          texto={declinations["np"]}
          lang="ru"
        />

        <Celda className={caso["genitivo"]} texto="Genitivo" />
        <Celda
          className={`${words_style} ${unnused["gs"] && "text-orange-700"} hover:bg-genitivo-secundario-claro`}
          texto={declinations["gs"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["gp"] && "text-orange-700"} hover:bg-genitivo-secundario-claro`}
          texto={declinations["gp"]}
          lang="ru"
        />

        <Celda className={caso["dativo"]} texto="Dativo" />
        <Celda
          className={`${words_style} ${unnused["ds"] && "text-orange-700"} hover:bg-dativo-secundario-claro`}
          texto={declinations["ds"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["dp"] && "text-orange-700"} hover:bg-dativo-secundario-claro`}
          texto={declinations["dp"]}
          lang="ru"
        />

        <Celda className={caso["acusativo"]} texto="Acusativo" />
        <Celda
          className={`${words_style} ${unnused["as"] && "text-orange-700"} hover:bg-acusativo-secundario-claro`}
          texto={declinations["as"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["ap"] && "text-orange-700"} hover:bg-acusativo-secundario-claro`}
          texto={declinations["ap"]}
          lang="ru"
        />

        <Celda className={caso["instrumental"]} texto="Instrumental" />
        <Celda
          className={`${words_style} ${unnused["is"] && "text-orange-700"} hover:bg-instrumental-secundario-claro`}
          texto={declinations["is"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["ip"] && "text-orange-700"} hover:bg-instrumental-secundario-claro`}
          texto={declinations["ip"]}
          lang="ru"
        />

        <Celda className={caso["preposicional"]} texto="Preposicional" />
        <Celda
          className={`${words_style} ${unnused["ps"] && "text-orange-700"} hover:bg-preposicional-secundario-claro`}
          texto={declinations["ps"]}
          lang="ru"
        />
        <Celda
          className={`${words_style} ${unnused["pp"] && "text-orange-700"} hover:bg-preposicional-secundario-claro`}
          texto={declinations["pp"]}
          lang="ru"
        />
        <ActionButton />
      </div>
    );
  };

  const Tables = () => {
    return (
      <div id="tlables_space" className={`w-full place-items-center gap-2`}>
        <div className="border-gray-300 border-4 border-double rounded-2xl overflow-hidden px-1 pt-1">
          <Table_Header />

          <WordRow
            key={num_word}
            word={data.variants[num_variant].words[num_word]}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="div temporal"
      className="flex items-center justify-center bg-black bg-opacity-75 w-full h-full"
    >
      <div
        className={`bg-white border-2 border-gray-400 rounded-3xl overflow-hidden  w-fit h-fit place-items-center p-2 place-content-center flex flex-col justify-evenly`}
      >
        <Image />
        <Title />
        <Tables />
      </div>
    </div>
  );
}
