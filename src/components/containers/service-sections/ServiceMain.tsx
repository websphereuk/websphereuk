import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ServiceData } from "../../../utiles/options/ServiceData";
import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";
import { useRouter } from "next/router";
import SeoFriendlyHeading from "@/components/heading/seo-friendly-heading";
interface ServicesMainProps {
  ThemeBlack?: Boolean;
  AsUseSection?: Boolean;

}
const ServiceMain = (props: ServicesMainProps) => {
  const router = useRouter();
  const isItMobile = useCheckMobileScreen();
  const [itemsToShow, setItemsToShow] = useState(isItMobile ? 3 : 6);
  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + (isItMobile ? 1 : 3));
  };
  useEffect(() => {
    setItemsToShow(isItMobile ? 3 : 6);
  }, [isItMobile]);
  return (
    <section className={`section service-t ${props?.ThemeBlack && 'bg-black'}`}>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {!!!Boolean(props?.AsUseSection) && (
              <div className="text-md-center container agency__content section__content">
                <span className="sub-title">
                  Services We Offer
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
                
                  <SeoFriendlyHeading content="Dominate Your Industry with IT Power " />
                

                <div className="paragraph mt-4 mb-5 mx-md-5">
                  <p>
                    Unleash the full potential of your business with Web Sphere of cutting-edge IT solutions. <br /> We craft customized plans to empower your growth, unlock efficiencies, and propel you ahead of the competition.
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
                      <div key={index} onClick={() => { router.push(` /services/${v?.Link}/ `) }} className=" col-lg-4 col-md-6  my-3" >
                        <div className="service-t-single-wrapper">
                          <div className="hover-box-sh service-t__slider-single">

                            <div className="intro">
                              <span className="sub-title">
                                {v?.ServiceNumber}
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>

                              <div >

                                <Link  href={`/services/${v?.Link}/  `} className="title " style={{fontSize:"30px" , fontWeight:"700"}}>{v?.banner?.ServiceTitle}</Link>
                              </div>
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
                              <Link href={`/services/${v?.Link}/  `}>
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
