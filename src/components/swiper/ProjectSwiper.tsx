import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ProjectSwiper = ({ data }: { data: string[] }) => {
  return (
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
            <Image width={720} height={405} src={item ?? ""} loading='lazy' alt="project image" className='size-full object-cover hover:scale-105 transition-transform duration-300' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
