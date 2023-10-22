import { useContext } from 'react';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { ModalContext } from '../../providers/Modal/ModalContext';

export const SellerOrBuyerCard = () => {
  const { user } = useContext(AuthContext);
  const { setIsCreateAdsModalOpen } = useContext(ModalContext);

  const userFullName = user?.name;
  user?.name &&
    user?.name[0].toUpperCase() + user?.name.substring(1).toLowerCase();

  return (
    <section>
      <div>
        <h1>{user ? user.name?.charAt(0) : undefined}</h1>
      </div>

      <div>
        <h3>{user ? userFullName : undefined}</h3>
        <div>
          {user
            ? user.account_type === 'seller'
              ? 'Anunciante'
              : 'Comprador'
            : undefined}
        </div>
      </div>

      <p>{user ? (user.description ? user.description : null) : undefined}</p>

      {user ? (
        user.account_type === 'seller' ? (
          <button onClick={() => setIsCreateAdsModalOpen(true)}>
            Criar anúncio
          </button>
        ) : null
      ) : undefined}
    </section>
  );
};
