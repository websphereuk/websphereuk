import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/poster.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/d-one.png";
import dtwo from "public/images/projects/d-two.png";
import dthree from "public/images/projects/d-three.png";
import dfour from "public/images/projects/d-four.png";
import dfive from "public/images/projects/d-five.png";
import ProjectGallery from "../project-detail/project-gallery";
import CardGallery from "../project-detail/card-gallery";

const ProjectDetailsMain = (data: any) => {
  console.log(data?.data?.ProjectInfo?.Features?.features, 'datasaaaaaaaaaaaaaaaa')
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg"> Overview</h3>
              <p>
                {data?.data?.ProjectInfo?.Overview}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Features</h3>
              <p>
                {data?.data?.ProjectInfo?.Features?.content}
              </p>
              <ul>
                {data?.data?.ProjectInfo?.Features?.features.map((feature: any) => {
                  return (

                    <li>{feature}</li>
                  )
                })}

              </ul>
            </div>
          </div>
        </div>
        <ProjectGallery data={data} />
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Location</h5>
                <p>{data?.data?.ProjectInfo?.Location}</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Industry</h5>
                <p>{data?.data?.ProjectInfo?.Industry}</p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Project Duration</h5>
                <p>{data?.data?.ProjectInfo?.Duration}</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                {data?.data?.ProjectInfo?.Description}
              </p>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                  And the day came when the risk to remain tight in a bud was
                  more painful than the risk it took to blossom.
                </blockquote>
              </div>
              <div className="author">
                <h4>- BILLI REUSS</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">The Conclusion</h3>
              <p>
                {data?.data?.ProjectInfo?.conclusion}
              </p>

            </div>
          </div>
        </div>
      </div>
      <CardGallery data={data} />
    </section>
  );
};

export default ProjectDetailsMain;
