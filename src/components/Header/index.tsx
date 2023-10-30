import logo from '../../assets/icons/logo.svg';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth/AuthContext';
import {
  BoxHeaderItemsStyle,
  DivStyle,
  HeaderStyle,
  NavBarStyle,
} from './style';
import { ModalNavBar } from '../Modal/ModalNavBar';
import { Button } from '../Button';
import { UserContext } from '../../providers/User/UserContext';
import { MenuMobile } from '../Modal/ModalNavBarMobile';
import { FiAlignJustify } from 'react-icons/fi';

export const Header = () => {
  const navigate = useNavigate();
  const [openModalNavBar, setOpenModalNavBar] = useState(false);
  const [openModalNavBarMobile, setOpenModalNavBarMobile] = useState(false);
  const { user: userLogged } = useContext(AuthContext);
  const { defineInitialsName } = useContext(UserContext);

  const formatUserName = (userName: string) => {
    userName
      .split('')
      .map((letter: string, index: number) => {
        if (index === 0 || index === userName.split(' ').length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join('');
    return userName;
  };

  return (
    <HeaderStyle>
      <BoxHeaderItemsStyle>
        <DivStyle>
          <img
            src={logo}
            alt='logo'
            onClick={() => {
              setOpenModalNavBarMobile(false);
            }}
          />
        </DivStyle>
        {!userLogged?.id ? (
          <NavBarStyle>
            <Button
              text={'Login'}
              className='login__button'
              onClick={() => {
                navigate('/login');
              }}
            />
            <Button
              text={'Cadastrar'}
              className='register__button'
              onClick={() => {
                navigate('/register');
              }}
            />
            <FiAlignJustify
              className='navbar-mobile__button'
              onClick={() => {
                setOpenModalNavBarMobile(true);
              }}
            ></FiAlignJustify>
          </NavBarStyle>
        ) : (
          <NavBarStyle>
            {userLogged ? (
              <Button
                text={defineInitialsName(userLogged?.name)}
                className='avatar-user__button'
                onClick={() => {
                  setOpenModalNavBar(false);
                }}
              />
            ) : undefined}

            {userLogged ? (
              <Button
                text={formatUserName(userLogged?.name)}
                className='username__button'
                onClick={() => {
                  setOpenModalNavBar(true);
                }}
              />
            ) : undefined}

            {openModalNavBar ? (
              <ModalNavBar setOpenModalNavBar={setOpenModalNavBar} />
            ) : null}
          </NavBarStyle>
        )}
      </BoxHeaderItemsStyle>
      {openModalNavBarMobile ? (
        <MenuMobile setOpenModalNavBarMobile={setOpenModalNavBarMobile} />
      ) : null}
    </HeaderStyle>
  );
};
