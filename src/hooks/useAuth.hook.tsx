import { useContext } from 'react';
import { AuthContext } from '../providers/Auth/AuthContext';

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
