import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { FormStyled, InputStyled, ButtonStyled } from "./styles";

import { useCharacterContext } from "../../contexts/CharacterContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { getCharactersSearch, setTerm } = useCharacterContext();

  const navigate = useNavigate();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (!search) return;

    setTerm(search);
    getCharactersSearch(search);

    navigate("/search");
  };

  return (
    <FormStyled>
      <InputStyled
        type="text"
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
      <ButtonStyled search={search.length} type="submit" onClick={handleSearch}>
        <BsSearch />
      </ButtonStyled>
    </FormStyled>
  );
};

export default Search;
