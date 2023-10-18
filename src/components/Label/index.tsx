interface ILabelProps {
  htmlFor: string;
  name: string;
}

export const Label = ({ htmlFor, name }: ILabelProps) => {
  return <label htmlFor={htmlFor}>{name}</label>;
};
