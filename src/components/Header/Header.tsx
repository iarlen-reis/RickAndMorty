import React, { useState } from "react";

import { NavLink, Outlet, Link } from "react-router-dom";

import { VscGithub } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import Logo from "/logo/logo-2.png";

import {
  HeaderStyled,
  HeaderContainer,
  LogoStyled,
  MenuContainer,
  NavStyled,
  MenuMobileStyled,
} from "./styled";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const MenuMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Link to="/">
            <LogoStyled src={Logo} alt="Logo Rick and morty" />
          </Link>
          <MenuContainer mobile={mobile}>
            <NavStyled>
              <ul>
                <li onClick={MenuMobile}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={MenuMobile}>
                  <NavLink to="/about">Sobre</NavLink>
                </li>
              </ul>
            </NavStyled>
            <NavStyled>
              <ul>
                <li onClick={MenuMobile}>
                  <a
                    href="https://github.com/iarlen-reis/RickAndMorty"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <VscGithub size={30} />
                  </a>
                </li>
                <li onClick={MenuMobile}>
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
          <MenuMobileStyled>
            {mobile ? (
              <RiCloseFill onClick={MenuMobile} />
            ) : (
              <RiMenu3Fill onClick={MenuMobile} />
            )}
          </MenuMobileStyled>
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
