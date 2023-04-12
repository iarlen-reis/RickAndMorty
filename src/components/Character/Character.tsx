import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { CharacterStyled, DetailsStyled } from "./styles";

import { addEllipsis } from "../../utils/addElipsis";

import { ICharacterProps } from "../../types/Characters";

const Character = (props: ICharacterProps) => {
  const navigate = useNavigate();

  const handleCharacter = () => {
    navigate(`/character/${props.results.id}`);
  };

  return (
    <CharacterStyled>
      <img src={props.results.image} alt={props.results.name} />
      <DetailsStyled>
        <h2>{addEllipsis(props.results.name)}</h2>
        <button onClick={handleCharacter}>
          <AiOutlineInfoCircle />
          Detalhes
        </button>
      </DetailsStyled>
    </CharacterStyled>
  );
};

export default Character;
