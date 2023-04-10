import React from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  SearchDetailsStyled,
  InfoContainer,
  CharacterContainer,
} from "./styles";

import Character from "../../components/Character/Character";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

import { useCharacterContext } from "../../contexts/CharacterContext";

const SearchDetails = () => {
  const {
    searchResults,
    error,
    loading,
    pagesSearch,
    getCharacters,
    getCharactersSearch,
    term,
  } = useCharacterContext();

  if (loading) return <Loading />;

  return (
    <ContainerStyled>
      <SearchDetailsStyled>
        <InfoContainer>
          <h1>
            {error
              ? "Nenhum personagem encontrado."
              : `Resultados para: ${term}`}
          </h1>
        </InfoContainer>
        <CharacterContainer>
          {searchResults &&
            searchResults.map((result) => (
              <Character results={result} key={result.id} />
            ))}
        </CharacterContainer>
        <Pagination
          pages={pagesSearch}
          getCharacters={getCharacters}
          getCharactersSearch={getCharactersSearch}
        />
      </SearchDetailsStyled>
    </ContainerStyled>
  );
};

export default SearchDetails;
