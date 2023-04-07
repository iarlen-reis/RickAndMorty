import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
