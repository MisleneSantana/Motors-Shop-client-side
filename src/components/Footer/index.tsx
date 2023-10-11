import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterImage,
  StyledFooterLink,
  StyledFooterParagraph,
} from './style';

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
          <StyledFooterLink to='aboutus'></StyledFooterLink>
        </StyledFooterContainer>
      </StyledFooterContainer>
      <a href={'#'}></a>
    </StyledFooter>
  );
};
