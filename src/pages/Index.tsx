import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CurriculumPreview } from "@/components/home/CurriculumPreview";
import { Stats } from "@/components/home/Stats";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CurriculumPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
