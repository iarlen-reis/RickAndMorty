import React from "react";
import { HomeStyled } from "./styles";

import { ContainerStyled } from "../../styles/Global";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Página Home</h1>
        <p>Olá! Eu sou a página principal!</p>
      </HomeStyled>
    </ContainerStyled>
  );
};

export default Home;
