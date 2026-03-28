"use client"
import { experiences } from "@/data/experience"
import OnViewAnimation from "../onload-animation/onviewAnimation"
import { ExperienceCard } from "../card/ExperienceCard"

export const ExperienceSection = () => {
  return (
    <div className="mt-30 xl:mt-45">
      <OnViewAnimation duration={1} translateX={-100}>
        <h2 className="main-title">Experience</h2>
      </OnViewAnimation>
      <div>
        <div className="relative mt-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              data={experience}
              isFirst={index === 0}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
