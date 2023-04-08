import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 10rem;

  background: ${({ theme }) => theme.colors.quaternary};
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.big};
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.regular};

  list-style: none;

  li {
    font-size: ${({ theme }) => theme.font.regular};
  }
`;

export const DevelopedBy = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.regular};
    color: ${({ theme }) => theme.colors.white};
  }
`;
