import { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import {
  IPaginationAnnouncements,
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementResponse,
} from '../../interfaces/announcement.interfaces';
import {
  IAnnouncementProviderProps,
  IAnnouncementProviderValues,
} from './ad.props';
import { LoadingContext } from '../Loading/LoadingContext';
import {
  TCommentRead,
  TCommentRequest,
  TCommentResponse,
} from '../../interfaces/comment.interfaces';

export const AnnouncementContext = createContext<IAnnouncementProviderValues>(
  {} as IAnnouncementProviderValues
);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [announcements, setAnnouncements] = useState<TAnnouncement[]>([]);
  const [adsPagination, setAdsPagination] = useState<IPaginationAnnouncements>(
    {} as IPaginationAnnouncements
  );
  const [singleAnnouncement, setSingleAnnouncement] = useState<
    TAnnouncement | undefined
  >({} as TAnnouncement);
  const [sellerAnnouncements, setSellerAnnouncements] = useState<
    TAnnouncement[]
  >([]);
  const [comments, setComments] = useState<TCommentResponse[]>([]);

  const { setLoading } = useContext(LoadingContext);

  // 1. Leitura de todos os anúncios:
  const getAnnouncements = async () => {
    try {
      const { data } = await api.get<IPaginationAnnouncements>(
        '/announcements'
      );
      setAdsPagination(data);
      setAnnouncements(data.data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

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
      setAnnouncements((announcements) => [...announcements, response.data]);
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

  // 4. Buscar os anúncios de um anunciante:
  const getAnnouncementsBySeller = async (sellerId: string | undefined) => {
    try {
      const { data } = await api.get<TAnnouncementResponse[]>(
        `announcements/${sellerId}/seller`
      );
      setSellerAnnouncements(data);
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
      const token = localStorage.getItem('@user:token');
      const { data } = await api.patch(
        `announcements/${announcementId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAnnouncements((announcements) => {
        const updateAd = announcements.map((ad) =>
          ad.id === announcementId
            ? { ...announcements, ...data }
            : announcements
        );
        return updateAd;
      });

      setSingleAnnouncement(data);
      await getAnnouncements();
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

      const listWithoutAd = announcements.filter(
        (announcement) => announcement.id !== announcementId
      );

      setAnnouncements(listWithoutAd);
      setSellerAnnouncements(listWithoutAd);
      toast.success('Anúncio deletado com sucesso');
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 7. Criar um comentário:
  const createComment = async (
    formData: TCommentRequest,
    announcementId: string
  ) => {
    try {
      const token = localStorage.getItem('@user:token');

      const { data } = await api.post<TCommentResponse>(
        `/comments/${announcementId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments((comments) => [...comments, data]);

      await getComments(announcementId);
      toast.success('Comentário criado com sucesso', {
        autoClose: 2000,
      });

      return data;
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // 8. Listar os comentários de um anúncio:
  const getComments = async (announcementId: string) => {
    try {
      const token = localStorage.getItem('@user:token');
      const { data } = await api.get<TCommentRead>(
        `/comments/${announcementId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      data.length === 0
        ? toast.error('Este anúncio não possui comentários', {
            autoClose: 2000,
          })
        : setComments(data);
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 9. Atualizar o comentário de um anúncio:
  const updateComment = async (
    formData: TCommentRequest,
    commentId: string
  ) => {
    try {
      const token = localStorage.getItem('@user:token');
      const { data } = await api.patch(`/comments/${commentId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setComments((comments) => {
        const updateComment = comments.map((comment) =>
          comment.id === commentId ? { ...comments, ...data } : comments
        );
        return updateComment;
      });

      toast.success('Comentário atualizado com sucesso', {
        autoClose: 2000,
      });
    } catch {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  // 10. Deletar um comentário:
  const deleteComment = async (commentId: string) => {
    try {
      const token = localStorage.getItem('@user:token');
      await api.delete<void>(`/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const listWithoutComment = comments.filter(
        (comment) => comment.id !== commentId
      );

      setComments(listWithoutComment);
      toast.success('Comentário deletado com sucesso', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Não foi possível concluir sua solicitação.', {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@user:token');
    (async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await getAnnouncements();
    })();
  }, []);

  useEffect(() => {
    if (singleAnnouncement && singleAnnouncement.id) {
      getComments(singleAnnouncement!.id);
    }
  }, [singleAnnouncement]);

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        setAnnouncements,
        adsPagination,
        setAdsPagination,
        singleAnnouncement,
        sellerAnnouncements,
        getAnnouncements,
        createAnnouncement,
        getAnnouncement,
        getAnnouncementsBySeller,
        updateAnnouncement,
        deleteAnnouncement,
        comments,
        setComments,
        createComment,
        getComments,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
