import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { ButtonStyle, HeaderStyle } from './style';

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
    <HeaderStyle>
      <div>
        <img src={logo} alt='logo' />
      </div>
      {!userLogged?.id ? (
        <nav>
          <ButtonStyle
            onClick={() => {
              navigate('/login');
            }}
          >
            Fazer Login
          </ButtonStyle>
          <ButtonStyle
            onClick={() => {
              navigate('/register');
            }}
          >
            Cadastrar
          </ButtonStyle>
        </nav>
      ) : (
        <nav>
          <button>{userLogged ? userLogged.name?.charAt(0) : undefined}</button>
          <h2>{formatUserName(userLogged.name)}</h2>
        </nav>
      )}
    </HeaderStyle>
  );
};
