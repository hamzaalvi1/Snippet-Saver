import Link from "next/link";

interface IButtonProps {
  title: string;
  children?: React.ReactNode;
  classes?: string;
  asLink?: boolean;
  handleClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  const { title, classes, handleClick, asLink, href } = props;
  return asLink ? (
    <Link
      href={href as string}
      className={`sm:w-full hover:bg-hover-color text-neutral-50  bg-primary-color p-[8px] px-7 text-sm rounded-md cursor-pointer sm:text-center ${
        classes ? classes : ""
      }`}
    >
      {title}
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className={`sm:w-full hover:bg-hover-color text-neutral-50  bg-primary-color p-[8px] px-7 text-sm rounded-md cursor-pointer sm:text-center ${
        classes ? classes : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
