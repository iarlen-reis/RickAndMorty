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
};

interface ICharactersContext {
  characters: ICharacters[];
  getCharacters: (page?: number) => void;
  loading: boolean;
  pages: IPages;
}

export const CharacterContext = createContext<ICharactersContext>(initialState);

export const CharactersProvider = ({ children }: IChildren) => {
  const [characters, setCharacters] = useState(initialState.characters);
  const [loading, setLoading] = useState(initialState.loading);
  const [pages, setPages] = useState(initialState.pages);

  const getCharacters = async (page?: number) => {
    try {
      const data = await AxiosAPI.get(`${page ? `?page=${page}` : "/"}`);

      const response = await data.data;

      setCharacters(response.results);
      setPages(response.info);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <CharacterContext.Provider
      value={{ characters, getCharacters, loading, pages }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};
