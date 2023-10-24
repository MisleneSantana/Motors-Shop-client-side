import { useContext } from 'react';
import { Footer } from '../../components/Footer';
import { RegisterForm } from '../../components/Form/RegisterForm';
import { Header } from '../../components/Header';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { AccountCreatedModal } from '../../components/Modal/AccountCreatedModal';
import { RegisterMainStyle, RegisterDivStyle } from './style';

export const Register = () => {
  const { isCreateAccountModalOpen } = useContext(ModalContext);
  return (
    <RegisterDivStyle>
      <Header />
      <RegisterMainStyle>
        <RegisterForm />
        {isCreateAccountModalOpen ? <AccountCreatedModal /> : null}
      </RegisterMainStyle>
      <Footer />
    </RegisterDivStyle>
  );
};
