import {
  TUser,
  TUserRead,
  TUserRegisterRequest,
  TUserUpdate,
} from '../../interfaces/user.interfaces';

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
