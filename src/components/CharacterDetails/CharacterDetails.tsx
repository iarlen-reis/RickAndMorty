import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";
import Loading from "../Loading/Loading";

import { useParams } from "react-router-dom";

import {
  CharacterDetailsStyled,
  TitleStyled,
  ImageStyled,
  InfoStyled,
} from "./styles";

import { useCharacterContext } from "../../contexts/CharacterContext";

import { getFristName } from "../../utils/getFristName";

const CharacterDetails = () => {
  const { id } = useParams();

  const { getCharacter, character, characterLoading } = useCharacterContext();

  useEffect(() => {
    if (id) getCharacter(Number(id));
  }, [id]);

  if (characterLoading) return <Loading />;

  if (!character) return;

  return (
    <ContainerStyled>
      <CharacterDetailsStyled>
        <TitleStyled>{character.name}</TitleStyled>
        <ImageStyled src={character.image} alt={character.name} />
        <InfoStyled status={character.status}>
          <ul>
            <li>
              Status: <span>{character.status}</span>
            </li>
            <li>
              Specie: <span>{getFristName(character.species)}</span>
            </li>
          </ul>
          <ul>
            <li>
              Gender: <span>{character.gender}</span>
            </li>
            <li>
              Origin: <span>{getFristName(character.origin.name)}</span>
            </li>
          </ul>
        </InfoStyled>
      </CharacterDetailsStyled>
    </ContainerStyled>
  );
};

export default CharacterDetails;
