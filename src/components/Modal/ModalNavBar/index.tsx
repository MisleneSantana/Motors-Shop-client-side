import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { Button } from '../../Button';

export const ModalNavBar = ({ openModalNavBar }) => {
  const userId = localStorage.getItem('@user:id');
  const { user: userLogged } = useContext(AuthContext);

  return (
    <>
      {userLogged?.id === userId &&
      userLogged.account_type?.toLowerCase() === 'buyer' ? (
        <div role='dialog'>
          <Button text='Editar Perfil' />
          <Button text='Editar endereço' />
          <Button text='Sair' />
        </div>
      ) : null}
      {userLogged?.id === userId &&
      userLogged.account_type?.toLowerCase() === 'seller' ? (
        <div role='dialog'>
          <Button text='Editar Perfil' />
          <Button text='Editar endereço' />
          <Button text='Meus Anúncios' />
          <Button text='Sair' />
        </div>
      ) : null}
    </>
  );
};
