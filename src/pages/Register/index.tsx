import { Footer } from '../../components/Footer';
import { RegisterForm } from '../../components/Form/RegisterForm';
import { Header } from '../../components/Header';

export const Register = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <RegisterForm />
        </main>
        <Footer />
      </div>
    </>
  );
};
