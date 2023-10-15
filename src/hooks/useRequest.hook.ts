import { useContext } from 'react';
import { LoadingContext } from '../providers/Loading/LoadingContext';
import { toast } from 'react-toastify';

export interface IRequestLoading {
  tryFunction: () => Promise<void>;
  errorFunction: () => void;
}

export const useRequest = () => {
  const { setLoading } = useContext(LoadingContext);

  const isLoading = async ({ tryFunction, errorFunction }: IRequestLoading) => {
    try {
      setLoading(true);
      if (tryFunction) await tryFunction();
    } catch (error) {
      if (errorFunction) errorFunction();
      toast.error('Algo deu errado', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return isLoading;
};
