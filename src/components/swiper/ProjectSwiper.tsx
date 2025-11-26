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
          <SwiperSlide key={i}>
            <img src={item ?? ""} alt="project image" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
