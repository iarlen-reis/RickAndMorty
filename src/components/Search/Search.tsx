import React from "react";

import { BsSearch } from "react-icons/bs";
import { FormStyled, InputStyled, ButtonStyled } from "./styles";

const Search = () => {
  return (
    <FormStyled>
      <InputStyled type="text" />
      <ButtonStyled type="submit">
        <BsSearch />
      </ButtonStyled>
    </FormStyled>
  );
};

export default Search;
