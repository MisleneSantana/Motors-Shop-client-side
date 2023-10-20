import { GlobalStyle } from './styles/global';
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
