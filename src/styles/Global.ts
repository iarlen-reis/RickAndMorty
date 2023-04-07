import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.family.poppins};
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }

    .active {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.6rem;

        font-weight: bold;

        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};
    }
`;

export const ContainerStyled = styled.main`
  width: 100%;
  max-width: 1200px;
  height: 90vh;

  padding: 0 2rem;
  margin: 0 auto;
`;
