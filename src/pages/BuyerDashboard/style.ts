import styled from 'styled-components';

export const BuyerDashboardDivStyle = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BuyerDashboardMainStyle = styled.main`
  width: 100vw;
  align-items: center;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.grey8};
`;

export const SpanBackgroundStyle = styled.div`
  display: flex;

  width: 100vw;
  height: 22.3125rem;
  background-color: ${({ theme }) => theme.colors.brand1};
`;