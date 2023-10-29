import { useContext } from 'react';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { Link } from 'react-router-dom';
import { BoxAdUserCardStyle } from './style';
import { UserContext } from '../../providers/User/UserContext';

export const AdUserCard = () => {
  const userToken = localStorage.getItem('@user:token');
  const userId = localStorage.getItem('@user:id');
  const { user: userLogged } = useContext(AuthContext);
  const { defineInitialsName } = useContext(UserContext);
  return (
    <>
      {userLogged && userToken && userLogged.id === userId ? (
        <BoxAdUserCardStyle>
          <span>{defineInitialsName(userLogged?.name)}</span>
          <p className='username__p'>{userLogged?.name}</p>
          <p className='user-description__p'>{userLogged?.description}</p>
          {userLogged?.account_type?.toLowerCase() === 'seller' ? (
            <Link to={'/sellerHome'}>Ver todos anúncios</Link>
          ) : (
            <Link to={'/buyerHome'}>Ver todos anúncios</Link>
          )}
        </BoxAdUserCardStyle>
      ) : undefined}
    </>
  );
};
