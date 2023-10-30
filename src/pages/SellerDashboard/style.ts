import styled from 'styled-components';

export const SellerDashboardDivStyle = styled.div`
  margin: 0 auto;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const SellerDashboardMainStyle = styled.main`
  width: 100vw;
  align-items: center;


  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey8};
`;
