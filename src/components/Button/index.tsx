interface IButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?: string;
  text: string;
  value?: any;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  type,
  color,
  text,
  value,
  onClick,
  disabled,
}: IButtonProps) => {
  return (
    <button
      type={type}
      color={color}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
