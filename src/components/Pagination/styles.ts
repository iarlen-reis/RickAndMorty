import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  width: 40rem;

  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  list-style: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.quaternary};

  li:first-child,
  li:last-child {
    height: 2.5rem;
    width: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
  }
`;

interface ILiProps {
  current: boolean;
}

export const LiStyled =
  styled.li <
  ILiProps >
  `
  &:not(:first-child, :last-child) {
    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:first-child,
  &:last-child {
    height: 2.5rem;
    width: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
  }

  button {
    width: 100%;
    height: 100%;

    font-weight: ${(props) => props.current && "bold"};

    border-radius: 50%;

    cursor: pointer;

    border: none;


    color: ${({ theme }) => theme.colors.white};
    background: ${(props) =>
      props.current ? props.theme.colors.black : "transparent"};

  }
`;

export const PrevAndNextStyled = styled.li`
  cursor: pointer;
`;
