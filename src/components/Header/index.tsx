import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { ButtonStyle, DivStyle, HeaderStyle, NavBarStyle } from './style';

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
      <DivStyle>
        <img src={logo} alt='logo'/>
      </DivStyle>
      {!userLogged?.id ? (
        <NavBarStyle>
          <ButtonStyle
            className='login__button'
            onClick={() => {
              navigate('/login');
            }}
          >
            Fazer Login
          </ButtonStyle>
          <ButtonStyle
            className='register__button'
            onClick={() => {
              navigate('/register');
            }}
          >
            Cadastrar
          </ButtonStyle>
        </NavBarStyle>
      ) : (
        <NavBarStyle>
          <ButtonStyle>
            {userLogged ? userLogged.name?.charAt(0) : undefined}
          </ButtonStyle>
          <h2>{formatUserName(userLogged.name)}</h2>
        </NavBarStyle>
      )}
    </HeaderStyle>
  );
};
