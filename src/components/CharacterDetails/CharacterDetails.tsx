import React, { useState } from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  CharacterDetailsStyled,
  TitleStyled,
  ImageStyled,
  InfoStyled,
} from "./styles";

const CharacterDetails = () => {
  const [status] = useState("Dead");

  return (
    <ContainerStyled>
      <CharacterDetailsStyled>
        <TitleStyled>Rick Sanchez</TitleStyled>
        <ImageStyled
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
        <InfoStyled status={status}>
          <ul>
            <li>
              Status: <span>Alive</span>
            </li>
            <li>
              Type: <span>Human</span>
            </li>
          </ul>
          <ul>
            <li>
              Gender: <span>Male</span>
            </li>
            <li>
              Origin: <span>Earth</span>
            </li>
          </ul>
        </InfoStyled>
      </CharacterDetailsStyled>
    </ContainerStyled>
  );
};

export default CharacterDetails;
