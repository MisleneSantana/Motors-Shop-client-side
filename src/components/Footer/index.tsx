import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterImage,
  StyledFooterLink,
  StyledFooterParagraph,
} from './style';
import logo from '../../assets/icons/logo_white.svg';
import { FaAngleUp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterContainer>
          <StyledFooterImage src={logo} alt='logo' />
        </StyledFooterContainer>
        <StyledFooterContainer>
          <StyledFooterParagraph>
            © 2022 - Todos os direitos reservados.
          </StyledFooterParagraph>
        </StyledFooterContainer>
        <StyledFooterContainer>
          <StyledFooterLink to='#'></StyledFooterLink>
        </StyledFooterContainer>
      </StyledFooterContainer>
      <a href='#'>
        <FaAngleUp />
      </a>
    </StyledFooter>
  );
};
