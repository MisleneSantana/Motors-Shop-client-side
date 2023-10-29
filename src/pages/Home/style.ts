import styled from 'styled-components';

export const HomeDivStyle = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HomeMainStyle = styled.main`
  // border: 1px solid blue;
  width: 100vw;
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const BoxBackgroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100vw;
  height: 34rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.brand1};
  background-image: url(src/assets/images/capa_7.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;

  & > h1 {
    font-size: 44px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};

    strong {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  & > p {
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 3rem;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }

    @media (max-width: 375px) {
      font-size: 0.75rem;
    }
  }
`;

export const BoxListStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  div {
    margin: 0;
  }
`;
