import { StyledTexts } from '../../../styles/typography';
import { Button } from '../../Button';
import { DivModalStyle } from './style';

export interface ICoverImgValues {
  cover_img: string | undefined;
  setIsOpenCoverImg: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCoverImg = ({
  cover_img,
  setIsOpenCoverImg,
}: ICoverImgValues) => {
  return (
    <>
      <DivModalStyle role='dialog'>
        <div>
          <nav>
            <StyledTexts tag='h3' $fontSize='heading_500_16'>
              Imagem do veículo
            </StyledTexts>
            <Button text='X' onClick={() => setIsOpenCoverImg(false)}></Button>
          </nav>
          <img src={cover_img}></img>
        </div>
      </DivModalStyle>
    </>
  );
};
