import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import {
  IAnnouncement,
  IAnnouncementRequest,
  IAnnouncementResponse,
} from './announcement.interfaces';
import { AxiosResponse } from 'axios';
import { ModalContext } from '../Modal/ModalContext';

export interface IAnnouncementProviderProps {
  children: React.ReactNode;
}

interface IAnnouncementProviderValues {
  announcements: IAnnouncement[];
  setAnnouncements: React.Dispatch<React.SetStateAction<IAnnouncement[]>>;
  singleAnnouncement: IAnnouncement | undefined;
  sellerAnnouncement: IAnnouncement[];
  loading: boolean;
  getAnnouncements: () => Promise<void>;
  createAnnouncement: (
    formData: IAnnouncementRequest
  ) => Promise<AxiosResponse<IAnnouncementResponse> | undefined>;
  getAnnouncementById: (announcementId: string | undefined) => Promise<void>;
  getAnnouncementsBySeller: (userId: string | undefined) => Promise<void>;
  updateAnnouncement: (
    announcementData: Partial<IAnnouncement>,
    announcementId: string
  ) => Promise<void>;
  deleteAnnouncement: (announcementId: string) => Promise<void>;
}

export const AnnouncementContext = createContext<IAnnouncementProviderValues>(
  {} as IAnnouncementProviderValues
);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [singleAnnouncement, setSingleAnnouncement] = useState<
    IAnnouncement | undefined
  >({} as IAnnouncement);
  const [sellerAnnouncement, setSellerAnnouncement] = useState<IAnnouncement[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const { closeModal } = useContext(ModalContext);

  // 1. Leitura de anúncios:
  const getAnnouncements = async () => {
    try {
      const response = await api.get<IAnnouncement[]>('/announcements');
      setAnnouncements(response.data);
    } catch (error) {
      toast.error('Não foi possível carregar todos os anúncios');
      console.error(error);
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  // 2. Cria um novo anúncio:
  const createAnnouncement = async (formData: IAnnouncementRequest) => {
    try {
      const userToken = localStorage.getItem('@userCompany:token');

      const response = await api.post<IAnnouncementResponse>(
        `announcements/`,
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
      toast.error('Tente novamente', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 3. Buscar um anúncio por id:
  const getAnnouncementById = async (announcementId: string | undefined) => {
    try {
      const { data } = await api.get<IAnnouncementResponse>(
        `announcements/${announcementId}`
      );
      setSingleAnnouncement(data);
    } catch (error) {
      toast.error('Não foi possível carregar as informações deste anúncio');
      console.error(error);
    }
  };

  // 4. Buscar os anúncios de um user:
  const getAnnouncementsBySeller = async (userId: string | undefined) => {
    try {
      const { data } = await api.get<IAnnouncementResponse[]>(
        `announcements/${userId}/seller`
      );
      setSellerAnnouncement(data);
    } catch (error) {
      toast.error('Não foi possível carregar seus anúncios');
    }
  };

  // 5. Atualizar um anúncio:
  const updateAnnouncement = async (
    formData: Partial<IAnnouncement>,
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
      toast.error('Não foi possível atualizar o anúncio');
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
      toast.error('Não foi possível deletar o anúncio');
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
        getAnnouncementById,
        getAnnouncementsBySeller,
        updateAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
