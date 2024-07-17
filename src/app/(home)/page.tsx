import { Cta } from "@/components/Cta";
import { Header } from "@/components/Header";

const HomePage = () => {
  console.log(process.env.WEBHOOK_SECRET, "WEBHOOK_SECRET");
  return (
    <main className="bg-slate-50">
      <Header />
      <Cta />
    </main>
  );
};

export default HomePage;
