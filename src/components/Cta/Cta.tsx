import Image from "next/image";
import { Button } from "../Button";
const Cta = () => {
  return (
    <section className="flex h-[calc(100vh-64px)] justify-center items-center container mx-auto flex-col gap-3">
      <h2 className="font-bold text-3xl text-center">
        Organize Your Code Snippets{" "}
        <span className="text-primary-color">Efficiently!</span>
      </h2>
      <p className="text-center text-sm w-[650px] sm:w-full text-gray-color">
        With our advanced tagging and search features, you can quickly find the
        snippet you need, right when you need it. Spend less time searching for
        code and more time writing it.
      </p>
      <Image
        className="rounded-md"
        src={"/app-s.webp"}
        width={800}
        height={400}
        alt="app-ss"
      />
      <Button title="let's get started" />
    </section>
  );
};

export default Cta;
