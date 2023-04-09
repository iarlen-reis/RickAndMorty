import React, { useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { UlStyled, LiStyled, PrevAndNextStyled } from "./styles";

import { useCharacterContext } from "../../contexts/CharacterContext";

const Pagination = () => {
  const { pages, getCharacters } = useCharacterContext();

  const [current, setCurrent] = useState(1);
  const [pagesShow] = useState(3);

  const totalPages = Math.ceil(pages.pages);
  const startPages = Math.max(1, current - Math.floor(pagesShow / 2));
  const endPages = Math.min(totalPages, startPages + pagesShow + 1);

  const pageNumbers = [];
  for (let i = startPages; i <= endPages; i++) {
    pageNumbers.push(i);
  }

  function handlePageClick(page: number) {
    setCurrent(page);
    getCharacters(page);
  }

  return (
    <UlStyled>
      {current !== 1 && (
        <PrevAndNextStyled onClick={() => handlePageClick(current - 1)}>
          <AiOutlineLeft />
        </PrevAndNextStyled>
      )}
      {pageNumbers.map((page) => (
        <LiStyled key={page} current={current === page}>
          <button onClick={() => handlePageClick(page)}>{page}</button>
        </LiStyled>
      ))}
      {current !== totalPages && (
        <PrevAndNextStyled onClick={() => handlePageClick(current + 1)}>
          <AiOutlineRight />
        </PrevAndNextStyled>
      )}
    </UlStyled>
  );
};

export default Pagination;
