import { createContext, useContext } from 'react';
import { api } from '../../services/api';
import {
  TUser,
  TUserRead,
  TUserRegisterRequest,
  TUserResponse,
  TUserUpdate,
} from '../../interfaces/user.interfaces';
import { toast } from 'react-toastify';
import { LoadingContext } from '../Loading/LoadingContext';
import { useNavigate } from 'react-router-dom';
import { userUpdateSchema } from '../../schemas/user.schema';
import { AuthContext } from '../Auth/AuthContext';

export interface IUserProviderProps {
  children: React.ReactNode;
}
export interface IUserContextValues {
  registerUser: (formData: TUserRegisterRequest) => Promise<void>;
  getUsers: () => Promise<TUserRead | undefined>;
  getUser: (userId: string) => Promise<TUser | undefined>;
  updateUserProfileOrAddress: (
    formData: TUserUpdate,
    userId: string
  ) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
}

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const { setLoading } = useContext(LoadingContext);
  const { setUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 1. Cadastrar (users)
  const registerUser = async (formData: TUserRegisterRequest) => {
    try {
      setLoading(true);
      await api
        .post<TUserResponse>('/users', formData)
        .then(() => {
          // createAccountModal(!createAccountModal);
          toast.success('Cadastro realizado com sucesso!', {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        })
        .catch((error) => {
          if (error.response.status == 409) {
            toast.error('Este e-mail já possui cadastro.');
          }
        });
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 2. Listar users cadastrados (users)
  const getUsers = async (): Promise<TUserRead | undefined> => {
    try {
      const { data } = await api.get<TUserRead>(`/users`);
      return data;
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 3. User by ID (userId)
  const getUser = async (userId: string): Promise<TUser | undefined> => {
    try {
      const { data } = await api.get<TUser>(`/users/${userId}`);
      return data;
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 4. Atualizar perfil / address (users)
  const updateUserProfileOrAddress = async (
    formData: TUserUpdate,
    userId: string
  ) => {
    const userToken = localStorage.getItem('@user:token');
    try {
      const { data } = await api.patch<TUser>(
        `/users/${userId}`,
        userUpdateSchema.parse(formData),
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      data.name
        ? toast.success('Perfil atualizado com sucesso!', {
            autoClose: 2000,
          })
        : toast.success('Endereço atualizado com sucesso!', {
            autoClose: 2000,
          });
      setUser(data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 5. Deletar conta (users)
  const deleteUser = async (userId: string) => {
    const userToken = localStorage.getItem('@user:token');
    try {
      await api.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      toast.success('Conta excluída com sucesso!', {
        autoClose: 2000,
      });
      logout();
    } catch (err) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        getUsers,
        getUser,
        updateUserProfileOrAddress,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};