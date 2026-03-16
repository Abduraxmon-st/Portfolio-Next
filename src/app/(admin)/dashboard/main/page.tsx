import { AboutSection, ContactSection, HeaderSection } from "@/components/admin/section/main-sections"

const MainPage = () => {
  return (
    <div className="space-y-4">
      <HeaderSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default MainPage