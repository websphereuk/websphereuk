import React from "react";
import Image from "next/image";
import Link from "next/link";
 import GirlImage from "public/images/why-us-image.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const OurStory = () => {
  return (
    <section className="section award ">
      <div className="container">
        <div className="row gaper justify-content-between align-items-center">

          <div className="col-12 col-lg-6 col-xxl-5 ">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Our <span>Story</span>
              </h2>
              <div className="paragraph">
                <p>
                Embark on a journey through our company of  rich narrative, where innovation meets dedication. From our humble beginnings to our present-day accomplishments, every chapter is woven with passion, perseverance, and a relentless pursuit of excellence. Join us as we unfold the tale of our triumphs, challenges, and the unwavering commitment that propels us forward Experience the essence of our brand, crafted with a blend of vision, values, and a steadfast focus on exceeding expectations
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2021</h4>
                  <h4>Progress</h4>
                  <p>Pioneering Progress</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Resilience</h4>
                  <p>Resilience & Growth</p>
                </div>
                <div className="single">
                  <h4>2023</h4>
                  <h4>Innovation</h4>
                  <p>Innovation Unleashed</p>
                </div>
              </div>
              
            
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
             
              <Image
                src={GirlImage}
                alt="Image"
                className="thumb-two fade-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default OurStory;
