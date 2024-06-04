import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videobg from "../../../../public/images/projects/videobg.jpg";
import dotlarge from "public/images/agency/dot-large.png";
import arrow from "public/images/banner/arrow.png";
import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";

const BannerSlides = (data: any) => {
    const [videoActive, setVideoActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const isItMobile = useCheckMobileScreen();
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };
    console.log(data, 'data============')


    return (
        <>
            <section className="banner-three">
                <div className="banner-three__slider-w banner-three-alt-w">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        speed={1000}
                        loop={true}
                        centeredSlides={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            reverseDirection: false,
                        }}
                        onSlideChange={handleSlideChange}
                        className="banner-three__slider banner-three-alt"
                    >
                        <SwiperSlide>
                            <div
                                className="banner-three__slider-single"
                                style={{
                                    backgroundImage: `url(${!isItMobile ? data.data.Banner.BannerOne : data.data.Banner.MobileBannerTwo})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"

                                    // backgroundImage: "url('/images/projects/detail project/alfatravel-second.png')",


                                }}
                            >
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                                            <div className="banner-three__content" style={isItMobile ? { visibility: "hidden" } : {}}>
                                                <h1 className="light-title text-capitalize" style={!isItMobile ? { marginLeft: "75px", fontSize: "65px" } : {}}>


                                                    Presenting our
                                                    <span style={{ color: "#55e6a5" }}> {data?.data?.projectHeading} </span>
                                                    masterpiece
                                                </h1>
                                                <div className="section__content-cta cta">
                                                    <div className="arrow-wrapper d-none d-md-block">
                                                        <span className="arrow"></span>
                                                    </div>
                                                    <Link
                                                        href="/contact-us"
                                                        className="btn btn--secondary"
                                                    >
                                                        Schedule A Call
                                                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="banner-three__slider-single"
                                style={{

                                    backgroundImage: `url(${!isItMobile ? data.data.Banner.BannerTwo : data.data.Banner.MobileBannerOne})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            >
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                                            <div className="banner-three__content"
                                                style={isItMobile ? { visibility: "hidden" } : { visibility: "hidden" }}
                                            >
                                                <h1 className="light-title">
                                                    A closer look at
                                                    <span style={{ color: "#55e6a5" }}> {data?.data?.projectHeading} </span> success
                                                </h1>
                                                <div className="section__content-cta cta">
                                                    <div className="arrow-wrapper d-none d-md-block">
                                                        <span className="arrow"></span>
                                                    </div>
                                                    <Link
                                                        href="our-services"
                                                        className="btn btn--secondary"
                                                    >
                                                        our services
                                                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="banner-three__slider-single"
                                style={

                                    {
                                        backgroundImage: `url(${!isItMobile ? data.data.Banner.BannerThree : data.data.Banner.MobileBannerTwo})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat"


                                    }}
                            >
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">

                                            <div className="banner-three__content" style={isItMobile ? { visibility: "hidden" } : {}}>
                                                <h1 className="light-title text-capitalize" style={!isItMobile ? { marginLeft: "75px", fontSize: "65px" } : {}}>
                                                Showcasing our
                                                    <span style={{ color: "#55e6a5" }}> {data?.data?.projectHeading} </span> achievement
                                                </h1>
                                                <div className="section__content-cta cta">
                                                    <div className="arrow-wrapper d-none d-md-block">
                                                        <span className="arrow"></span>
                                                    </div>
                                                    <Link
                                                        href="/contact-us"
                                                        className="btn btn--secondary"
                                                    >
                                                        Schedule A Call
                                                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <Image src={arrow} alt="Image" className="arrow-img" />
                <Image src={dotlarge} alt="Image" className="dot-img" />
                <div className="banner-three__slider-progress-wrapper">
                    <div className="container">
                        <div className="banner-three__slider-progress">
                            <div
                                className={
                                    "single-item" +
                                    (activeIndex === 0 ? " single-item-active" : " ")
                                }
                            >
                                <span>01</span>
                                <p>Project Intro</p>
                                <div className="slider-progress"></div>
                            </div>
                            <div
                                className={
                                    "single-item" +
                                    (activeIndex === 1 ? " single-item-active" : " ")
                                }
                            >
                                <span>02</span>
                                <p>Project Detail</p>
                                <div className="slider-progress"></div>
                            </div>
                            <div
                                className={
                                    "single-item" +
                                    (activeIndex === 2 ? " single-item-active" : " ")
                                }
                            >
                                <span>03</span>
                                <p>Project Feature</p>
                                <div className="slider-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-three__meta ban-three-g-meta">
                    <div className="cta">
                        <div className="single">
                            <h5 className="fw-7">06+</h5>
                            <p className="fw-5">years of experience</p>
                        </div>
                        <div className="single">
                            <h5 className="fw-7">1k</h5>
                            <p className="fw-5">completed projects</p>
                        </div>
                    </div>
                    <div className="banner-three__video">
                        <Image src={videobg} width={250} height={187} alt="Image" />
                        <button
                            className="video-frame video-btn"
                            onClick={() => setVideoActive(true)}
                        >
                            <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                    </div>
                </div>
            </section >
            <div
                className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
                onClick={() => setVideoActive(false)}
            >
                <div className="video-inner">
                    <div
                        className="video-container"
                        onClick={(e: any) => e.stopPropagation()}
                    >
                        {videoActive && <YoutubeEmbed embedId="_qZmPEIWt2Y?si=eKoU4d55b0r9JO84" />}
                        <button
                            aria-label="close video popup"
                            className="close-video-popup"
                            onClick={() => setVideoActive(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSlides;
