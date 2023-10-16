import { Navigate, Outlet } from 'react-router-dom';

export const RoutesProtected = () => {
  const userToken = localStorage.getItem('@user:token');

  if (!userToken) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
