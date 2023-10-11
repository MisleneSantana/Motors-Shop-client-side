import { createContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserRegister {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  isCompany?: boolean;
  foodCategory: string;
}

// interface IUserLoginResponse {
//   accessToken: string;
//   user: IUser;
// }

// interface IUserRegisterResponse {
//   accessToken: string;
//   user: IUser;
// }

export interface IUser {
  email: string;
  userName: string;
  id: number;
  foodCategory: string;
  isCompany?: boolean;
}

export interface IUserContext {
  // user: IUser | null;
  // signIn: (
  //   formData: TLoginFormSchema,
  //   setLoading: React.Dispatch<React.SetStateAction<boolean>>
  // ) => Promise<void>;
  // newUserRegister: (
  //   formData: TRegisterFormSchema,
  //   setLoading: React.Dispatch<React.SetStateAction<boolean>>
  // ) => Promise<void>;
  // logout: () => void;
  // isEditUserProfileModalOpen: boolean;
  // setIsEditUserProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // editUserProfile: (newUserProfileData: IRegisterUserFormData) => Promise<void>;
  // setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
