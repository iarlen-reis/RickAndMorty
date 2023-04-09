import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { CharacterStyled, DetailsStyled } from "./styles";

interface ICharacterProps {
  results: {
    id: number,
    image: string,
    name: string,
  };
}

const Character = (props: ICharacterProps) => {
  return (
    <CharacterStyled>
      <img src={props.results.image} alt={props.results.name} />
      <DetailsStyled>
        <h2>{props.results.name}</h2>
        <button>
          <AiOutlineInfoCircle />
          Detalhes
        </button>
      </DetailsStyled>
    </CharacterStyled>
  );
};

export default Character;
