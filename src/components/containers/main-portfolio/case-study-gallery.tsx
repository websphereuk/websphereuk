import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import eight from "public/images/portfolio/eight.png";
import nine from "public/images/portfolio/nine.png";
import { ProjectData } from "@/utiles/options/portfolio-data";

const CaseStudyGallery = () => {
  return (
    <section className="section portfolio portfolio-three ">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          {ProjectData.slice(0,9).map((project) => (
            <SwiperSlide key={project.id}>
              <div className="portfolio__text-slider-single">
                <h2 className="h1">
                  <Link href={`/portfolio/${project?.id}`}>
                    {project.projectHeading}
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="portfolio-three__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-portfolio",
                  prevEl: ".prev-portfolio",
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 1.5,
                  },
                }}
                className="portfolio-three__slider"
              >
                {
                  ProjectData.slice(0, 9).map((v, index) => {
                    return (
                      <>
                        <SwiperSlide key={index}>
                          <div className="portfolio__single topy-tilt">
                            <Link href={`/portfolio/${v?.id}`}>
                              {v?.PortfolioGallery && (
                                <Image  src={v?.PortfolioGallery?.[4]} style={{objectPosition:"center"}} alt={`${v.projectHeading}`} />
                              )}
                            </Link>
                            <div className="portfolio__single-content">
                              <Link href={`/portfolio/${v?.id}`}>
                                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                              </Link>
                              <h4>
                                <Link href={`/portfolio/${v?.id}`}>{v?.projectHeading}</Link>
                              </h4>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    )
                  })
                }


              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-portfolio">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-portfolio">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default CaseStudyGallery;
