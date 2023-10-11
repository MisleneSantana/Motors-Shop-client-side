import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { TLoginFormSchema } from '../../components/Form/LoginForm/LoginFormSchema';
import { toast } from 'react-toastify';
import { IRegisterUserFormData } from '../../components/Form/RegisterForm';

export interface IUserProviderProps {
  children: React.ReactNode;
}
export interface IUserContext {
  user: IUser | null;
  login: (
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  register: (
    formData: IRegisterUserFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  updateUserProfile: (userEditFormData: IRegisterUserFormData) => Promise<void>;

  // logout: () => void;
  // isEditUserProfileModalOpen: boolean;
  // setIsEditUserProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  account_type: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birth_date: string;
  description: string | null;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string | null;
  account_type: string;
  password: string;
  confirmPassword: string;
}

interface IUserLoginResponse {
  token: string;
  user: IUser;
}

interface IUserRegisterResponse {
  token: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const route = useLocation();
  const location = `${route.pathname}`;
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

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
    formData: TLoginFormSchema,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (location === '/login') {
      try {
        setLoading(true);
        const { data } = await api.post<IUserLoginResponse>('/login', formData);

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

  // 3. Cadastrar (user)
  const register = async (
    formData: IUserRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (location === '/register') {
      try {
        await api.post<IUserRegisterResponse>('/users', formData);
        setLoading(true);
        toast.success('Cadastro realizado com sucesso', {
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
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
  const updateUserProfile = async (userEditFormData: IRegisterUserFormData) => {
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
    <UserContext.Provider value={{ user, login, register, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
