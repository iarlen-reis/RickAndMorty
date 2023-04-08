import React from "react";

import { CharacterStyled, DetailsStyled } from "./styles";

const Character = () => {
  return (
    <CharacterStyled>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt=""
      />
      <DetailsStyled>
        <h2>Rick Sanchez</h2>
        <button>Detalhes</button>
      </DetailsStyled>
    </CharacterStyled>
  );
};

export default Character;
