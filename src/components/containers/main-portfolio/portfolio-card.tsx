import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import dot from "public/images/portfolio/dot.png";
import SwiperCore from "swiper";
import { ProjectData } from "@/utiles/options/portfolio-data";
import GeneralHeading from "../general-heading";

// Import your images dynamically


const PortfolioCard = () => {
  const [hover, setHover] = useState(0);

  // Your portfolio data

  // SwiperCore.use([Autoplay]); // Uncomment this line if you're using SwiperCore

  return (
    <section className="section portfolio    fade-wrapper position-relative">
      <div className="section__content text-center">
        <div className="sub-title">
          Recent Portfolio
        </div>
        <GeneralHeading className="text-center mb-5" content="Discover Our Latest Innovative IT Solutions"/>
      </div>
      <div className="portfolio__text-slider-w">
      </div>
      <div className="container  px-4">
        <div className="row gaper ">
          {ProjectData.slice(2 , 7).reverse().map((project, index) => (
            <div key={project.id} className=" my-4 col-12 col-sm-6 col-xl-4">
              <div
                className={
                  "portfolio__single topy-tilt fade-top" +
                  (hover === index ? " portfolio__single-active" : " ")
                }
                onMouseEnter={() => setHover(index)}
              >
                <Link href={`portfolio/${project?.id}`}>
                  <Image style={{}} width={250} height={500} src={`${project?.Banner?.ThumbNailBanner}`} alt="Image" />
                </Link>
                <div className="portfolio__single-content">
                  <Link href={`portfolio/${project?.id}`}>
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                  <h4>
                    <Link href={`portfolio/${project?.id}`}>{project.projectHeading}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">Schedule a Call</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
    </section>
  );
};

export default PortfolioCard;
