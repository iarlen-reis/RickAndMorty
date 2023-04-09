import styled from "styled-components";

export const CharacterStyled = styled.div`
  width: 24.3%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.regular};

  padding: 0 0 1rem 0;

  border: 1px solid ${({ theme }) => theme.colors.quaternary};
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 1109px) {
    width: 32%;
  }

  @media (max-width: 740px) {
    width: 40%;
  }

  @media (max-width: 440px) {
    width: 90%;
  }
`;

export const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.gap.regular};

  h2 {
    font-size: ${({ theme }) => theme.font.superBig};
    font-family: ${({ theme }) => theme.family.itim};

    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: ${({ theme }) => theme.gap.regular};

    padding: 1rem 1rem;

    font-size: ${({ theme }) => theme.font.regular};
    font-weight: bold;

    border: none;

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
    }
  }

  @media (max-width: 590px) {
    h2 {
      font-size: ${({ theme }) => theme.font.big};
    }

    button {
      font-size: ${({ theme }) => theme.font.small};
    }
  }
`;
