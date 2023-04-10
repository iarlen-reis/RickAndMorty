import styled from "styled-components";

export const SearchDetailsStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.regular};
  font-family: ${({ theme }) => theme.family.itim};

  margin-top: 1rem;

  h1 {
    padding: 0.7rem;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secundary};
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
