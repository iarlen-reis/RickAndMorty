import React, { useEffect } from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  SearchDetailsStyled,
  InfoContainer,
  CharacterContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";

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
    setCurrentPage,
  } = useCharacterContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (term === "") return navigate("/");

    setCurrentPage(1);
  }, [term]);

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
        {!error && (
          <Pagination
            pages={pagesSearch}
            getCharacters={getCharacters}
            getCharactersSearch={getCharactersSearch}
          />
        )}
      </SearchDetailsStyled>
    </ContainerStyled>
  );
};

export default SearchDetails;
