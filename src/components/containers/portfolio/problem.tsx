import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import nine from "public/images/projects/nine.png";
import style from "./portfolio.module.css";
import GeneralHeading from "../general-heading";
import KbrLogo from "../../../../public/images/projects/kbr-logo.158a32bf.png";
import KbrLogoWhite from "../../../../public/images/projects/kbrlogowhite.png";
import BoxWithLogo from "../box-with-logo";
import { Card } from "../card";
import { ProjectData } from "@/utiles/options/portfolio-data";

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const dynamic = "banner";
  const slider = useRef<HTMLDivElement>(null);

  // Ensure ScrollTrigger setup happens after ProjectData is available:
  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger); // Register GSAP plugin if not done already

      const rightSections = gsap.utils.toArray(`.${dynamic}`);

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
        pin.kill(); // Clean up animation on unmount
      };
    }
  }, [ProjectData]); // Dependency on ProjectData to ensure data is loaded

  return (
    <div className="banner-five" ref={slider}>
      <div className="banner-five__wrapper">
        {/* Map through ProjectData, ensuring consistent class names */}
        {ProjectData.map((project, index) => (
          <div key={index} className={`banner-five__single ${dynamic}`}>
            <div className="projects-s__single topy-tilt">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={nine} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">{project.projectHeading || "Project Title"}</Link>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;