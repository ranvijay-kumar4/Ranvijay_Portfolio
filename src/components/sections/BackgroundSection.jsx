import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";

/**
 * BackgroundSection - Combined Education and Experience (for /background route)
 * Kept for backward compatibility
 */
export const BackgroundSection = () => {
  return (
    <div>
      <EducationSection />
      <ExperienceSection />
    </div>
  );
};

