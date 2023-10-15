import { createContext, useState } from 'react';

export interface ILoadingProviderProps {
  children: React.ReactNode;
}
export interface ILoadingContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext({} as ILoadingContext);

export const LoadingProvider = ({ children }: ILoadingProviderProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
