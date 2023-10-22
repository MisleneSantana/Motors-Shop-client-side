import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth/AuthContext';

export const Header = () => {
  const { user: userLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const formatUserName = (userName: string) => {
    userName
      .split('')
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join('');
    return userName;
  };
  return (
    <header>
      <div>
        <img src={logo} alt='logo' />
      </div>
      {!userLogged?.id ? (
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
          <button>{userLogged ? userLogged.name?.charAt(0) : undefined}</button>
          <h2>{formatUserName(userLogged.name)}</h2>
        </nav>
      )}
    </header>
  );
};
