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
import { userUpdateSchema } from '../../schemas/user.schema';
import { AuthContext } from '../Auth/AuthContext';
import { ModalContext } from '../Modal/ModalContext';
import { IUserContextValues, IUserProviderProps } from './user.props';
import { Toast } from '../../components/Toast';

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const { setLoading } = useContext(LoadingContext);
  const { setUser, logout } = useContext(AuthContext);
  const { setIsCreateAccountModalOpen } = useContext(ModalContext);

  // 1. Cadastrar (users)
  const registerUser = async (formData: TUserRegisterRequest) => {
    try {
      setLoading(true);

      const response = await api
        .post<TUserResponse>('/users', formData)
        .then((res) => {
          const data = res.data;
          setIsCreateAccountModalOpen(true);
          return data;
        })
        .catch((error) => {
          if (error.response.status == 409) {
            Toast({
              message: 'Este e-mail já possui cadastro.',
              successful: true,
            });
          }
        });
      return response;
    } catch (error) {
      Toast({
        message: 'Não foi possível concluir sua solicitação.',
      });
      console.log(error);
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
