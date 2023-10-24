import { createContext, useContext } from 'react';
import { api } from '../../services/api';
import {
  TUser,
  TUserRead,
  TUserRegisterRequest,
  TUserResponse,
  TUserUpdate,
} from '../../interfaces/user.interfaces';
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
            });
          }
          if (error.response.status == 400) {
            Toast({
              message: 'CPF inválido.',
            });
          }
        });
      return response;
    } catch (error) {
      Toast({
        message: 'Não foi possível concluir sua solicitação.',
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
      Toast({ message: 'Não foi possível concluir sua solicitação.' });
    }
  };

  // 3. User by ID (userId)
  const getUser = async (userId: string): Promise<TUser | undefined> => {
    try {
      const { data } = await api.get<TUser>(`/users/${userId}`);
      return data;
    } catch (error) {
      Toast({ message: 'Não foi possível concluir sua solicitação.' });
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
        ? Toast({ message: 'Perfil atualizado com sucesso!', successful: true })
        : Toast({
            message: 'Endereço atualizado com sucesso!',
            successful: true,
          });
      setUser(data);
    } catch (error) {
      Toast({ message: 'Não foi possível concluir sua solicitação.' });
    }
  };

  // 5. Deletar conta (users)
  const deleteUser = async (userId: string) => {
    const userToken = localStorage.getItem('@user:token');
    try {
      await api.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      Toast({
        message: 'Conta excluída com sucesso!',
        successful: true,
      });
      logout();
    } catch (err) {
      Toast({
        message: 'Não foi possível concluir sua solicitação!',
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
