// types.ts

// Define las declinaciones de un caso gramatical
interface Declination {
  word: string;
  unnused: boolean;
}

// Define los casos gramaticales (nominativo, genitivo, etc.)
interface Cases {
  nominative: {
    singular: Declination;
    plural: Declination;
  };
  genitive: {
    singular: Declination;
    plural: Declination;
  };
  dative: {
    singular: Declination;
    plural: Declination;
  };
  accusative: {
    singular: Declination;
    plural: Declination;
  };
  instrumental: {
    singular: Declination;
    plural: Declination;
  };
  prepositional: {
    singular: Declination;
    plural: Declination;
  };
}

// Define una palabra con género, si es declinable y sus declinaciones
interface Word {
  gender: number; // Puedes usar un enum si los valores de género son fijos
  declinable: boolean;
  declinations: Cases;
}

// Define las variantes
interface Variant {
  annotation: string;
  words: Word[];
}

// Define la estructura principal
export interface Structure {
  image: string;
  title: string;
  variants: Variant[];
}

import React from "react";
import { Structure } from "./types";

interface Props {
  data: Structure;
}

const ExampleComponent: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} />
      {data.variants.map((variant, variantIndex) => (
        <div key={variantIndex}>
          <h2>Annotation: {variant.annotation}</h2>
          {variant.words.map((word, wordIndex) => (
            <div key={wordIndex}>
              <p>Gender: {word.gender}</p>
              <p>Declinable: {word.declinable ? "Yes" : "No"}</p>
              <div>
                <h3>Declinations:</h3>
                {Object.entries(word.declinations).map(
                  ([caseName, caseValue]) => (
                    <div key={caseName}>
                      <h4>{caseName}</h4>
                      <p>Singular: {caseValue.singular.word}</p>
                      <p>Plural: {caseValue.plural.word}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
