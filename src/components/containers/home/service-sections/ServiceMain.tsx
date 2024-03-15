import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ServiceData } from "./ServiceData";
interface ServicesMainProps {
  ThemeBlack?: Boolean;
  AsUseSection?: Boolean;

}
const ServiceMain = (props: ServicesMainProps) => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + 3);
  };
  return (
    <section className={`section service-t ${props?.ThemeBlack && 'bg-black'}`}>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {!!!Boolean(props?.AsUseSection) && (
              <div className="text-center container agency__content section__content">
                <span className="sub-title">
                  Our Services
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
                <h2 className="title ">
                  Discover the Art of Exceptional Services
                </h2>
                <div className="paragraph  mb-5 mx-5">
                  <p>
                    Elevate your journey with innovation, excellence, and personalized solutions. Let us turn your vision into reality. Exceptional service, <br /> exceptional experiences. Welcome to a new era of success with <b> Web Sphere </b>
                  </p>
                </div>


              </div>
            )

            }
            <div className="service-t__slider-w">

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
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <div className="row">
                  {ServiceData.slice(0, itemsToShow).map((v, index) => {
                    return (
                      <div key={index} className=" col-lg-4 my-3" >
                        <div className="service-t-single-wrapper">
                          <div className="hover-box-sh service-t__slider-single">

                            <div className="intro">
                              <span className="sub-title">
                                {v?.ServiceNumber}
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>

                              <h4>

                                <Link href="service-single" className="title ">{v?.ServiceTitle}</Link>
                              </h4>
                            </div>
                            <ul>

                              {
                                v?.ServiceFeatures.map((feature, index) => (
                                  <li key={index}>
                                    {feature}
                                  </li>))
                              }
                            </ul>
                            <div className="cta">
                              <Link href="service-single">
                                <i className="icon-arrow-top-right"></i>
                                <span>service details</span>
                              </Link>
                            </div>
                          </div>


                        </div>

                      </div>
                    )
                  })}
                  {itemsToShow < ServiceData.length && (
                    <div className="text-center mt-3">
                      <button className="btn btn--primary" onClick={handleLoadMore}>
                        Load More
                      </button>
                    </div>)}
                </div>

                {/* <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">UX Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Estimation</li>
                        <li>Research</li>
                        <li>Story board</li>
                        <li>User Flow</li>
                        <li>Information Architecture</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">UI Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Hi-Fidelity Wireframe</li>
                        <li>Design System</li>
                        <li>Final Presentation</li>
                        <li>Final Delivery</li>
                        <li>Post Delivery Support</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Front End</li>
                        <li>Backend</li>
                        <li>Mobile App</li>
                        <li>Post Delivery Support</li>
                        <li>server development</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Branding</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Define Idea</li>
                        <li>Competitor Reserach</li>
                        <li>Target Audience</li>
                        <li>Idea Validation</li>
                        <li>Customer Value</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">UX Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Estimation</li>
                        <li>Research</li>
                        <li>Story board</li>
                        <li>User Flow</li>
                        <li>Information Architecture</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">UI Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Hi-Fidelity Wireframe</li>
                        <li>Design System</li>
                        <li>Final Presentation</li>
                        <li>Final Delivery</li>
                        <li>Post Delivery Support</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Front End</li>
                        <li>Backend</li>
                        <li>Mobile App</li>
                        <li>Post Delivery Support</li>
                        <li>server development</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div >
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section >
  );
};

export default ServiceMain;
