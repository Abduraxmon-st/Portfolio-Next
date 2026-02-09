"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { HeroSection } from "@/components/hero";
import { MainSection } from "@/components/main";
import Circles from "@/components/loading/PageLoading";
import LoadingOpacity from "@/components/loading/LoadingOpacity";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loaded) {
    return <Circles />;
  }

  return (
    <Container className="relative">
      <LoadingOpacity loaded={loaded} />
      <HeroSection />
      <MainSection />
    </Container>
  );
};

export default HomePage;
