import React from "react";
import Image from "next/image";
import Mission from "/public/images/ourmission.jpg";
import Vision from "public/images/ourVision.jpg";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper award">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim text-start">our mission & value</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="tex-start">
                    <p>
                      Our mission is to deliver exceptional value to our customers through innovative solutions, while our core values guide us in fostering integrity, collaboration, and sustainable growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
        <div className="col-12 col-lg-6 d-lg-none   d-block ">
            <div className="mission-s__single fade-top d-flex">
              <Image src={Mission} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top p-0 p-4">
              <h3> Core Values and Goals</h3>
              <div className="mt-4 ">
                <p className="" style={{ textTransform: "initial" }}>
                  We are dedicated to delivering unparalleled quality and value to our customers while fostering a culture of collaboration and continuous improvement within our team. With a steadfast commitment to sustainability and social responsibility, we aim to make a positive impact on both the environment and the communities we serve. Our mission is not just a statement; its a promise we uphold in every endeavor, ensuring that we consistently exceed expectations and inspire positive change in the world around us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-lg-block  d-none ">
            <div className="mission-s__single fade-top d-flex">
              <Image src={Mission} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-lg-block  ">
            <div className="mission-s__single fade-top d-flex">
              <Image src={Vision} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top py-4 px-4">
              <h3>Our Visions into Reality</h3>
              <div className="mt-4">
                <p className="" style={{ textTransform: "initial" }}>
                  Our vision at Web Sphere is to pioneer transformative solutions that redefine industry standards and inspire positive change on a global scale. With a relentless focus on innovation, integrity, and inclusivity, we strive to lead by example in every facet of our operations. We envision a future where our products and services not only meet but exceed the evolving needs of our customers, while also contributing to a more sustainable and equitable world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
