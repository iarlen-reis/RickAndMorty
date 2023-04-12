import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;

  padding-top: 3rem;

  gap: ${({ theme }) => theme.gap.regular};

  @media (max-width: 1070px) {
    flex-direction: column;

    gap: ${({ theme }) => theme.gap.small};
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.big};
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.regular};

  color: ${({ theme }) => theme.colors.white};

  h1,
  h2 {
    font-family: ${({ theme }) => theme.family.itim};
  }

  h1 {
    font-size: ${({ theme }) => theme.font.superBig};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.big};
  }

  p {
    max-width: 700px;
    font-size: ${({ theme }) => theme.font.regular};
  }

  a {
    font-weight: 700;

    padding: 0.1rem 0.6rem;
    border-radius: 4px;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secundary};

    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: ${({ theme }) => theme.font.big};
    }

    h2 {
      font-size: ${({ theme }) => theme.font.superRegular};
    }

    p {
      font-size: ${({ theme }) => theme.font.small};
    }
  }
`;

export const ImageStyled = styled.div`
  width: 40%;

  img {
    max-width: 100%;
  }

  @media (max-width: 1070px) {
    width: 80%;
    margin: 0 auto;
  }
`;
