import Tabla_Declinaciones from "./components/Tabla_Declinaciones";
import Vocabulario from "./components/Vocabulario";
import Vocabulary_Card from "./components/Vocabulary_Card";

const bayas = {
  image: "/images/Vocabulario/La Comida/Bayas.jpg",
  title: "BAYAS",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 2,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Я́года", unnused: false },
              plural: { word: "Я́годы", unnused: false },
            },
            genitive: {
              singular: { word: "Я́годы", unnused: false },
              plural: { word: "Я́год", unnused: false },
            },
            dative: {
              singular: { word: "Я́годе", unnused: false },
              plural: { word: "Я́годам", unnused: false },
            },
            accusative: {
              singular: { word: "Я́году", unnused: false },
              plural: { word: "Я́годы", unnused: false },
            },
            instrumental: {
              singular: { word: "Я́годой", unnused: false },
              plural: { word: "Я́годами", unnused: false },
            },
            prepositional: {
              singular: { word: "Я́годе", unnused: false },
              plural: { word: "Я́годах", unnused: false },
            },
          },
        },
      ],
    },
  ],
};
const comida = {
  image: "/images/Vocabulario/La Comida/Comida.jpeg",
  title: "COMIDA, ALIMENTO",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 2,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Пи́ща", unnused: false },
              plural: { word: "Пи́щи", unnused: false },
            },
            genitive: {
              singular: { word: "Пи́щи", unnused: false },
              plural: { word: "Пи́щ", unnused: false },
            },
            dative: {
              singular: { word: "Пи́ще", unnused: false },
              plural: { word: "Пи́щам", unnused: false },
            },
            accusative: {
              singular: { word: "Пи́щу", unnused: false },
              plural: { word: "Пи́щи", unnused: false },
            },
            instrumental: {
              singular: { word: "Пи́щей", unnused: false },
              plural: { word: "Пи́щами", unnused: false },
            },
            prepositional: {
              singular: { word: "Пи́ще", unnused: false },
              plural: { word: "Пи́щах", unnused: false },
            },
          },
        },
        {
          gender: 2,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Еда́", unnused: false },
              plural: { word: "Е́ды", unnused: true },
            },
            genitive: {
              singular: { word: "Еды́", unnused: false },
              plural: { word: "Е́д", unnused: true },
            },
            dative: {
              singular: { word: "Еде́", unnused: false },
              plural: { word: "Е́дам", unnused: true },
            },
            accusative: {
              singular: { word: "Еду́", unnused: false },
              plural: { word: "Е́ды", unnused: true },
            },
            instrumental: {
              singular: { word: "Едо́й", unnused: false },
              plural: { word: "Е́дами", unnused: true },
            },
            prepositional: {
              singular: { word: "Еде́", unnused: false },
              plural: { word: "Е́дах", unnused: true },
            },
          },
        },
      ],
    },
  ],
};
const toronja = {
  image: "/images/Vocabulario/La Comida/Toronja.jpg",
  title: "TORONJA, POMELO, GREYFRUIT",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 3,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Помело́", unnused: false },
              plural: { word: "Поме́лья", unnused: false },
            },
            genitive: {
              singular: { word: "Помела́", unnused: false },
              plural: { word: "Поме́льев", unnused: false },
            },
            dative: {
              singular: { word: "Помелу́", unnused: false },
              plural: { word: "Поме́льям", unnused: false },
            },
            accusative: {
              singular: { word: "Помело́", unnused: false },
              plural: { word: "Поме́лья", unnused: false },
            },
            instrumental: {
              singular: { word: "Помело́м", unnused: false },
              plural: { word: "Поме́льями", unnused: false },
            },
            prepositional: {
              singular: { word: "Помеле́", unnused: false },
              plural: { word: "Поме́льях", unnused: false },
            },
          },
        },
        {
          gender: 1,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Грейпфру́т", unnused: false },
              plural: { word: "Грейпфру́ты", unnused: false },
            },
            genitive: {
              singular: { word: "Грейпфру́та", unnused: false },
              plural: { word: "Грейпфру́тов", unnused: false },
            },
            dative: {
              singular: { word: "Грейпфру́ту", unnused: false },
              plural: { word: "Грейпфру́там", unnused: false },
            },
            accusative: {
              singular: { word: "Грейпфру́т", unnused: false },
              plural: { word: "Грейпфру́ты", unnused: false },
            },
            instrumental: {
              singular: { word: "Грейпфру́том", unnused: false },
              plural: { word: "Грейпфру́тами", unnused: false },
            },
            prepositional: {
              singular: { word: "Грейпфру́те", unnused: false },
              plural: { word: "Грейпфру́тах", unnused: false },
            },
          },
        },
      ],
    },
  ],
};
const kiwi = {
  image: "/images/Vocabulario/La Comida/Kiwi.jpg",
  title: "KIWI",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 3,
          declinable: false,
          declinations: {
            nominative: {
              singular: { word: "Ки́ви", unnused: false },
              plural: { word: "Ки́ви", unnused: false },
            },
            genitive: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            dative: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            accusative: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            instrumental: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            prepositional: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
          },
        },
      ],
    },
  ],
};
const semillas = {
  image: "/images/Vocabulario/La Comida/Semillas.jpg",
  title: "SEMILLAS / NUECES",
  variants: [
    {
      annotation: "Generalización",
      words: [
        {
          gender: 1,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Оре́х", unnused: false },
              plural: { word: "Оре́хи", unnused: false },
            },
            genitive: {
              singular: { word: "Оре́ха", unnused: false },
              plural: { word: "Оре́хов", unnused: false },
            },
            dative: {
              singular: { word: "Оре́ху", unnused: false },
              plural: { word: "Оре́хам", unnused: false },
            },
            accusative: {
              singular: { word: "Оре́х", unnused: false },
              plural: { word: "Оре́хи", unnused: false },
            },
            instrumental: {
              singular: { word: "Оре́хом", unnused: false },
              plural: { word: "Оре́хами", unnused: false },
            },
            prepositional: {
              singular: { word: "Оре́хе", unnused: false },
              plural: { word: "Оре́хах", unnused: false },
            },
          },
        },
      ],
    },
  ],
};
const filete = {
  image: "/images/Vocabulario/La Comida/Filete.jpg",
  title: "FILETE, BISTEC",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 1,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Сте́йк", unnused: false },
              plural: { word: "Сте́йки", unnused: false },
            },
            genitive: {
              singular: { word: "Сте́йка", unnused: false },
              plural: { word: "Сте́йков", unnused: false },
            },
            dative: {
              singular: { word: "Сте́йку", unnused: false },
              plural: { word: "Сте́йкам", unnused: false },
            },
            accusative: {
              singular: { word: "Сте́йк", unnused: false },
              plural: { word: "Сте́йки", unnused: false },
            },
            instrumental: {
              singular: { word: "Сте́йком", unnused: false },
              plural: { word: "Сте́йками", unnused: false },
            },
            prepositional: {
              singular: { word: "Сте́йке", unnused: false },
              plural: { word: "Сте́йках", unnused: false },
            },
          },
        },
        {
          gender: 3,
          declinable: false,
          declinations: {
            nominative: {
              singular: { word: "Филе́", unnused: false },
              plural: { word: "Филе́", unnused: false },
            },
            genitive: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            dative: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            accusative: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            instrumental: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
            prepositional: {
              singular: { word: "", unnused: false },
              plural: { word: "", unnused: false },
            },
          },
        },
      ],
    },
  ],
};
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
const verde = {
  image: "/images/Vocabulario/La Comida/Verde.png",
  title: "VERDE",
  variants: [
    {
      annotation: "",
      words: [
        {
          gender: 0,
          declinable: true,
          declinations: {
            nominative: {
              singular: { word: "Зелёный", unnused: false },
              plural: { word: "Зелёные", unnused: false },
            },
            genitive: {
              singular: { word: "Some singular", unnused: false },
              plural: { word: "Some plural", unnused: false },
            },
            dative: {
              singular: { word: "Some singular", unnused: false },
              plural: { word: "Some plural", unnused: false },
            },
            accusative: {
              singular: { word: "Some singular", unnused: false },
              plural: { word: "Some plural", unnused: false },
            },
            instrumental: {
              singular: { word: "Some singular", unnused: false },
              plural: { word: "Some plural", unnused: false },
            },
            prepositional: {
              singular: { word: "Some singular", unnused: false },
              plural: { word: "Some plural", unnused: false },
            },
          },
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="w-full h-full z-10">
      <div className="grid grid-cols-5 gap-3 place-items-center">
        <Vocabulary_Card data={bayas} />
        <Vocabulary_Card data={comida} />
        <Vocabulary_Card data={toronja} />
        <Vocabulary_Card data={kiwi} />
        <Vocabulary_Card data={semillas} />
        <Vocabulary_Card data={filete} />
        <Vocabulary_Card data={verde} />
        <Vocabulary_Card data={verde} />
        <Vocabulary_Card data={verde} />
        <Vocabulary_Card data={cereza} />
        <Vocabulary_Card data={bayas} />
      </div>
    </div>
  );
}

export default App;
