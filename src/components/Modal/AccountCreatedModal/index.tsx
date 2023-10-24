import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { Link } from 'react-router-dom';
import { DivModalStyle, LinkModalStyle } from './style';
import { StyledTexts } from '../../../styles/typography';

export const AccountCreatedModal = () => {
  const { setIsCreateAccountModalOpen } = useContext(ModalContext);
  return (
    <DivModalStyle role='dialog'>
      <div>
        <nav>
          <StyledTexts tag='h3' $fontSize='heading_500_16'>
            Sucesso!
          </StyledTexts>
          <button onClick={() => setIsCreateAccountModalOpen(false)}>X</button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16'>
          Seu conta foi criada com sucesso!
        </StyledTexts>
        <StyledTexts tag='p' $fontSize='body_400_16'>
          Agora você poderá ver seus negócios crescendo em grande escala
        </StyledTexts>
        <LinkModalStyle>
          <Link
            to={'/login'}
            onClick={() => setIsCreateAccountModalOpen(false)}
          >
            Ir para o login
          </Link>
        </LinkModalStyle>
      </div>
    </DivModalStyle>
  );
};
