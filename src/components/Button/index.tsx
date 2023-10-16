interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ type, text, onClick, disabled }: IButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
