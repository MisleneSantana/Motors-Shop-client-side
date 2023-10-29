import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { AdAsideStyle, BoxAdImages, BoxListGalleryImgs } from './style';
import { GalleryImgCard } from './GalleryImgCard';
import { AdUserCard } from '../AdUserCard';

export const AdAside = () => {
  const { singleAnnouncement } = useContext(AnnouncementContext);

  return (
    <>
      <AdAsideStyle>
        {singleAnnouncement ? (
          singleAnnouncement?.images?.length > 0 ? (
            <>
              <BoxAdImages>
                <h3>Fotos</h3>
                <BoxListGalleryImgs>
                  {singleAnnouncement?.images.map((image) => {
                    return (
                      <GalleryImgCard key={image.id} image={image.image_url} />
                    );
                  })}
                </BoxListGalleryImgs>
              </BoxAdImages>
            </>
          ) : null
        ) : undefined}
        <AdUserCard />
      </AdAsideStyle>
    </>
  );
};
