import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BannerImage from "public/images/banner/about-banner.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import { socialLinks } from "@/utiles/options/sociallinks";

gsap.registerPlugin(ScrollTrigger);
const AboutUsBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner res-pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  We are
                  <span className="text-stroke">creative</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    Websphere UK skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies
                  </p>
                  <div className="d-flex justify-space-between flex-row cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">06+</h5>
                      <p className="fw-5">years of experience</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">1k+</h5>
                      <p className="fw-5">completed projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={BannerImage}
          alt="About Us banner – We are creative digital agency "
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt=" Background Star " className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info.websphereuk@gmail.com">mail : info.websphereuk</Link>
          <Link href="tel:+923494747712">Call : +923494747712</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href={`${socialLinks?.Instagram}`} target="_blank">
            instagram
          </Link>
          <Link href={`${socialLinks?.Linkedin}`} target="_blank">
            Linkedin
          </Link>
          <Link href={`${socialLinks?.Facebook}`} target="_blank">
            facebook
          </Link>
        </div>
        <button
          className="video-frame video-btn d-lg-block d-none"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Video Frame - Creative agency" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <div className="d-lg-flex lines d-none">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
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

export default AboutUsBanner;
