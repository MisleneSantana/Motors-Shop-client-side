import {
  BoxFooterItemsStyle,
  FooterStyle,
  ImageStyle,
  ParagraphStyle,
} from './style';
import logo from '../../assets/icons/logo_white.svg';
import { FaAngleUp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterStyle>
      <BoxFooterItemsStyle>
        <ImageStyle src={logo} alt='logo' />
        <ParagraphStyle>© 2022 - Todos os direitos reservados.</ParagraphStyle>
        <a href='#'>
          <FaAngleUp />
        </a>
      </BoxFooterItemsStyle>
    </FooterStyle>
  );
};
