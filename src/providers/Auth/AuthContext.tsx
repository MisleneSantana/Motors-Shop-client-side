import { createContext, useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../Loading/LoadingContext';
import { useNavigate } from 'react-router-dom';
import {
  TUser,
  TUserLogin,
  TUserLoginReturn,
} from '../../interfaces/user.interfaces';
import { api } from '../../services/api';
import { IAuthContextValues, IAuthProviderProps } from './auth.props';
import { Toast } from '../../components/Toast';

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
      const response = await api
        .post<TUserLoginReturn>('/login', formData)
        .then((res) => {
          const data = res.data;

          const { token } = data;

          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem('@user:token', token);

          Toast({ message: 'Login realizado com sucesso', successful: true });
        })
        .catch((error) => {
          if (error.response.status == 401) {
            Toast({
              message: 'Credenciais inválidas.',
            });
          }
        });

      await autoLogin();
      return response;
    } catch (error) {
      Toast({ message: 'Não foi possível concluir sua solicitação.' });
    } finally {
      setLoading(false);
    }
  };

  // 2. Auto-login
  const autoLogin = async () => {
    const token = localStorage.getItem('@user:token');
    try {
      if (token) {
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
      Toast({ message: 'Não foi possível concluir sua solicitação.' });
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  // 3. Logout
  const logout = () => {
    const keysToRemove = ['@user:token', '@user:id'];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    Toast({ message: 'Logout realizado com sucesso', successful: true });
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
