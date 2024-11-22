import React from "react";
import Celda from "./Celda";

// Define las declinaciones de un caso gramatical
interface Word {
  word: string;
  unnused: boolean;
}

// Define los casos gramaticales (nominativo, genitivo, etc.)
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

// Define una palabra con género, si es declinable y sus declinaciones.

interface Words {
  gender: number; // Puedes usar un enum si los valores de género son fijos
  declinable: boolean;
  declinations: Cases;
}

// Define las variantes de traducción de una palabra.

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

function Prueba({ data }: { data: Vocabutary_Data }) {
  const num_variants = data.variants.length;

  return (
    <div
      className={`my-2 bg-white border-2 border-gray-400 rounded-xl ${num_variants < 2 ? "w-40" : "w-fit"} h-fit place-items-center`}
    >
      {/* Image */}

      <img
        src={data.image}
        className="object-contain rounded-xl pt-2 px-2 h-32"
      />

      {/* Variants Mapping */}

      <div className={`grid grid-cols-${num_variants} gap-0.5 bg-black`}>
        {data.variants.map((variant, index) => {
          return (
            <div key={index}>
              {/* Title */}
              <Celda
                texto={data.title}
                texto_2={`(${variant.annotation})`}
                className="h-fit"
              />

              {/* Table Header */}
              <div className="flex">
                <Celda
                  texto="Singular"
                  className="bg-singular-primario-base text-white text-xs"
                />
                <Celda
                  texto="Plural"
                  className="bg-plural-primario-base text-white text-xs"
                />
              </div>

              {data.variants[index].words.map((word, index) => {
                return (
                  <div key={index} className="flex">
                    <Celda texto={word.declinations.nominative.singular.word} />
                    <Celda texto={word.declinations.nominative.plural.word} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Prueba;
