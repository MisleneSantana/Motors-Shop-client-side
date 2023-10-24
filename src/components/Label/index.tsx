import { LabelStyle } from './style';

interface ILabelProps {
  htmlFor: string;
  name: string;
}

export const Label = ({ htmlFor, name }: ILabelProps) => {
  return <LabelStyle htmlFor={htmlFor}>{name}</LabelStyle>;
};
