import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 7rem;

  background: ${({ theme }) => theme.colors.tertiary};
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
`;

export const MenuContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

      color: ${({ theme }) => theme.colors.tertiary};

      a {
        color: ${({ theme }) => theme.colors.white};
        transition: 0.5s;

        &:hover {
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
`;
