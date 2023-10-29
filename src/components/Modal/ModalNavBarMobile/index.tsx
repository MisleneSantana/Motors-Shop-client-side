import { Link } from 'react-router-dom';
import { ModalNavBarMobileStyle } from './style';

export const ModalNavBarMobile = ({
  setOpenModalNavBarMobile,
}: {
  setOpenModalNavBarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <ModalNavBarMobileStyle role='dialog'>
        <div>
          <Link
            to={'/login'}
            onClick={() => {
              setOpenModalNavBarMobile(false);
            }}
          >
            Login
          </Link>
          <Link
            to={'/register'}
            onClick={() => {
              setOpenModalNavBarMobile(false);
            }}
          >
            Cadastrar
          </Link>
        </div>
      </ModalNavBarMobileStyle>
    </>
  );
};
