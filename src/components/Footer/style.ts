import styled from 'styled-components';

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 1rem;

  position: relative;

  width: 100vw;
  height: 10%;
  padding: 2.5rem 2.5rem;

  background-color: ${({ theme }) => theme.colors.grey0};

  @media (max-width: 768px) {
    height: 12rem;
    flex-direction: column;
    gap: 1rem;

    padding: 2.5rem 0rem;
  }
`;

export const BoxFooterItemsStyle = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    width: 2.8125rem;
    height: 2.8125rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey1};
    border: 2px solid ${({ theme }) => theme.colors.grey1};
    border-radius: 4px;

    scroll-behavior: smooth;

    @media (max-width: 768px) {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const ImageStyle = styled.img`
  width: 9.5625rem;
  height: 1.6875rem;
  max-width: 100%;

  @media (max-width: 768px) {
    height: 2.375rem;
    width: 6.25rem;
  }
`;

export const ParagraphStyle = styled.p`
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
