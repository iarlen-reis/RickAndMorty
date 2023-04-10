import styled, { keyframes } from "styled-components";

export const MenuAnimation = keyframes`
    from {
        left: -100%;
    }

    to {
        left: 0;
    }
`;

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: 7rem;

  background: ${({ theme }) => theme.colors.quaternary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  margin: 0 auto;

  h1 {
    font-family: ${({ theme }) => theme.family.itim};
    font-size: ${({ theme }) => theme.font.superBig};

    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 1px 5px ${({ theme }) => theme.colors.black};
  }
`;

interface IMenuMobile {
  mobile: boolean;
}

export const MenuContainer =
  styled.div <
  IMenuMobile >
  `
  max-width: 70rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1040px) {
    width: 60rem;
  }

  @media (max-width: 920px) {
    width: 50rem;
  }

  @media (max-width: 840px) {
    width: 40rem;
  }

  @media (max-width: 700px) {
    width: 35rem;
  }

  @media (max-width: 680px) {
    height: 100vh;
    width: 100%;
    position: absolute;

    flex-direction: column;
    justify-content: center;

    display: ${(props) => (props.mobile ? "flex" : "none")};
    gap: ${({ theme }) => theme.gap.big};

    top: 7rem;
    left: 0;
    right: 0;

    animation: ${MenuAnimation} 1.7s ease-out;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavStyled = styled.nav`
  display: flex;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.gap.big};

    list-style: none;

    li {
      font-size: ${({ theme }) => theme.font.superRegular};
      font-family: ${({ theme }) => theme.family.itim};

      color: ${({ theme }) => theme.colors.white};

      a {
        color: ${({ theme }) => theme.colors.white};
        transition: 0.5s;

        &:hover {
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }

  @media (max-width: 680px) {
    :first-child ul {
      flex-direction: column;
      gap: ${({ theme }) => theme.gap.big};
    }
  }
`;

export const MenuMobileStyled = styled.div`
  display: none;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 680px) {
    display: flex;
  }
`;
