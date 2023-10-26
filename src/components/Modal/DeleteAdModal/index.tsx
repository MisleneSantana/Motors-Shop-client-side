import { useContext } from 'react';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { TAnnouncement } from '../../../interfaces/announcement.interfaces';
import { DivModalStyle } from './style';
import { StyledTexts } from '../../../styles/typography';
import { Button } from '../../Button';

export const DeleteAdModal = ({
  announcement,
  setIsConfirmDeleteAdModalOpen,
}: {
  announcement: TAnnouncement;
  setIsConfirmDeleteAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { deleteAnnouncement } = useContext(AnnouncementContext);

  const destroyAnnouncement = () => {
    deleteAnnouncement(announcement.id);
    setIsConfirmDeleteAdModalOpen(false);
  };

  return (
    <DivModalStyle role='dialog'>
      <div>
        <nav>
          <StyledTexts tag='h3' $fontSize='heading_500_16'>
            Excluir anúncio
          </StyledTexts>
          <Button
            text='X'
            onClick={() => setIsConfirmDeleteAdModalOpen(false)}
          />
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16'>
          Tem certeza que deseja remover este anúncio?
        </StyledTexts>
        <StyledTexts tag='p' $fontSize='body_400_16'>
          {' '}
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </StyledTexts>
        <section className='modal__buttons'>
          <Button
            text='Cancelar'
            className='cancel_button'
            onClick={() => setIsConfirmDeleteAdModalOpen(false)}
          />
          <Button
            text=' Sim, excluir anúncio'
            className='delete_button'
            onClick={() => destroyAnnouncement()}
          />
        </section>
      </div>
    </DivModalStyle>
  );
};
