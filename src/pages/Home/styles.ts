import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;
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
