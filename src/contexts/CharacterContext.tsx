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

  const getCharacters = async (page?: number) => {
    try {
      const data = await AxiosAPI.get(`${page ? `?page=${page}` : "/"}`);

      const response = await data.data;

      window.scrollTo(0, 0);
      setCharacters(response.results);
      setPages(response.info);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    setLoading(false);
  };

  const getCharactersSearch = async (search: string, page?: number) => {
    try {
      const data = await AxiosAPI.get(
        `${page ? `?page=${page}&name=${search}` : `?name=${search}`} `,
      );

      const response = await data.data;

      window.scrollTo(0, 0);
      setSearchResults(response.results);
      setPagesSearch(response.info);
    } catch (error) {
      setError(true);
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
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
