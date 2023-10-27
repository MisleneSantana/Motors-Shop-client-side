import styled from 'styled-components';

export const SellerDashboardDivStyle = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SellerDashboardMainStyle = styled.main`
  width: 100vw;
  // height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.grey8};
`;
