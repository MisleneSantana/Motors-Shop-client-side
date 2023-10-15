import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { IRegisterUserFormValues } from '../../components/Form/RegisterForm';
import {
  TUser,
  TUserLogin,
  TUserLoginResponse,
  TUserRegisterRequest,
  TUserResponse,
} from '../../interfaces/user.interfaces';
import { TLoginFormSchema } from '../../components/Form/LoginForm/LoginFormSchema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRequest } from '../../hooks/useRequest.hook';

export interface IUserProviderProps {
  children: React.ReactNode;
}
export interface IUserContext {
  user: TUser | undefined;
  login: (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  registerUser: (
    formData: TUserRegisterRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  updateUserProfile: (
    userEditFormData: IRegisterUserFormValues
  ) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUser | undefined>({} as TUser);
  const request = useRequest();

  // 1. Cadastrar (user)
  const registerUser = async (formData: TUserRegisterRequest) => {
    await request({
      tryFunction: async () => {
        const response = await api.post<TUserResponse>('/users', formData);
        const newUser = response.data;

        toast.success('Cadastro realizado', {
          autoClose: 2000,
        });
      },
      errorFunction: () => {
        toast.error('Algo deu errado', {
          autoClose: 2000,
        });
      },
    });
  };

  // 1. Auto-login
  useEffect(() => {
    const userToken = localStorage.getItem('@user:token');
    const userId = localStorage.getItem('@user:id');

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(data);

        if (data.account_type.toLocaleUpperCase() === 'seller') {
          navigate('/sellerHome');
        }

        if (data.account_type.toLocaleUpperCase() === 'buyer') {
          navigate('/buyerHome');
        }
      } catch (error) {
        console.log(error);

        const keysToRemove = [
          '@user:token',
          '@user:id',
          '@user:account_type',
          '@user:sellerName',
          '@user:sellerEmail',
          '@user:buyerName',
          '@user:sellerEmail',
        ];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      }
    };

    if (userToken && userId) {
      userAutoLogin();
    }
  }, []);

  // 2. Login (entrar)
  const login = async (
    formData: TUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (location === '/login') {
      try {
        setLoading(true);
        const { data } = await api.post<TUserLoginResponse>('/login', formData);

        if (data.user.account_type.toLocaleUpperCase() === 'seller') {
          localStorage.setItem('@user:token', data.token);
          localStorage.setItem('@user:id', JSON.stringify(data.user.id));
          localStorage.setItem('@user:account_type', data.user.account_type);
          localStorage.setItem('@user:sellerName', data.user.name);
          localStorage.setItem('@user:sellerEmail', data.user.email);
          setUser(data.user);

          toast.success('Login realizado com sucesso', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/sellerHome');
          }, 2000);
        }

        if (data.user.account_type.toLocaleUpperCase() === 'buyer') {
          localStorage.setItem('@user:token', data.token);
          localStorage.setItem('@user:id', JSON.stringify(data.user.id));
          localStorage.setItem('@user:account_type', data.user.account_type);
          localStorage.setItem('@user:buyerName', data.user.name);
          localStorage.setItem('@user:buyerEmail', data.user.email);
          setUser(data.user);

          toast.success('Login realizado com sucesso', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/buyerHome');
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        toast.error('Oops! Algo deu errado tente novamente', {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // 3. Atualizar perfil (user)
  const updateUserProfile = async (
    userEditFormData: IRegisterUserFormValues
  ) => {
    const userId = localStorage.getItem('@user:id');
    const userToken = localStorage.getItem('@user:token');
    try {
      const { data } = await api.patch<IUser>(
        `/users/${userId}`,
        userEditFormData,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setUser(data);
      toast.success('Informações atualizadas com sucesso', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Oops! Algo deu errado tente novamente', {
        autoClose: 2000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, registerUser, login, updateUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
