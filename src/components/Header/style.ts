import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 5rem;
  width: 100vw;

  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 1;
  inset: 0;

  background-color: ${({ theme }) => theme.colors.grey10};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey6};
`;

export const BoxHeaderItemsStyle = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const DivStyle = styled.div`
  display: flex;
  align-items: center;

  & > img {
    cursor: pointer;
    max-width: 100%;
    height: 1.6875rem;
    background: transparent;

    @media (max-width: 600px) {
      max-width: 80%;
    }
  }
`;

export const NavBarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  border-left: 2px solid ${({ theme }) => theme.colors.grey6};
  background-color: ${({ theme }) => theme.colors.grey10};

  @media (max-width: 500px) {
    border-left: none;
  }

  & > .login__button {
    height: 3rem;
    padding: 0.75rem 1.75rem;
    border: none;
    font-weight: 600;
    line-height: 28px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey2};

    @media (max-width: 500px) {
      display: none;
    }
  }

  & > .register__button {
    padding: 0.75rem 1.75rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.grey6};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 500px) {
      display: none;
    }

    @media (max-width: 600px) {
      padding: 0.75rem 1rem;
    }
  }

  & > .navbar-mobile__button {
    display: flex;
    width: 2rem;
    height: 2rem;
    color: #2c2c2c;

    @media (min-width: 501px) {
      display: none;
    }
  }

  & > .avatar-user__button {
    width: 32px;
    height: 32px;
    margin-left: 2rem;
    border-radius: 150px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.brand1};

    @media (max-width: 500px) {
      margin-left: 0rem;
    }
  }

  & > .username__button {
    background: transparent;
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: 400;
    line-height: 28px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  @media (max-width: 650px) {
    gap: 1rem;
  }
`;
