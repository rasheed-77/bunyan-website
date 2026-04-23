import Header from "@/components/ui/home/Header";
import CompanyIntro from "@/components/ui/home/CompanyIntro";
import VisionMission from "@/components/ui/home/VisionMission";
import ServicesPreview from "@/components/ui/home/ServicesPreview";
import FeaturedProjects from "@/components/ui/home/Properties";
import WhyBunyan from "@/components/ui/home/WhyBunyan";
import ContactCTA from "@/components/ui/home/ContactCTA";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <CompanyIntro />
      <VisionMission />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyBunyan />
      <ContactCTA />
      <Footer />
    </>
  );
}
