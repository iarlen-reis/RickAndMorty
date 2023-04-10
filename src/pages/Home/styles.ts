import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.gap.big};
`;

export const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.big};
  flex-wrap: wrap;

  margin-bottom: 5rem;
`;
