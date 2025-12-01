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
          <SwiperSlide key={i} className='aspect-video'>
            <Image width={100} height={100} src={item ?? ""} loading='lazy' alt="project image" className='w-full h-full'/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
