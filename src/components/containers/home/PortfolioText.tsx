import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import dot from "public/images/portfolio/dot.png";
import SwiperCore from "swiper";
import { ProjectData } from "@/utiles/options/portfolio-data";

// Import your images dynamically
const images = [
  require("public/images/portfolio/one.png"),
  require("public/images/portfolio/two.png"),
  require("public/images/portfolio/three.png"),
  require("public/images/portfolio/four.png"),
  require("public/images/portfolio/five.png"),
  require("public/images/portfolio/six.png"),
  require("public/images/portfolio/seven.png"),
];

const PortfolioText = () => {
  const [hover, setHover] = useState(0);

  // Your portfolio data
  const portfolioData = [
    { title: "Digital Marketing" },
    { title: "Web Development" },
    { title: "Graphic Design" },
    { title: "Content Creation" },
    { title: "SEO Optimization" },
    { title: "Social Media Management" },
    { title: "Branding" },
  ];

  // SwiperCore.use([Autoplay]); // Uncomment this line if you're using SwiperCore

  return (
    <section className="section portfolio pb-0   fade-wrapper position-relative">
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
          {portfolioData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__text-slider-single">
                <h2 className={`h1 ${index % 2 === 0 ? "" : "str"}`}>
                  <Link href="portfolio">
                    {`Case Study Portfolio`}
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-fluid last-sec">
        <div className="row gaper">
          {ProjectData.slice(0, 7).map((project, index) => (
            <div key={project.id} className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "portfolio__single topy-tilt fade-top" +
                  (hover === index ? " portfolio__single-active" : " ")
                }
                onMouseEnter={() => setHover(index)}
              >
                <Link href="portfolio">
                  <Image style={{}} width={250} height={500} src={``} alt="Image" />
                </Link>
                <div className="portfolio__single-content">
                  <Link href="portfolio">
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                  <h4>
                    <Link href="portfolio">{project.projectHeading}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">view all work</Link>
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

export default PortfolioText;
