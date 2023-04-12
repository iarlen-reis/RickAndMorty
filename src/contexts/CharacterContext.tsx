import React, { createContext, useContext, useState } from "react";

import {
  IChildren,
  initialState,
  ICharactersContext,
} from "../types/Characters";

import { AxiosAPI } from "../services/api";

export const CharacterContext = createContext<ICharactersContext>(initialState);

export const CharactersProvider = ({ children }: IChildren) => {
  const [characters, setCharacters] = useState(initialState.characters);
  const [loading, setLoading] = useState(initialState.loading);
  const [pages, setPages] = useState(initialState.pages);
  const [searchResults, setSearchResults] = useState(
    initialState.searchResults,
  );
  const [error, setError] = useState(initialState.error);
  const [pagesSearch, setPagesSearch] = useState(initialState.pagesSearch);
  const [term, setTerm] = useState(initialState.term);
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);

  const [character, setCharacter] = useState(initialState.character);

  const getCharacters = async (page?: number) => {
    setLoading(true);

    try {
      const data = await AxiosAPI.get(
        `${page ? `?page=${page}` : `?page=${currentPage}`}`,
      );

      const response = await data.data;

      setCharacters(response.results);
      setPages(response.info);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getCharactersSearch = async (search: string, page?: number) => {
    setLoading(true);
    setError(initialState.error);

    if (search) {
      setCurrentPage(1);
      setSearchResults(initialState.searchResults);
    }

    try {
      const data = await AxiosAPI.get(
        `${page ? `?page=${page}&name=${search}` : `?name=${search}`} `,
      );

      const response = await data.data;

      setSearchResults(response.results);
      setPagesSearch(response.info);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getCharacter = async (id: number) => {
    setLoading(true);
    try {
      const data = await AxiosAPI.get(`/${id}`);

      const response = await data.data;

      setCharacter(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        getCharacters,
        loading,
        pages,
        getCharactersSearch,
        searchResults,
        pagesSearch,
        error,
        term,
        setTerm,
        currentPage,
        setCurrentPage,
        character,
        getCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
