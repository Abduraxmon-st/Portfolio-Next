import Image from "next/image";
import { lights } from "../assets/images";
import { Container } from "../components/container";
import { HeroSection } from "../components/hero";
import { MainSection } from "../components/main";
import { Navbar } from "../components/navbar";
import { ToTopButton } from "../components/to-top/ToTopButton";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Image  loading="eager" src={lights} alt="lights" className="absolute w-[40%]" />
      <Image  loading="eager" src={lights} alt="lights" className="absolute right-0 -scale-x-100 w-[40%]" />
      <Container className="relative">
        <Navbar />
        <HeroSection />
        <MainSection />
        <ToTopButton />
        <Footer />
      </Container>
    </>
  );
}
