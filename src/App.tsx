import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import { LoadingProvider } from './providers/Loading/LoadingContext';
import { UserProvider } from './providers/User/UserContext';
import { RoutesMain } from './routes';
import { AuthProvider } from './providers/Auth/AuthContext';
import { ModalProvider } from './providers/Modal/ModalContext';
import { AnnouncementProvider } from './providers/Ad/AdContext';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme='light'
      />
      <LoadingProvider>
        <ModalProvider>
          <AnnouncementProvider>
            <AuthProvider>
              <UserProvider>
                <RoutesMain />
              </UserProvider>
            </AuthProvider>
          </AnnouncementProvider>
        </ModalProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
