import { Footer } from '../../components/Footer';
import { LoginForm } from '../../components/Form/LoginForm';
import { Header } from '../../components/Header';

export const Login = () => {
  return (
    <div>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};
