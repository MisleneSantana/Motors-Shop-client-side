import { Footer } from '../../components/Footer';
import { LoginForm } from '../../components/Form/LoginForm';
import { Header } from '../../components/Header';
import { LoginDivStyle, LoginMainStyle } from './style';

export const Login = () => {
  return (
    <LoginDivStyle>
      <Header />
      <LoginMainStyle>
        <LoginForm />
      </LoginMainStyle>
      <Footer />
    </LoginDivStyle>
  );
};
