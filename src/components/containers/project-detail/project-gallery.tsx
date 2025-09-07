import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/poster.png";
import FirstPortfolioImage from "../../../../public/images/projects/detail project/protfolioallery1.png"
import logwithtab from "../../../../public/images/projects/detail project/logwithtab.png";
import alfatravelSecond from "../../../../public/images/projects/detail project/protfolioallery3.png"
import ThirdPortfolioImage from "../../../../public/images/projects/detail project/protfolioallery4.png"
import FourthPortfolio from "../../../../public/images/projects/detail project/portfolio-gallery-5.png"
import style from "./project-detail.module.css"
import Image from "next/image";
import SlideText from "../slide-text";
const ProjectGallery = (data: any) => {
    console.log(data?.data?.data?.id, 'data==================')
    return (

        <>
            <div className="row">
                <div className="col-12">
                    <div className="poster__slider-wrapper">
                        <SlideText content="Project Showcase" className='mt-4' />

                        <div className={`poster__slider-w ${style?.photoGallery}`}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                speed={800}
                                loop={true}
                                centeredSlides={false}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={{
                                    nextEl: ".next-project-d ",
                                    prevEl: ".prev-project-d",
                                }}
                                className="poster__slider"
                            >
                                

                                {
                                    data?.data?.data?.PortfolioGallery?.map((v: any, index: any) => {
                                        return (
                                            <>
                                                <SwiperSlide key={index}>
                                                    <div className="poster__slider-single">
                                                        <Image src={v} alt={`${data?.data?.data?.projectHeading}- Project Gallery Photo ${index + 1}`} />
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }



                            </Swiper>
                        </div>
                        <div className="slide-group">
                            <button
                                aria-label="previous item"
                                className="slide-btn prev-project-d"
                            >
                                <i className="fa-light fa-angle-left"></i>
                            </button>
                            <button
                                aria-label="next item"
                                className="slide-btn next-project-d"
                            >
                                <i className="fa-light fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectGallery
