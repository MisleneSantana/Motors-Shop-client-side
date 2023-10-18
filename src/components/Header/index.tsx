import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth/AuthContext';

export const Header = () => {
  // const userToken = localStorage.getItem('@user:token');

  const { user: userState } = useContext(AuthContext);
  const navigate = useNavigate();

  const userName =
    userState?.name &&
    userState?.name[0].toUpperCase() + userState?.name.substring(1);

  return (
    <header>
      <div>
        <img src={logo} alt='logo' />
      </div>
      {!userState?.id ? (
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
