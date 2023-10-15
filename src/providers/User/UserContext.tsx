import { createContext, useContext, useState } from 'react';
import { api } from '../../services/api';
import {
  TUser,
  TUserRegisterRequest,
  TUserResponse,
  TUserUpdate,
} from '../../interfaces/user.interfaces';
import { toast } from 'react-toastify';
import { LoadingContext } from '../Loading/LoadingContext';
import { useNavigate } from 'react-router-dom';

export interface IUserProviderProps {
  children: React.ReactNode;
}
export interface IUserContextValues {
  user: TUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  registerUser: (formData: TUserRegisterRequest) => Promise<void>;
  updateUserProfile: (formData: TUserUpdate) => Promise<void>;
}

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<TUser | undefined>({} as TUser);
  const { setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  // 1. Cadastrar (user)
  const registerUser = async (formData: TUserRegisterRequest) => {
    try {
      setLoading(true);
      await api.post<TUserResponse>('/users', formData);
      toast.success('Cadastro realizado com sucesso', {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 2. Atualizar perfil (user)
  const updateUserProfile = async (formData: TUserUpdate) => {
    const userId = localStorage.getItem('@user:id');
    const userToken = localStorage.getItem('@user:token');
    try {
      const { data } = await api.patch<TUser>(`/users/${userId}`, formData, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
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
      value={{ user, setUser, registerUser, updateUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
