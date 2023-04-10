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

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem 0.5rem;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  transition: 0.5s;
  background: ${({ theme }) => theme.colors.quaternary};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
