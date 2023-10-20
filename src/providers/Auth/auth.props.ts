import { TUser, TUserLogin } from '../../interfaces/user.interfaces';

export interface IAuthProviderProps {
  children: React.ReactNode;
}
export interface IAuthContextValues {
  user: TUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  login: (formData: TUserLogin) => Promise<void>;
  logout: () => void;
}
