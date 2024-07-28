import { Cta } from "@/components/Cta";
import { Header } from "@/components/Header";

import { mongodbConnect } from "@/libs";
const HomePage = async () => {
  await mongodbConnect()
  return (
    <main className="bg-slate-50">
      <Header />
      <Cta />
    </main>
  );
};

export default HomePage;
