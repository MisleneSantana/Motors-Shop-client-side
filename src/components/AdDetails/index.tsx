import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { Button } from '../Button';
import {
  BoxAdInfosStyle,
  ProductCoverImgStyle,
  ProductDescriptionStyle,
  SectionProductDetailsStyle,
} from './style';
import { CommentList } from '../CommentList';
import { CreateComment } from '../Form/CreateComment';
import { ModalCoverImg } from '../Modal/ModalCoverImg';

export const AdDetails = () => {
  const [isOpenCoverImg, setIsOpenCoverImg] = useState<boolean>(false);
  const { singleAnnouncement } = useContext(AnnouncementContext);

  return (
    <>
      <SectionProductDetailsStyle>
        <ProductCoverImgStyle>
          <img
            src={singleAnnouncement?.cover_image_url}
            alt={singleAnnouncement?.brand}
            onClick={() => setIsOpenCoverImg(true)}
          />
        </ProductCoverImgStyle>
        <BoxAdInfosStyle>
          <h4>
            {singleAnnouncement?.brand} - {singleAnnouncement?.model}
          </h4>
          <div>
            <div>
              <p>
                {singleAnnouncement?.km?.toLocaleString('pt-br', {
                  currency: 'BRL',
                })}{' '}
                KM
              </p>
              <p>{singleAnnouncement?.year}</p>
            </div>
            <p>
              {Number(singleAnnouncement?.price)?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <Button className='disabled__button' text='Comprar' disabled={true} />
        </BoxAdInfosStyle>
        <ProductDescriptionStyle>
          <h3>Descrição</h3>
          <p>{singleAnnouncement?.description}</p>
        </ProductDescriptionStyle>
        <CommentList />

        {singleAnnouncement ? (
          <CreateComment singleAnnouncement={singleAnnouncement} />
        ) : null}

        {isOpenCoverImg ? (
          <ModalCoverImg
            cover_img={singleAnnouncement?.cover_image_url}
            setIsOpenCoverImg={setIsOpenCoverImg}
          />
        ) : null}
      </SectionProductDetailsStyle>
    </>
  );
};
