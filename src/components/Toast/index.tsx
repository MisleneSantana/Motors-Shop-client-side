import { toast } from 'react-toastify';

interface ToastProps {
  message: string;
  successful?: boolean;
}

export const Toast = ({ message, successful = false }: ToastProps) => {
  return successful
    ? toast.success(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    : toast.error(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
};
