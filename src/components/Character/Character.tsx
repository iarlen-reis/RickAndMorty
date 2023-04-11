import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const addEllipsis = (text: string) => {
    if (text.length <= 16) return text;

    return text.substring(0, 16) + "...";
  };

  const handleCharacter = () => {
    navigate(`/character/${props.results.id}`);
    window.scrollTo(0, 0);
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
