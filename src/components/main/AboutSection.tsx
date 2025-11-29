import { logoBg } from '@/src/assets/images'
import { BriefcaseBusiness, MapPin, Sparkle } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div>
      <h2 className="main-title">About Me</h2>
      <div className="flex flex-col-reverse nc1:flex-row nc1:items-center justify-between gap-10 mt-10">
        <div className="overflow-hidden nc1:w-80 xl:w-90 h-110 xl:h-120 border-2 border-borderColor rounded-3xl">
          <Image src={logoBg} alt="photo" width={100} height={100} className="w-full h-full object-cover hover:scale-106 transition-transform duration-500" />
        </div>
        <div className="h-px w-full nc1:h-120 nc1:w-px bg-mainColor bg-[linear-gradient(0deg,rgba(0,0,0,1)_-50%,rgba(190,193,221,0.1)_50%,rgba(0,0,0,1)_150%)]"></div>
        <div className="w-full nc1:w-[55%] xl:w-[47%]">
          <div className="text-white/70 text-[15px] nc1:text-sm xl:text-base">
            I'm a <span className="text-thirtyColor">Frontend Developer</span> specializing in <span className="text-thirtyColor">React</span> and <span className="text-thirtyColor">Next.js</span>, focused on building clean, scalable, and user-centric web applications. I’m passionate about turning business requirements into efficient interfaces, optimizing workflows, and improving product usability.
            <div className="py-1 xl:py-1.5" />
            Although early in my career, I’ve already worked on multiple real-world projects, contributing to dashboards, admin panels, internal tools, and automation-focused features that help teams work faster and more effectively.
            <div className="py-1 xl:py-1.5" />
            My goal is to create reliable, maintainable frontend solutions that not only look great but also support business growth, reduce complexity, and simplify day-to-day operations through smart, data-driven development.
          </div>
          <div className="flex flex-col mt-5 gap-2.5 xl:gap-5">
            <div className="flex flex-col pl-4 xl:pl-6 xl:gap-0.5 border-l-2 border-thirtyColor/50 rounded-l-[2px] hover:border-cyan-400 group transition-all duration-300">
              <div className="flex items-center gap-2.5 group-hover:text-cyan-400 transition-all duration-300">
                <BriefcaseBusiness size={20} />
                <p className="text-white/80 text-base xl:text-lg font-medium group-hover:text-cyan-400 transition-all duration-300">Experience</p>
              </div>
              <span className="text-thirtyColor/80 transition-all duration-300 text-[15px] group-hover:text-white/70 font-medium flex items-center">1<p className="-translate-y-px pr-1">+</p> year</span>
            </div>
            <div className="flex flex-col pl-4 xl:pl-6 xl:gap-0.5 border-l-2 border-thirtyColor/50 rounded-l-[2px] hover:border-cyan-400 group transition-all duration-300">
              <div className="flex items-center gap-2.5 group-hover:text-cyan-400 transition-all duration-300">
                <MapPin size={20} />
                <p className="text-white/80 text-base xl:text-lg font-medium group-hover:text-cyan-400 transition-all duration-300">Location</p>
              </div>
              <p className="text-thirtyColor/80 transition-all duration-300 text-[15px] group-hover:text-white/70 font-medium flex items-center">Tashkent, Uzbekistan</p>
            </div>
            <div className="flex flex-col pl-4 xl:pl-6 xl:gap-0.5 border-l-2 border-thirtyColor/50 rounded-l-[2px] hover:border-cyan-400 group transition-all duration-300">
              <div className="flex items-center gap-2.5 group-hover:text-cyan-400 transition-all duration-300">
                <Sparkle size={20} />
                <p className="text-white/80 text-base xl:text-lg font-medium group-hover:text-cyan-400 transition-all duration-300">Specialization</p>
              </div>
              <p className="text-thirtyColor/80 transition-all duration-300 text-sm xl:text-[15px] group-hover:text-white/70 font-medium">
                Frontend Developer <span className="px-1.5">|</span> Telegram Web Apps  <span className="px-1.5">|</span>  Web Solutions <br /> React.js & Next.js Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection