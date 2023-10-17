import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { ModalContext } from '../Modal/ModalContext';
import {
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementResponse,
} from '../../interfaces/announcement.interfaces';
import {
  IAnnouncementProviderProps,
  IAnnouncementProviderValues,
} from './announcement.props';
import { LoadingContext } from '../Loading/LoadingContext';

export const AnnouncementContext = createContext<IAnnouncementProviderValues>(
  {} as IAnnouncementProviderValues
);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [announcements, setAnnouncements] = useState<TAnnouncement[]>([]);
  const [singleAnnouncement, setSingleAnnouncement] = useState<
    TAnnouncement | undefined
  >({} as TAnnouncement);
  const [sellerAnnouncement, setSellerAnnouncement] = useState<TAnnouncement[]>(
    []
  );

  const { loading, setLoading } = useContext(LoadingContext);
  const { closeModal } = useContext(ModalContext);

  // 1. Leitura de anúncios:
  const getAnnouncements = async () => {
    try {
      const response = await api.get<TAnnouncement[]>('/announcements');
      setAnnouncements(response.data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  // 2. Cria um novo anúncio:
  const createAnnouncement = async (formData: TAnnouncementRequest) => {
    try {
      const userToken = localStorage.getItem('@user:token');

      const response = await api.post<TAnnouncementResponse>(
        `/announcements`,
        formData,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setAnnouncements([...announcements, response.data]);
      toast.success('Anúncio criado com sucesso', {
        autoClose: 2000,
      });

      await getAnnouncements();
      return response;
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 3. Buscar um anúncio por id:
  const getAnnouncement = async (announcementId: string | undefined) => {
    try {
      const { data } = await api.get<TAnnouncementResponse>(
        `announcements/${announcementId}`
      );
      setSingleAnnouncement(data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 4. Buscar os anúncios de um user:
  const getAnnouncementsBySeller = async (userId: string | undefined) => {
    try {
      const { data } = await api.get<TAnnouncementResponse[]>(
        `announcements/${userId}/seller`
      );
      setSellerAnnouncement(data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 5. Atualizar um anúncio:
  const updateAnnouncement = async (
    formData: Partial<TAnnouncementRequest>,
    announcementId: string
  ) => {
    try {
      const response = await api.patch(
        `announcements/${announcementId}`,
        formData
      );

      setSingleAnnouncement(response.data);
      toast.success('Anúncio atualizado com sucesso');
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 6. Deletar um anúncio:
  const deleteAnnouncement = async (announcementId: string) => {
    try {
      await api.delete(`announcements/${announcementId}`);

      const listWithoutAnnouncement = announcements.filter(
        (announcement) => announcement.id !== announcementId
      );

      setSellerAnnouncement(listWithoutAnnouncement);
      setAnnouncements(listWithoutAnnouncement);
      closeModal();
      toast.success('Anúncio deletado com sucesso');
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        setAnnouncements,
        singleAnnouncement,
        sellerAnnouncement,
        loading,
        getAnnouncements,
        createAnnouncement,
        getAnnouncement,
        getAnnouncementsBySeller,
        updateAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
