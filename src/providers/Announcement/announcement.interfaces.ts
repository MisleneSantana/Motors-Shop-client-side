export interface IAnnouncement {
  id: string;
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

export interface IAnnouncementRequest {
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
