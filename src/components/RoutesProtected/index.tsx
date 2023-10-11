import { Navigate, Outlet } from 'react-router-dom';

export const RoutesProtected = () => {
  const userBuyerToken = localStorage.getItem('@userBuyer:token');
  const userSellerToken = localStorage.getItem('@userSeller:token');

  if (!userSellerToken && !userBuyerToken) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
