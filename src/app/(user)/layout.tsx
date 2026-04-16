import { AdminAccessModal } from '@/components/admin/modal/AdminAccessModal';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import Tracker from '@/components/mouse-tracker/Tracker';
import { Navbar } from '@/components/navbar';
import PageLoadAnimation from '@/components/onload-animation/onLoadAnimation';
import { ToTopButton } from '@/components/to-top/ToTopButton';
import { CursorProvider } from '@/context/CursorContext';
import React from 'react'
import LightRays from '@/components/lightRays/LightRays';

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='relative' style={{ cursor: "none", overflow: "unset" }}>
      <CursorProvider>
        <AdminAccessModal />
        {/* <PageLoadAnimation duration={1.5} translateY={-250}>
          <Image loading="eager" src={lights} alt="lights" className="hidden nc1:block absolute w-[40%] -z-1" />
        </PageLoadAnimation>
        <PageLoadAnimation duration={1.5} translateY={-250}>
          <Image loading="eager" src={lights} alt="lights" className="absolute right-0 -scale-x-100 w-full h-screen nc1:h-auto nc1:w-[40%] -z-1" />
        </PageLoadAnimation> */}
        <PageLoadAnimation duration={3} translateY={-250}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff90"
            raysSpeed={0.5}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={2}
            saturation={2}
          />
        </PageLoadAnimation>
        <Tracker />
        <Container>
          <Navbar />
        </Container>
        <div className="relative z-1">
          {children}
        </div>
        <Container className="relative">
          <Footer />
        </Container>
        <PageLoadAnimation duration={1.5} translateY={250}>
          <div className="border-t border-borderColor py-7 xl:py-9 mt-10 nc1:mt-20">
            <p className="text-xs xl:text-base text-center text-descColor/50">© 2025 Abduraxmon Tojixo'jayev. All rights reserved.</p>
          </div>
        </PageLoadAnimation>
        <ToTopButton />
      </CursorProvider>
    </div>
  )
}

export default UserLayout