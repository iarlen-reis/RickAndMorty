import { IPages } from "./Characters";

export interface IPaginationProps {
  pages: IPages;
  getCharacters: (page: number) => void;
  getCharactersSearch?: (search: string, page: number) => void;
}
