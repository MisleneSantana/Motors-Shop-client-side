import { useContext } from 'react';
import logo from '../../assets/icons/logo.svg';

export const Header = () => {
  const userSeller = localStorage.getItem('@seller:userNameSeller');
  const userBuyer = localStorage.getItem('@buyer:userNameBuyer');

  const { user: userState } = useContext(UserContext);

  const userName =
    userState?.name &&
    userState?.name[0].toUpperCase() + userState?.name.substring(1);

  if (userSeller || userBuyer) {
    return (
      <header>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <nav>
          <p>{userName}</p>
          <h2>{userName}</h2>
        </nav>
      </header>
    );
  }
  return null;
};
