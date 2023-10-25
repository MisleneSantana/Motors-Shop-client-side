import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { DivModalStyle } from '../AccountCreatedModal/style';
import { StyledTexts } from '../../../styles/typography';

export const AdCreatedModal = () => {
  const { setIsSuccessModalOpen } = useContext(ModalContext);
  return (
    <DivModalStyle role='dialog'>
      <div>
        <nav>
          <StyledTexts tag='h3' $fontSize='heading_500_16'>
            Sucesso!
          </StyledTexts>
          <button onClick={() => setIsSuccessModalOpen(false)}>X</button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16'>
          Seu anúncio foi criado com sucesso!
        </StyledTexts>
        <StyledTexts tag='p' $fontSize='body_400_16'>
          Agora você poderá ver seus negócios crescendo em grande escala
        </StyledTexts>
      </div>
    </DivModalStyle>
  );
};
