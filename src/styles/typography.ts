import styled, { css } from 'styled-components';
import { BaseTexts } from './components/BaseTitle';

interface IStyledTypographyProps {
  $fontSize:
    | 'heading_700_44'
    | 'heading_600_36'
    | 'heading_600_32'
    | 'heading_500_32'
    | 'heading_600_28'
    | 'heading_500_28'
    | 'heading_600_24'
    | 'heading_500_24'
    | 'heading_600_20'
    | 'heading_500_20'
    | 'heading_600_16'
    | 'heading_500_16'
    | 'heading_500_14'
    | 'body_600_16'
    | 'body_400_16'
    | 'body_400_14'
    | 'body_500_14'
    | 'button_16'
    | 'button_14'
    | 'button_12'
    | 'input_placeholder_16'
    | 'input_label_14';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTexts = styled(BaseTexts)<IStyledTypographyProps>`
  font-family: 'Inter';
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

 ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'heading_700_44':
        return css`
        font-size:4.4rem, //44px
        font-weight: 700;
        `;
      case 'heading_600_36':
        return css`
        font-size:3.6rem, //36px
        font-weight: 600;
        `;
      case 'heading_600_32':
        return css`
        font-size:3.2rem, //32px
        font-weight: 600;
        `;
      case 'heading_500_32':
        return css`
        font-size:3.2rem, //32px
        font-weight: 500;
        `;
      case 'heading_600_28':
        return css`
        font-size:2.8rem, //28px
        font-weight: 600;
        `;
      case 'heading_500_28':
        return css`
        font-size:2.8rem, //28px
        font-weight: 500;
        `;
      case 'heading_600_24':
        return css`
        font-size:2.4rem, //24px
        font-weight: 600;
        `;
      case 'heading_500_24':
        return css`
        font-size:2.4rem, //24px
        font-weight: 500;
        `;
      case 'heading_600_20':
        return css`
        font-size:2rem, //20px
        font-weight: 600;
        `;
      case 'heading_500_20':
        return css`
        font-size:2rem, //20px
        font-weight: 500;
        `;
      case 'heading_600_16':
        return css`
        font-size:1.6rem, //16px
        font-weight: 600;
        `;
      case 'heading_500_16':
        return css`
        font-size:1.6rem, //16px
        font-weight: 500;
        `;
      case 'heading_500_14':
        return css`
        font-size:0.875rem, //14px
        font-weight: 500;
        `;
      case 'body_400_16':
        return css`
          font-size:1.6rem, //16px
          font-weight: 400;
        `;
      case 'body_600_16':
        return css`
        font-size:1.6rem, //16px
        font-weight: 600;
        `;
      case 'body_400_14':
        return css`
        font-size:1.4rem, //14px
        font-weight: 400;
        `;
      case 'body_500_14':
        return css`
        font-size:1.4rem, //14px
        font-weight: 500;
        `;
      case 'button_16':
        return css`
        font-size:1.6rem, //16px
        font-weight: 600;
        `;
      case 'button_14':
        return css`
        font-size:1.4rem, //14px
        font-weight: 600;
        `;
      case 'button_12':
        return css`
        font-size:0.75rem, //12px
        font-weight: 600;
        `;
      case 'input_placeholder_16':
        return css`
        font-size:1.6rem, //16px
        font-weight: 400;
        `;
      case 'input_label_14':
        return css`
        font-size:1.4rem, //14px
        font-weight: 500;
        `;
    }
  }};
`;
