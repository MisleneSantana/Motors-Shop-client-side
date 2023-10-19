import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';

export const AdCreatedModal= () => {
  const { setIsSuccessModalOpen } = useContext(ModalContext);
  return (
    <div role='dialog'>
      <nav>
        <h2>Sucesso!</h2>
        <button onClick={() => setIsSuccessModalOpen(false)}>X</button>
      </nav>
      <h3>Seu anúncio foi criado com sucesso!</h3>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
    </div>
  );
};
