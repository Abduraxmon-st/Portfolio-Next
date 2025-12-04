import { ProjectsSection } from "./ProjectsSection"
import { SkillsSection } from "./SkillsSection"
import { ExperienceSection } from "./ExperienceSection"
import AboutSection from "./AboutSection"

export const MainSection = () => {
  return (
    <div className="mt-30">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection page={false} button/>
      {/* <ExperienceSection /> */}
    </div>
  )
}
