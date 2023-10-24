import styled from 'styled-components';

export const HeaderStyle = styled.header`
  border: 2px solid red;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  z-index: 1;
  inset: 0;
  padding: 0 3.75rem;
  background-color: ${({ theme }) => theme.colors.grey10};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey6};
`;

export const DivStyle = styled.div`
  display: flex;
  align-items: center;
  width: 9.6875rem;

  & > img {
    cursor: pointer;
    max-width: 100%;
    width: 10rem;
    height: 1.6875rem;
  }
`;

export const NavBarStyle = styled.nav`
  width: 21.25rem;
  height: 100%;
  position: relative;
  display: flex;
  gap: 44px;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey10};
  border-left: 2px solid ${({ theme }) => theme.colors.grey6};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonStyle = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 0.25rem;
  border: 0.1rem solid transparent;
  background-color: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.heading_600_16};
  color: ${({ theme }) => theme.colors.grey0};

  & > .login__button {
    color: ${({ theme }) => theme.colors.brand1};
  }

  & > .register__button {
    color: ${({ theme }) => theme.colors.grey0};
    border: 2px solid ${({ theme }) => theme.colors.grey6};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey10};
    border: 2px solid ${({ theme }) => theme.colors.grey6};
    color: ${({ theme }) => theme.colors.brand1};
  }
`;
