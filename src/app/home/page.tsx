import { lights } from "@/src/assets/images";
import { Container } from "@/src/components/container";
import { Footer } from "@/src/components/footer";
import { HeroSection } from "@/src/components/hero";
import { MainSection } from "@/src/components/main";
import { Navbar } from "@/src/components/navbar";
import { ToTopButton } from "@/src/components/to-top/ToTopButton";
import Image from "next/image";


const HomePage = () => {
  return (
    <>
      <Image loading="eager" src={lights} alt="lights" className="absolute w-[40%]" />
      <Image loading="eager" src={lights} alt="lights" className="absolute right-0 -scale-x-100 w-[40%]" />
      <Container className="relative">
        <Navbar />
        <HeroSection />
        <MainSection />
        <ToTopButton />
        <Footer />
      </Container>
    </>
  )
}

export default HomePage