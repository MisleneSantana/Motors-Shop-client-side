import { createContext, useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../Loading/LoadingContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  TUser,
  TUserLogin,
  TUserLoginReturn,
} from '../../interfaces/user.interfaces';
import { api } from '../../services/api';
import { IAuthContextValues, IAuthProviderProps } from './auth.props';

export const AuthContext = createContext<IAuthContextValues>(
  {} as IAuthContextValues
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<TUser | undefined>({} as TUser);
  const { setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@user:token');

    if (!token) return setLoading(false);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  // 1. Login (entrar)
  const login = async (formData: TUserLogin) => {
    try {
      setLoading(true);
      const { data } = await api.post<TUserLoginReturn>('/login', formData);
      const { token } = data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('@user:token', token);

      toast.success('Login realizado com sucesso', {
        autoClose: 2000,
      });

      await autoLogin();
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Auto-login
  const autoLogin = async () => {
    try {
      if (api.defaults.headers.common.authorization) {
        const { data } = await api.get<TUser>(`/users/logged`);
        localStorage.setItem('@user:id', data.id);
        setUser(data);

        data.account_type.toLocaleLowerCase() === 'seller'
          ? navigate('/sellerHome')
          : navigate('/buyerHome');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  // 3. Logout
  const logout = () => {
    const keysToRemove = ['@user:token', '@user:id'];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    toast.success('Logout realizado com sucesso!', {
      autoClose: 2000,
    });
    setTimeout(() => {
      setUser(undefined);
      navigate('/');
    }, 2000);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
