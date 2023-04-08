import React from "react";

import { NavLink, Outlet } from "react-router-dom";

import { VscGithub } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

import Logo from "/logo/logo.png";

import {
  HeaderStyled,
  HeaderContainer,
  MenuContainer,
  NavStyled,
} from "./styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <h1>RickAndMorty</h1>
          <MenuContainer>
            <NavStyled>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Sobre</NavLink>
                </li>
              </ul>
            </NavStyled>
            <NavStyled>
              <ul>
                <li>
                  <a
                    href="https://github.com/iarlen-reis/RickAndMorty"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <VscGithub size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://rickandmortyapi.com/documentation/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbApi size={30} />
                  </a>
                </li>
              </ul>
            </NavStyled>
          </MenuContainer>
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
