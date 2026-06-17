import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stars from "@/components/Stars";
import InfoBanner from "@/components/InfoBanner";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stars />
        <InfoBanner />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
