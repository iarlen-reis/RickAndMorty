import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled, CharacterContainer } from "./styles";

import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";

import { useCharacterContext } from "../../contexts/CharacterContext";

const Home = () => {
  const { getCharacters, loading, characters, pages, setCurrentPage } =
    useCharacterContext();

  useEffect(() => {
    getCharacters();
    setCurrentPage(1);
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
      <Pagination pages={pages} getCharacters={getCharacters} />
    </ContainerStyled>
  );
};

export default Home;
