import React from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled, CharacterContainer } from "./styles";

import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Página Home</h1>
        <p>Olá! Eu sou a página principal!</p>
        <CharacterContainer>
          <Character />
          <Character />
          <Character />
          <Character />
        </CharacterContainer>
      </HomeStyled>
      {/* <Pagination /> */}
    </ContainerStyled>
  );
};

export default Home;
