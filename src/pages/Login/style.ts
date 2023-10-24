import styled from 'styled-components';

export const LoginDivStyle = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LoginMainStyle = styled.main`
  margin-top: 80px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.grey10};
`;
