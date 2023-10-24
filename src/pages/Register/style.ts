import styled from 'styled-components';

export const RegisterDivStyle = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const RegisterMainStyle = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.grey10};
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
