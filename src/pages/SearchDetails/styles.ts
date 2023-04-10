import styled from "styled-components";

export const SearchDetailsStyled = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const InfoContainer = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.family.itim};

  margin-top: 2rem;

  h1 {
    padding: 0.7rem;

    font-size: ${({ theme }) => theme.font.big};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secundary};
  }

  @media (max-width: 550px) {
    h1 {
      font-size: ${({ theme }) => theme.font.regular};
    }
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.big};
  flex-wrap: wrap;

  margin: 2rem 0;
`;
