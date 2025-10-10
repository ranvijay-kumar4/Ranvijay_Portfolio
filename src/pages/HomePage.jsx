import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { AchievementsSection } from "../components/sections/AchievementsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ContactSection } from "../components/sections/ContactSection";

/**
 * HomePage - Scrollable single page with all sections
 * Users can scroll through all content or use navigation to jump to sections
 */
export const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

