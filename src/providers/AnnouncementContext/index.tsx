import { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export interface IAnnouncementProviderProps {
  children: React.ReactNode;
}

export interface IAnnouncement {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  table_price: number;
  price: number;
  description?: string | null | undefined;
  cover_image_url: string;
  images: { image_url: string }[];
}

export interface IAnnouncementResponse extends IAnnouncement {
  id: string;
  announcement_is_active: boolean;
  createdAt: string;
  user: {
    id: string;
    name: string;
    phone_number: string;
    description?: string | null | undefined;
  };
  images: { id: string; image_url: string }[];
}

export interface IPaginationAnnouncements {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: IAnnouncementResponse[];
}

interface IAnnouncementProviderValues {
  setAnnouncements: React.Dispatch<
    React.SetStateAction<IPaginationAnnouncements | null>
  >;
  announcements: IPaginationAnnouncements | null;
  loadAnnouncements: () => Promise<void>;
  announcementById: (
    announcementId: string | undefined
  ) => Promise<IAnnouncementResponse | undefined>;
  createAnnouncement: (
    newAnnouncementData: IAnnouncement
  ) => Promise<IAnnouncement | undefined>;
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
  const [announcements, setAnnouncements] = useState(
    null as IPaginationAnnouncements | null
  );

  // 1. Carregar todos os anúncios:
  const loadAnnouncements = async () => {
    try {
      const { data } = await api.get<IPaginationAnnouncements>(
        '/announcements'
      );
      setAnnouncements(data);
    } catch (error) {
      toast.error('Algo deu errado.');
      console.error(error);
    }
  };

  useEffect(() => {
    loadAnnouncements();
  }, []);

  // 2. Buscar um anúncio por id:
  const announcementById = async (announcementId: string | undefined) => {
    try {
      const { data } = await api.get<IAnnouncementResponse>(
        `announcements/${announcementId}`
      );
      return data;
    } catch (error) {
      toast.error('Algo deu errado.');
      console.error(error);
    }
  };

  // 3. Cria um novo anúncio:
  const createAnnouncement = async (announcementData: IAnnouncement) => {
    try {
      const { data } = await api.post<IAnnouncement | undefined>(
        'announcements',
        announcementData
      );
      return data;
    } catch (error) {
      toast.error('Não foi possível criar um o anúncio.');
      console.log(error);
    }
  };

  // 3. Atualizar um anúncio:
  const updateAnnouncement = async (
    announcementData: Partial<IAnnouncement>,
    announcementId: string
  ) => {
    try {
      await api.patch(`announcements/${announcementId}`, announcementData);
      toast.success('Anúncio atualizado com sucesso.');
    } catch (error) {
      toast.error('Não foi possível atualizar o anúncio.');
      console.log(error);
    }
  };

  // 4. Deletar um anúncio:
  const deleteAnnouncement = async (announcementId: string) => {
    try {
      await api.delete(`announcements/${announcementId}`);
      toast.success('Anúncio removido com sucesso.');
    } catch (error) {
      toast.error('Não foi possível excluir o anúncio.');
      console.log(error);
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        setAnnouncements,
        announcements,
        loadAnnouncements,
        announcementById,
        createAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
