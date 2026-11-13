import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import Footer from "../components/Footer";
import HomeSection from "../components/sections/Home";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
