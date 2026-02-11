import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Viewer from 'viewerjs';
import "viewerjs/dist/viewer.css";

export const ProjectSwiper = ({ data }: { data: string[] }) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!galleryRef.current) return;

    const viewer = new Viewer(galleryRef.current, {
      toolbar: true,
      navbar: false,
      title: false,
      movable: false,
      zoomable: true,

    });

    return () => {
      viewer.destroy()
    }
  }, []);
  return (
    <div ref={galleryRef} className='size-full'>
      <Swiper
        spaceBetween={2}
        centeredSlides
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {
          data.map((item, i) => (
            <SwiperSlide key={i} className='aspect-video hover:aspect-square'>
              <Image width={720} height={405} src={item ?? ""} loading='lazy' alt="project image" className='size-full object-cover' />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
