import { createContext, useContext, useEffect } from 'react';
import { LoadingContext } from '../Loading/LoadingContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  TUser,
  TUserLogin,
  TUserLoginReturn,
} from '../../interfaces/user.interfaces';
import { api } from '../../services/api';
import { UserContext } from '../User/UserContext';

export interface IAuthProviderProps {
  children: React.ReactNode;
}
export interface IAuthContextValues {
  login: (formData: TUserLogin) => Promise<void>;
  logOut: () => void;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const { setLoading } = useContext(LoadingContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const userToken = localStorage.getItem('@user:token');

    if (!userToken) setLoading(false);

    api.defaults.headers.common.authorization = `Bearer ${userToken}`;
    setLoading(false);
  }, []);

  // 1. Login (entrar)
  const login = async (formData: TUserLogin) => {
    try {
      setLoading(true);
      const { data } = await api.post<TUserLoginReturn>('/login', formData);
      const { token } = data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem('@user:token', data.token);
      localStorage.setItem('@user:id', data.user.id);

      toast.success('Login realizado com sucesso', {
        autoClose: 2000,
      });
      navigate('');
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 2. Auto-login
  useEffect(() => {
    const token = localStorage.getItem('@user:token');
    const userId = localStorage.getItem('@user:id');

    const autoLogin = async () => {
      try {
        if (api.defaults.headers.common.authorization) {
          const { data } = await api.get<TUser>(`/users/${userId}`);
          setUser(data);

          data.account_type.toLocaleUpperCase() === 'seller'
            ? navigate('/sellerHome')
            : navigate('/');

          data.account_type.toLocaleUpperCase() === 'buyer'
            ? navigate('/buyerHome')
            : navigate('/');
        }
      } catch (error) {
        toast.error('Algo deu errado', {
          autoClose: 2000,
        });

        const keysToRemove = ['@user:token', '@user:id'];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      }
    };

    if (token && userId) {
      autoLogin();
    }
  }, []);

  const logOut = () => {
    try {
      const keysToRemove = ['@user:token', '@user:id'];
      keysToRemove.forEach((key) => localStorage.removeItem(key));

      toast.success('Sessão finalizada', {
        autoClose: 2000,
      });
      setUser(undefined);
      navigate('/');
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
