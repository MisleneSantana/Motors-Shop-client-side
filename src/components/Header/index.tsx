import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { UserContext } from '../../providers/User/UserContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  // const seller = localStorage.getItem('@user:sellerName');
  // const buyer = localStorage.getItem('@user:buyerName');
  const { user: userState } = useContext(UserContext);
  const navigate = useNavigate();

  const userName =
    userState?.name &&
    userState?.name[0].toUpperCase() + userState?.name.substring(1);

  return (
    <header>
      <div>
        <img src={logo} alt='logo' />
      </div>
      {!userState ? (
        <nav>
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Fazer Login
          </button>
          <button
            onClick={() => {
              navigate('/register');
            }}
          >
            Cadastrar
          </button>
        </nav>
      ) : (
        <nav>
          <button>{userName}</button>
          <h2>{userName}</h2>
        </nav>
      )}
    </header>
  );
};
