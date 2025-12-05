"use client";

import { useEffect, useState } from "react";
import { Container } from "@/src/components/container";
import { HeroSection } from "@/src/components/hero";
import { MainSection } from "@/src/components/main";
import Circles from "@/src/components/loading/PageLoading";
import LoadingOpacity from "@/src/components/loading/LoadingOpacity";

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
