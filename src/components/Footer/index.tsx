import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterImage,
  StyledFooterLink,
  StyledFooterParagraph,
} from './style';
import logo from '../../assets/icons/logo.svg';

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
      <a href={'#'}>Botão que rola a página para a nav</a>
    </StyledFooter>
  );
};
