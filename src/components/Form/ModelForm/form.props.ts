export interface IFormProps {
  margin?: string;
  padding?: string;
  width?: string;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  titleForm: string;
}
