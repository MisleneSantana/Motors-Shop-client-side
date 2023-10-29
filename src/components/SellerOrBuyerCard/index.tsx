import { useContext } from 'react';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { DivUserAvatarStyle, DivUsernameStyle, SectionStyle } from './style';
import { UserContext } from '../../providers/User/UserContext';

export const SellerOrBuyerCard = () => {
  const { user } = useContext(AuthContext);
  const { defineInitialsName } = useContext(UserContext);
  const { setIsCreateAdsModalOpen } = useContext(ModalContext);

  const userFullName = user?.name;
  user?.name &&
    user?.name[0].toUpperCase() + user?.name.substring(1).toLowerCase();

  return (
    <SectionStyle>
      <DivUserAvatarStyle>
        <p>{user ? defineInitialsName(user?.name) : undefined}</p>
      </DivUserAvatarStyle>

      <DivUsernameStyle>
        <p>{user ? userFullName : undefined}</p>
        <span>
          {user
            ? user.account_type === 'seller'
              ? 'Anunciante'
              : 'Comprador'
            : undefined}
        </span>
      </DivUsernameStyle>

      <p>{user ? (user.description ? user.description : null) : undefined}</p>

      {user ? (
        user.account_type === 'seller' ? (
          <button onClick={() => setIsCreateAdsModalOpen(true)}>
            Criar anúncio
          </button>
        ) : null
      ) : undefined}
    </SectionStyle>
  );
};
