import { GlobalStyle } from './styles/global';
import { LoadingProvider } from './providers/Loading/LoadingContext';
import { UserProvider } from './providers/User/UserContext';
import { RoutesMain } from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LoadingProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
