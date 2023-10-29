import { CardGalleryImgStyle } from './style';

export interface IImageProps {
  image: string;
}

export const GalleryImgCard = ({ image }: IImageProps) => {
  return (
    <CardGalleryImgStyle>
      <img src={image} alt={'product img'} />
    </CardGalleryImgStyle>
  );
};
