import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ball from "public/images/ball.png";
import { ServiceData } from "../home/service-sections/ServiceData";

const SliderServices = () => {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const caseStudyItems = document.querySelectorAll(".offer__cta-single");
            const deviceWidth = window.innerWidth;

            if (deviceWidth > 576) {
                caseStudyItems.forEach((item) => {
                    const contentBox = item.getBoundingClientRect();
                    const dx = event.clientX - contentBox.x;
                    const dy = event.clientY - contentBox.y;
                    const thirdChild = item.children[2] as HTMLElement;
                    thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="section offer-two bg-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-start text-md-center">
                            <span className="sub-title">
                                what we offer
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                            <h2 className="title title-anim">our main services</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offer-two__slider-w" dir="rtl">
                <Swiper
                    slidesPerView="auto" spaceBetween={30} speed={9000} loop={true} centeredSlides={true} modules={[Autoplay]} autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    className="offer-two__slider"
                >
                    {
                        ServiceData.slice(0, 8).map((v , index) => <SwiperSlide key={index}>
                            <div className="offer-two__slider-single offer__cta">
                                <div className="offer__cta-single">
                                    <span className="sub-title">
                                        {v?.ServiceNumber}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <h2>
                                        <Link href="service-single">{v?.ServiceTitle}</Link>
                                    </h2>
                                    <div className="offer-thumb-hover d-none d-md-block">
                                        <Image src={ball} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        )

                    }
                </Swiper>
            </div>
            <div className="offer-two__slider-rtl-w">
                <Swiper
                    slidesPerView="auto" spaceBetween={30} speed={6000} loop={true} centeredSlides={true} modules={[Autoplay]} autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    className="offer-two__slider-rtl"
                >

                    {ServiceData.slice(8, 16).map((v , index) => <SwiperSlide key={index}>
                        <div className="offer-two__slider-single offer__cta">
                            <div className="offer__cta-single">
                                <span className="sub-title">
                                    {v?.ServiceNumber}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                <h2>
                                    <Link href="service-single">{v?.ServiceTitle}</Link>
                                </h2>
                                <div className="offer-thumb-hover d-none d-md-block">
                                    <Image src={ball} alt="Image" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderServices;
