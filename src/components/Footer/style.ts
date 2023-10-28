import styled from 'styled-components';

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 1rem;

  position: relative;

  width: 100vw;
  height: 10%;
  padding: 2.5rem 2.5rem;

  background-color: ${({ theme }) => theme.colors.grey0};

  > a {
    width: 3.3125rem;
    height: 3.125rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey1};
    border: 2px solid ${({ theme }) => theme.colors.grey1};
    border-radius: 4px;

    scroll-behavior: smooth;
  }

  @media (max-width: 768px) {
    height: 12.5rem;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 2rem;
  }
`;

export const ImageStyle = styled.img`
  width: 9.5625rem;
  height: 1.6875rem;
  max-width: 100%;
`;

export const ParagraphStyle = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
