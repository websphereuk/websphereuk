import Image from "next/image"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const CardGallery = (data : any) => {
    return (

        <>
            <div className="project-d__slider-w section__content-cta">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    speed={100}
                    loop={true}
                    centeredSlides={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        1400: {
                            slidesPerView: 6,
                            centeredSlides: true,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    className="project-d__slider"
                >
                    {
                        data?.data?.data?.PortfolioGallery?.map((v: any , index : any) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className="poster__slider-single">
                                            <Image src={v} alt="Image" />
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }

                </Swiper>
            </div>
        </>
    )
}

export default CardGallery
