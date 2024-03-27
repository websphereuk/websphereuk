import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
interface SlideTextProps {
    content: string;
}

const SlideText = (props: SlideTextProps) => {
    return (
        <section className=" portfolio portfolio-three pb-0">
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
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1 str">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1 str">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1 str">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="portfolio__text-slider-single">
                            <h2 className="h1">
                                <Link href="portfolio">
                                    {props?.content}
                                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                </Link>
                            </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </section>
    );
};

export default SlideText;
