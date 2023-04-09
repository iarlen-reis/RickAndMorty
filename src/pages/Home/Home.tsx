import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled, CharacterContainer } from "./styles";

import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";
import Loading from "../../components/Loading/Loading";

import { useCharacterContext } from "../../contexts/CharacterContext";

const Home = () => {
  const { getCharacters, loading, characters } = useCharacterContext();

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Página Home</h1>
        <p>Olá! Eu sou a página principal!</p>
        <CharacterContainer>
          {characters.map((character) => (
            <Character results={character} key={character.id} />
          ))}
        </CharacterContainer>
      </HomeStyled>
      <Pagination />
    </ContainerStyled>
  );
};

export default Home;
