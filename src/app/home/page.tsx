import { Container } from "@/src/components/container";
import { HeroSection } from "@/src/components/hero";
import { MainSection } from "@/src/components/main";

const HomePage = () => {
  return (
    <Container className="relative">
      <HeroSection />
      <MainSection />
    </Container>
  )
}

export default HomePage