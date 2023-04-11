import styled from "styled-components";

export const CharacterDetailsStyled = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.gap.big};
  padding: 1rem 0;
`;

export const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.superBig};
  font-family: ${({ theme }) => theme.family.itim};

  text-shadow: 2px 1px 10px ${({ theme }) => theme.colors.quaternary};

  color: ${({ theme }) => theme.colors.white};
`;

export const ImageStyled = styled.img`
  max-width: 350px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

interface IInfoProps {
  status: string;
}

export const InfoStyled =
  styled.div <
  IInfoProps >
  `
  display: flex;
  gap: 4rem;

  ul:nth-child(1) {
    li:first-child {
        span {
            padding: 0.1rem 0.3rem;
            border-radius: 4px;
            background: ${(props) => props.status === "Dead" && "red"};
        }
    }
  }


  ul {
    list-style: none;
    display: flex;
    flex-direction: column; 

    gap: ${({ theme }) => theme.gap.regular};

  }

  li {
    font-size: ${({ theme }) => theme.font.small};

    padding: 0.5rem 0.7rem;

    border-radius: 4px;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secundary};

    span {
      font-weight: 600;
    }
  }

  @media (max-width: 320px) {
    gap: 2rem;
  }
`;
