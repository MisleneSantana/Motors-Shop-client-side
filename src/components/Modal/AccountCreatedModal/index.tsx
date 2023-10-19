import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { Link } from 'react-router-dom';

export const AccountCreatedModal = () => {
  const { setIsCreateAccountModalOpen } = useContext(ModalContext);
  return (
    <div role='dialog'>
      <nav>
        <h2>Sucesso!</h2>
        <button onClick={() => setIsCreateAccountModalOpen(false)}>X</button>
      </nav>
      <h3>Seu conta foi criada com sucesso!</h3>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
      <span>
        <Link to={'/login'}>Ir para o login</Link>
      </span>
    </div>
  );
};
