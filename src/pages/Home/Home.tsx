import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled, CharacterContainer } from "./styles";

import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";

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
        <Search />
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
