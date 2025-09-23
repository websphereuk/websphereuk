import React from "react";
import Link from "next/link";
import { ProjectData } from "@/utiles/options/portfolio-data";
import GeneralHeading from "../general-heading";
import style from "../../containers/portfolio/portfolio.module.css";

const PortfolioCard = () => {
  return (
    <section className={style.portfolioSection}>
      {/* Extra blob div */}
      <div className={style.midBlob}></div>

      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <div className={style.subtitle}>Recent Portfolio</div>
          <GeneralHeading
            className="text-center mb-5"
            content="Our Latest Innovative IT Solutions"
          />
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {ProjectData.slice(0, 10).map((v, i) => (
            <div key={i} className="col-12 col-md-6">
              <Link href={`/portfolio/${v?.projectLink}`}>
              <div className={style.card}>
                {/* Image */}
                <div
                  className={style.image}
                  role="img" aria-label={`${v?.projectHeading} feature image showcasing project highlights`}
                  style={{ backgroundImage: `url(${v?.Banner?.BannerTwo})` }}
                ></div>

                {/* Content */}
                <div className={style.content}>
                  <h3 className={style.title}>{v?.projectHeading}</h3>
                  <p className={style.description}>
                    {v?.ProjectInfo?.Description?.substring(0, 160)}...
                  </p>

                  {/* Features */}
                  <div className={style.features}>
                    {v?.ProjectInfo?.Features?.features
                      ?.slice(0, 3)
                      .map((feature, idx) => (
                        <span key={idx} className={style.feature}>
                          {feature}
                        </span>
                      ))}
                  </div>

                  <Link href={`/portfolio/${v?.projectLink}`} className={style.button}>
                    View Project
                  </Link>
                </div>
              </div>

              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;



// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import dot from "public/images/portfolio/dot.png";
// import SwiperCore from "swiper";
// import { ProjectData } from "@/utiles/options/portfolio-data";
// import GeneralHeading from "../general-heading";

// // Import your images dynamically


// const PortfolioCard = () => {
//   const [hover, setHover] = useState(0);
//   return (
//     <section className="section portfolio    fade-wrapper position-relative">
//       <div className="section__content text-center">
//         <div className="sub-title">
//           Recent Portfolio
//         </div>
//         <GeneralHeading className="text-center mb-5" content="Discover Our Latest Innovative IT Solutions" />
//       </div>
//       <div className="portfolio__text-slider-w">
//       </div>
//       <div className="container  px-4">
//         <div className="row gaper ">
//           {ProjectData.slice(2, 7).reverse().map((project, index) => (
//             <div key={project.id} className=" my-4 col-12 col-sm-6 col-xl-4">
//               <div
//                 className={
//                   "portfolio__single topy-tilt fade-top" +
//                   (hover === index ? " portfolio__single-active" : " ")
//                 }
//                 onMouseEnter={() => setHover(index)}
//               >
//                 <Link href={`portfolio/${project?.id}`}>
//                   {
//                     project?.ThumbNail && (

//                       <Image src={project?.ThumbNail[0]} alt="Image" />
//                     )
//                   }
//                 </Link>
//                 <div className="portfolio__single-content">
//                   <Link href={`portfolio/${project?.id}`}>
//                     <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                   </Link>
//                   <h4>
//                     <Link href={`portfolio/${project?.id}`}>{project.projectHeading}</Link>
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 col-sm-6 col-xl-4">
//             <div className="portfolio__single-alt-wrapper fade-top">
//               <div className="portfolio__single-alt topy-tilt">
//                 <h4>
//                   <Link href="/contact-us">Schedule a Call</Link>
//                 </h4>
//                 <Link href="/contact-us" className="arr">
//                   <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
//                 </Link>
//                 <Image src={dot} alt="Image" className="dot-one" />
//                 <Image src={dot} alt="Image" className="dot-two" />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default PortfolioCard;