import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import nine from "public/images/projects/nine.png";
import style from "./portfolio.module.css";;
import GeneralHeading from "../general-heading";
import KbrLogo from "../../../../public/images/projects/kbr-logo.158a32bf.png";
import KbrLogoWhite from "../../../../public/images/projects/kbrlogowhite.png";
import BoxWithLogo from "../box-with-logo";
import { Card } from "../card";
import { ProjectData } from "../../../../public/images/projects/detail project/kausahal-law/logo/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
    const isItMobile = useCheckMobileScreen();
    const slider = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ele = slider.current;

        if (window.innerWidth >= 992 && ele) {
            gsap.registerPlugin(ScrollTrigger);

            const rightSections = gsap.utils.toArray(".banner-five__single");

            const pin = gsap.to(rightSections, {
                xPercent: -100 * (rightSections.length - 3),
                ease: "none",
                scrollTrigger: {
                    trigger: ele,
                    pin: true,
                    invalidateOnRefresh: true,
                    start: "center center-=100",
                    scrub: 1,
                    end: () => "+=" + (slider.current?.offsetWidth || 0),
                    markers: false,
                },
            });

            return () => {
                pin.kill();
            };
        }
    }, []);

    return (
        <>

            <div className={`${style.portfolio}  banner-five `} ref={slider} >
                <div className="section__content mx-3 text-md-center text-black mb-3">
                    <div className="sub-title  text-black">
                        From Concept to Completion
                    </div>
                </div>
                <GeneralHeading content="Explore a Showcase of Our Innovative Work" className="text-md-center mx-3 text-black mb-5" />

                {
                    !!!isItMobile
                        ?
                        <div className="section__content banner-five__wrapper container ">
                            {
                                ProjectData.map((v, index) => {
                                    return (
                                        <div key={index} className="banner-five__single">
                                            <div className="projects-s__single topy-tilt ">
                                                {
                                                    !!Boolean(v?.id) && (
                                                        <>
                                                            <BoxWithLogo Logo={true}
                                                                Img={v?.projectLogo} ImgClass={`${style?.img}`}
                                                                HoverImg={v?.projectHoverLogo} HoverImgClass={`${style?.hoverimg}`}
                                                                ButtonText={'Explore Nows'}
                                                                ButtonLink={`/portfolio/${v?.id}`}
                                                                className={`text-black mt-5 ${style?.box}`}
                                                                Heading={v?.projectHeading}
                                                                Paragraph={v?.projectParagraph}
                                                            />
                                                        </>
                                                    )
                                                }




                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="testimonials-slider">
                            <Swiper
                                modules={[Navigation]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    991: {
                                        slidesPerView: 2.5,
                                    },
                                    1140: {
                                        slidesPerView: 2.5,
                                    },
                                }}
                                autoplay
                                spaceBetween={50}
                                navigation
                            >
                                {

                                    ProjectData.map((v, index) => {

                                        return (
                                            !!Boolean(v?.id) && (
                                                <SwiperSlide key={index}>
                                                    <>
                                                        <BoxWithLogo Logo={true}
                                                            Img={v?.projectLogo} ImgClass={`${style?.img}`}
                                                            HoverImg={v?.projectHoverLogo} HoverImgClass={`${style?.hoverimg}`}
                                                            ButtonText={'Explore Nows'}
                                                            ButtonLink={`/portfolio/${v?.id}`}
                                                            className={`text-black mt-5  ${style?.box}`}
                                                            Heading={v?.projectHeading}
                                                            Paragraph={`${v?.projectParagraph?.substring(0, 180)} ...`}
                                                        />
                                                    </>
                                                </SwiperSlide>
                                            )

                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                }



            </div>
        </>

    );
};


export default Portfolio;


