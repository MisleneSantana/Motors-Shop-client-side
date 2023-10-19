import { useContext } from 'react';
import { Footer } from '../../components/Footer';
import { RegisterForm } from '../../components/Form/RegisterForm';
import { Header } from '../../components/Header';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { AccountCreatedModal } from '../../components/Modal/AccountCreatedModal';

export const Register = () => {
  const { isCreateAccountModalOpen } = useContext(ModalContext);
  return (
    <>
      <div>
        <Header />
        <main>
          <RegisterForm />
          {isCreateAccountModalOpen ? <AccountCreatedModal /> : null}
        </main>
        <Footer />
      </div>
    </>
  );
};
