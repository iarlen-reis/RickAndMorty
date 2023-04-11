import React, { createContext, useContext, useState } from "react";
import { AxiosAPI } from "../services/api";

interface IChildren {
  children: React.ReactNode;
}

interface ICharacters {
  id: number;
  name: string;
  image: string;
}

interface IPages {
  pages: number;
  next: string | null;
  prev: string | null;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string,
  };
  image: string;
}

const initialState = {
  characters: [],
  getCharacters: () => ({}),
  loading: true,
  pages: {
    pages: 1,
    next: "",
    prev: "",
  },
  getCharactersSearch: () => ({}),
  searchResults: [],
  error: false,
  pagesSearch: {
    pages: 1,
    next: "",
    prev: "",
  },
  term: "",
  setTerm: () => ({}),
  loadingSearch: true,
  currentPage: 1,
  setCurrentPage: () => ({}),
  character: {
    id: 0,
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {
      name: "",
    },
    image: "",
  },
  getCharacter: () => ({}),
  characterLoading: false,
};

interface ICharactersContext {
  characters: ICharacters[];
  getCharacters: (page?: number) => void;
  loading: boolean;
  pages: IPages;
  getCharactersSearch: (search: string, page?: number) => void;
  searchResults: ICharacters[];
  error: boolean;
  pagesSearch: IPages;
  term: string;
  setTerm: (string: string) => void;
  loadingSearch: boolean;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  character: ICharacter;
  getCharacter: (id: number) => void;
  characterLoading: boolean;
}

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
  const [loadingSearch, setLoadingSearch] = useState(
    initialState.loadingSearch,
  );
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);

  const [character, setCharacter] = useState(initialState.character);
  const [characterLoading, setCharacterLoading] = useState(
    initialState.characterLoading,
  );

  const getCharacters = async (page?: number) => {
    setLoading(true);
    try {
      const data = await AxiosAPI.get(`${page ? `?page=${page}` : "/"}`);

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
    setLoadingSearch(true);
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
      setLoadingSearch(false);
    }
  };

  const getCharacter = async (id: number) => {
    setCharacterLoading(true);
    try {
      const data = await AxiosAPI.get(`/${id}`);

      const response = await data.data;

      setCharacter(response);
    } catch (error) {
      console.log(error);
    } finally {
      setCharacterLoading(false);
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
        loadingSearch,
        currentPage,
        setCurrentPage,
        character,
        getCharacter,
        characterLoading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
