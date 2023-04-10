import React, { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { UlStyled, LiStyled, PrevAndNextStyled } from "./styles";

import { useCharacterContext } from "../../contexts/CharacterContext";

interface IPages {
  pages: number;
  next: string | null;
  prev: string | null;
}

interface IPaginationProps {
  pages: IPages;
  getCharacters: (page: number) => void;
  getCharactersSearch?: (search: string, page: number) => void;
}

const Pagination = ({
  pages,
  getCharacters,
  getCharactersSearch,
}: IPaginationProps) => {
  const { term, currentPage, setCurrentPage } = useCharacterContext();

  //   const [current, setCurrent] = useState(1);
  const [pagesShow] = useState(Math.min(3, pages.pages));

  const totalPages = pages.pages;
  const startPages = Math.max(1, currentPage - Math.floor(pagesShow / 2));
  const endPages = Math.min(totalPages, startPages + pagesShow + 1);

  const pageNumbers = [];
  for (let i = startPages; i <= endPages; i++) {
    pageNumbers.push(i);
  }

  //   function handlePageClick(page: number) {
  //     setCurrent(page);
  //     if (getCharactersSearch) {
  //       getCharactersSearch(term, page);
  //     } else {
  //       getCharacters(page);
  //     }
  //   }

  function handlePageClick(page: number) {
    if (page === currentPage) return; // não atualizar o estado se já estiver na página atual
    if (getCharactersSearch) {
      getCharactersSearch(term, page);
    } else {
      getCharacters(page);
    }
    setCurrentPage(page);
    console.log(page);
  }

  return (
    <UlStyled>
      {currentPage !== 1 && (
        <PrevAndNextStyled onClick={() => handlePageClick(currentPage - 1)}>
          <AiOutlineLeft />
        </PrevAndNextStyled>
      )}
      {pageNumbers.map((page) => (
        <LiStyled key={page} current={currentPage === page}>
          <button onClick={() => handlePageClick(page)}>{page}</button>
        </LiStyled>
      ))}
      {currentPage !== totalPages && (
        <PrevAndNextStyled onClick={() => handlePageClick(currentPage + 1)}>
          <AiOutlineRight />
        </PrevAndNextStyled>
      )}
    </UlStyled>
  );
};

export default Pagination;
