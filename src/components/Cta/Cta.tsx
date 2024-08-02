"use client";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="flex h-[calc(100vh-64px)] justify-center items-center container mx-auto flex-col gap-3 sm:px-3 sm:h-[calc(100vh-160px)]">
      <h2 className="font-bold text-3xl text-center sm:text-2xl">
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
        priority={false}
      />
    
    </section>
  );
};

export default Cta;
