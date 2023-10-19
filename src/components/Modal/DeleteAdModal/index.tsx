import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { AnnouncementContext } from '../../../providers/Announcement/AnnouncementContext';

export const DeleteAdModal = () => {
  const { setIsConfirmDeleteAdModalOpen } = useContext(ModalContext);
  const { singleAnnouncement, deleteAnnouncement } =
    useContext(AnnouncementContext);

  const destroyAnnouncement = () => {
    if (singleAnnouncement) deleteAnnouncement(singleAnnouncement.id);
    setIsConfirmDeleteAdModalOpen(false);
  };

  return (
    <div role='dialog'>
      <nav>
        <h2>Excluir anúncio</h2>
        <button onClick={() => setIsConfirmDeleteAdModalOpen(false)}>X</button>
      </nav>
      <h3>Tem certeza que deseja remover este anúncio?</h3>
      <p>
        {' '}
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores.
      </p>
      <div>
        <button onClick={() => setIsConfirmDeleteAdModalOpen(false)}>
          Cancelar
        </button>
        <button onClick={() => destroyAnnouncement()}>
          Sim, excluir anúncio
        </button>
      </div>
    </div>
  );
};
