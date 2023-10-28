import styled from 'styled-components';

export const HeaderStyle = styled.header`
  border: 2px solid red;
  width: 100%;
  // height: 80px;
  height: 8%;

  display: flex;
  // padding: 0rem 2rem;

  position: fixed;
  z-index: 1;
  inset: 0;

  background-color: ${({ theme }) => theme.colors.grey10};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey6};
`;

export const DivStyle = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 2rem;

  & > img {
    cursor: pointer;
    max-width: 100%;
    height: 1.6875rem;
    background: transparent;
  }
`;

export const NavBarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  margin-right: 2rem;
  // width: 20%;
  border-left: 2px solid ${({ theme }) => theme.colors.grey6};
  background-color: ${({ theme }) => theme.colors.grey10};

  @media (max-width: 768px) {
    width: 100%;
  }

  & > .login__button {
    height: 3rem;
    padding: 12px 28px;
    border: none;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey2};
  }

  & > .register__button {
    height: 3rem;
    padding: 0.75rem 1.75rem;
    color: ${({ theme }) => theme.colors.grey0};
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.grey2};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  // &:hover {
  //   background-color: ${({ theme }) => theme.colors.grey10};
  //   // border: 2px solid ${({ theme }) => theme.colors.grey6};
  //   color: ${({ theme }) => theme.colors.brand1};
  // }

  & > .avatar-user__button {
    width: 32px;
    height: 32px;
    margin-left: 2rem;
    border-radius: 150px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.brand1};
  }

  & > .username__button {
    background: transparent;
    color: ${({ theme }) => theme.colors.grey2};
  }
`;
