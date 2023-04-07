import React from "react";

import { Link, NavLink } from "react-router-dom";

import {
  FooterStyled,
  FooterContainer,
  InfoContainer,
  UlStyled,
  DevelopedBy,
} from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <InfoContainer>
          <UlStyled>
            <li>
              <Link to="#" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                API
              </Link>
            </li>
          </UlStyled>
        </InfoContainer>
        <DevelopedBy>
          <p>
            Feito por{" "}
            <Link to="#" target="_blank">
              Iarlen Reis
            </Link>
            .
          </p>
        </DevelopedBy>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
