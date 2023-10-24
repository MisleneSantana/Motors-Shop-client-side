import { StyledTexts } from '../../../styles/typography';
import { IFormProps } from './form.props';
import { FormStyle } from './style';

export function ModelForm({
  margin,
  padding,
  width,
  children,
  onSubmit,
  titleForm,
}: IFormProps) {
  return (
    <FormStyle
      margin={margin}
      padding={padding}
      width={width}
      onSubmit={onSubmit}
    >
      <StyledTexts tag='h3' $fontSize='heading_500_24' className='title__form'>
        {titleForm}
      </StyledTexts>
      {children}
    </FormStyle>
  );
}
