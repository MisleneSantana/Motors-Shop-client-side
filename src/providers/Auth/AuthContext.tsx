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

export interface IAuthProviderProps {
  children: React.ReactNode;
}
export interface IAuthContextValues {
  user: TUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  login: (formData: TUserLogin) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextValues>(
  {} as IAuthContextValues
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<TUser | undefined>({} as TUser);
  const { setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  // 1. Login (entrar)
  const login = async (formData: TUserLogin) => {
    try {
      setLoading(true);
      const { data } = await api.post<TUserLoginReturn>('/login', formData);
      const { token } = data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('@user:token', token);
      localStorage.setItem('@user:id', data.user.id);

      toast.success('Login realizado com sucesso', {
        autoClose: 2000,
      });
      data.user.account_type.toLocaleLowerCase() === 'seller'
        ? navigate('/sellerHome')
        : navigate('/');
      data.user.account_type.toLocaleLowerCase() === 'buyer'
        ? navigate('/sellerHome')
        : navigate('/');
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 2. Auto-login
  // useEffect(() => {
  //   const token = localStorage.getItem('@user:token');
  //   const userId = localStorage.getItem('@user:id');

  //   const autoLogin = async () => {
  //     try {
  //       if (token) {
  //         const response = await api.get<TUser>(`/users/${userId}`, {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });
  //         setUser(response.data);

  //         response.data.account_type.toLocaleLowerCase() === 'seller'
  //           ? navigate('/sellerHome')
  //           : navigate('/');

  //         response.data.account_type.toLocaleLowerCase() === 'buyer'
  //           ? navigate('/buyerHome')
  //           : navigate('/');
  //       }
  //     } catch (error) {
  //       toast.error('Algo deu errado', {
  //         autoClose: 2000,
  //       });

  //       const keysToRemove = ['@user:token', '@user:id'];
  //       keysToRemove.forEach((key) => localStorage.removeItem(key));
  //     }
  //   };

  //   if (token && userId) {
  //     autoLogin();
  //   }
  // }, []);

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
