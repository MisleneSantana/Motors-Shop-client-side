import { GlobalStyle } from './styles/global';
import { LoadingProvider } from './providers/Loading/LoadingContext';
import { UserProvider } from './providers/User/UserContext';
import { RoutesMain } from './routes';
import { AuthProvider } from './providers/Auth/AuthContext';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LoadingProvider>
        <UserProvider>
          <AuthProvider>
            <RoutesMain />
          </AuthProvider>
        </UserProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
