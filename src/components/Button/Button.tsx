interface IButtonProps {
  title: string;
  children?: React.ReactNode;
  classes?: string;
  handleClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IButtonProps> = (props) => {
  const { title, classes, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className={`sm:w-full hover:bg-hover-color text-neutral-50  bg-primary-color p-[8px] px-7 text-sm rounded-md cursor-pointer ${
        classes ? classes : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
