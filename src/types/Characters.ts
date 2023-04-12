/* eslint-disable prettier/prettier */

export interface IChildren {
  children: React.ReactNode;
}

export interface IPages {
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacters {
  id: number;
  name: string;
  image: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
}

export interface ICharacterProps {
  results: {
    id: number;
    image: string;
    name: string;
  };
}

export interface ICharactersContext {
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
  setCurrentPage: (page: number) => void;
  currentPage: number;
  character: ICharacter;
  getCharacter: (id: number) => void;
}

export const initialState = {
  characters: [],
  getCharacters: () => ({}),
  loading: true,
  pages: [] as unknown as IPages,
  getCharactersSearch: () => ({}),
  searchResults: [],
  error: false,
  pagesSearch: [] as unknown as IPages,
  term: "",
  setTerm: () => ({}),
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
};
