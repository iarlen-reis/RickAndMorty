import styled from "styled-components";

export const AboutContainerStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;
