import Link from "next/link";
import { PiBracketsCurlyBold } from "react-icons/pi";

const Logo = () => {
  return (
    <Link href={"/"} className={"flex gap-2 items-center cursor-pointer"}>
      <div
        className={`bg-primary-color flex justify-center items-center rounded-md p-[8px]`}
      >
        <PiBracketsCurlyBold className="text-white text-lg" />
      </div>
      <div className="flex gap-1 items-baseline text-[20px] font-medium">
        <strong className="text-primary-color">Snippet</strong> Saver
      </div>
    </Link>
  );
};

export default Logo;
