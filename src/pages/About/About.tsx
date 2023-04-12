import React from "react";

import { ContainerStyled } from "../../styles/Global";

import { AboutStyled, InfoStyled, SectionStyled, ImageStyled } from "./styles";

import ImageAbout from "/about/protal-2.png";

function About() {
  return (
    <ContainerStyled>
      <AboutStyled>
        <InfoStyled>
          <SectionStyled>
            <h1>O que é rick and Morty?</h1>
            <p>
              Rick and Morty é uma animação da Cartoon Network, que mostra a
              história de um avó (Rick) e seu neto (Morty) que fazem diversas
              viagens tempo-espaço e por universos paralelos.
            </p>
          </SectionStyled>
          <SectionStyled>
            <h1>Qual o intuito do site?</h1>
            <p>
              O intuito da aplicação é exibir informações sobre a animação,
              como, por exemplo, listar todos os personagens existentes na
              animação. Na aplicação também é possível ver os detalhes de cada
              personagem, como, sua espécie, seu gênero e seu status atual.
            </p>
          </SectionStyled>
          <SectionStyled>
            <h2>Qual a API utilizada?</h2>
            <p>
              A aplicação utiliza a API do{" "}
              <a
                href="https://rickandmortyapi.com/documentation"
                target="_blank"
                rel="noreferrer"
              >
                RickAndMortyAPI
              </a>{" "}
              para buscar as informações disponibilizadas no site, a API é feita
              no formato REST e GraphQL.
            </p>
          </SectionStyled>
        </InfoStyled>
        <ImageStyled>
          <img src={ImageAbout} alt="" />
        </ImageStyled>
      </AboutStyled>
    </ContainerStyled>
  );
}

export default About;
