import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { Button } from '../../Button';
import { ModalNavBarStyle } from './style';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { useNavigate } from 'react-router-dom';

export const ModalNavBar = ({
  setOpenModalNavBar,
}: {
  setOpenModalNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('@user:id');
  const { user: userLogged, logout } = useContext(AuthContext);
  const { getAnnouncementsBySeller } = useContext(AnnouncementContext);
  const { setIsEditOrDeleteProfileModalOpen, setIsEditUserAddressModalOpen } =
    useContext(ModalContext);

  return (
    <>
      {userLogged?.id === userId &&
      userLogged.account_type?.toLowerCase() === 'buyer' ? (
        <ModalNavBarStyle role='dialog'>
          <div>
            <Button
              text='Editar Perfil'
              onClick={() => {
                setIsEditOrDeleteProfileModalOpen(true);
                setOpenModalNavBar(false);
              }}
            />
            <Button
              text='Editar endereço'
              onClick={() => {
                setIsEditUserAddressModalOpen(true);
                setOpenModalNavBar(false);
              }}
            />
            <Button
              text='Sair'
              onClick={() => {
                logout();
              }}
            />
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
            <Button
              text='Editar endereço'
              onClick={() => {
                setIsEditUserAddressModalOpen(true);
                setOpenModalNavBar(false);
              }}
            />
            <Button
              text='Meus Anúncios'
              onClick={() => {
                getAnnouncementsBySeller(userId),
                  setOpenModalNavBar(false),
                  navigate('/sellerHome');
              }}
            />
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
