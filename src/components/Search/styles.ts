import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.gap.regular};

  margin: 2rem 0;
`;

export const InputStyled = styled.input`
  padding: 1.8rem 2rem;
  height: 2rem;

  font-style: italic;

  border: none;
  border-radius: 4px;

  outline: none;

  color: ${({ theme }) => theme.colors.secundary};
  background: rgba(255, 255, 255, 0.6);

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 430px) {
    padding: 1.8rem 1rem;
  }
`;

interface IButtonProps {
  search: number;
}
export const ButtonStyled =
  styled.button <
  IButtonProps >
  `
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem 0.5rem;

  border: none;
  border-radius: 4px;

  cursor: ${(props) => (Number(props.search) > 0 ? "pointer" : "not-allowed")};

  transition: 0.5s;
  background: ${({ theme }) => theme.colors.quaternary};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${(props) => props.search > 0 && props.theme.colors.white};

    svg {
      color: ${(props) => props.search > 0 && props.theme.colors.black};
    }
  }
`;
