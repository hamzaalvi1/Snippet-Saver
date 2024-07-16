"use client";
import { Logo } from "../Logo";
import { Button } from "../Button";

const Header = () => {
  return (
    <header
      className={`py-3 px-4 flex justify-between items-center sm:flex-col sm:gap-2`}
    >
      <Logo />
      <div className="flex gap-3 sm:flex-col sm:w-full">
        <Button title={"Sign In"} asLink={true} href="/sign-in" />
        <Button
          asLink={true}
          href="/sign-in"
          title={"Sign Up"}
          classes={
            "bg-transparent text-primary-color border border-primary-color hover:bg-primary-color hover:text-white"
          }
        />
      </div>
    </header>
  );
};

export default Header;
