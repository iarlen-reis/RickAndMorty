import React from "react";
import { HomeStyled } from "./styles";

import { ContainerStyled } from "../../styles/Global";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Página Home</h1>
        <p>Olá! Eu sou a página principal!</p>
      </HomeStyled>
      <Pagination />
    </ContainerStyled>
  );
};

export default Home;
