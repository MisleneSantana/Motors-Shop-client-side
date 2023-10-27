import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { Button } from '../../Button';
import { ModalNavBarStyle } from './style';
// import { EditOrDeleteProfileModal } from '../EditOrDeleteProfileModal';
import { ModalContext } from '../../../providers/Modal/ModalContext';

export const ModalNavBar = ({
  setOpenModalNavBar,
}: {
  setOpenModalNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userId = localStorage.getItem('@user:id');
  const { user: userLogged, logout } = useContext(AuthContext);
  const { setIsEditOrDeleteProfileModalOpen } = useContext(ModalContext);

  return (
    <>
      {userLogged?.id === userId &&
      userLogged.account_type?.toLowerCase() === 'buyer' ? (
        <ModalNavBarStyle role='dialog'>
          <div>
            <Button text='Editar Perfil' />
            <Button text='Editar endereço' />
            <Button text='Sair' />
          </div>
        </ModalNavBarStyle>
      ) : null}
      {userLogged?.id === userId &&
      userLogged.account_type?.toLowerCase() === 'seller' ? (
        <ModalNavBarStyle role='dialog'>
          <div>
            <Button
              text='Editar Perfil'
              onClick={() => {
                setIsEditOrDeleteProfileModalOpen(true);
                setOpenModalNavBar(false);
              }}
            />
            <Button text='Editar endereço' />
            <Button text='Meus Anúncios' />
            <Button
              text='Sair'
              onClick={() => {
                logout();
              }}
            />
          </div>
        </ModalNavBarStyle>
      ) : null}
    </>
  );
};
