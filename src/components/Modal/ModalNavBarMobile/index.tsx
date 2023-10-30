import { Link } from 'react-router-dom';
import { MenuMobileStyle } from './style';

export const MenuMobile = ({
  setOpenModalNavBarMobile,
}: {
  setOpenModalNavBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <MenuMobileStyle>
        <Link
          className='login-mobile__link'
          to={'/login'}
          onClick={() => {
            setOpenModalNavBarMobile(false);
          }}
        >
          Login
        </Link>
        <Link
          className='register-mobile__link'
          to={'/register'}
          onClick={() => {
            setOpenModalNavBarMobile(false);
          }}
        >
          Cadastrar
        </Link>
      </MenuMobileStyle>
    </>
  );
};
