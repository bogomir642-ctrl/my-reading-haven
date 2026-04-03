import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import PoemSection from "@/components/PoemSection";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <EventSection />
      <AboutSection />
      <PoemSection />
      <ArticleSection />
      <Footer />
    </>
  );
};

export default Index;
