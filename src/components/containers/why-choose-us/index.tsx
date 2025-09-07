import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import thumbthree from "public/images/about.png";

const WhyChooseUs = () => {
    return (
        <section className="bg-black section agency agency-two">
            <div className="container">
                <div className="row gaper align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="agency__thumb">
                            <Image src={thumbthree} alt="About - Why Choose us " className="fade-left" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="agency__content section__content">
                            <span className="sub-title">
                                Why Choose Us
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                            <h2 className="title title-anim">
                                Expert Digital Partners
                            </h2>
                            <div className="paragraph">
                                <p>

                                    Achieving real business results in the digital landscape requires a strong partner like Web Sphere. We are a reputable digital marketing agency with over six years of experience delivering successful projects across the US, UK, India, and Pakistan. Our team of experts is passionate about crafting cutting-edge and data-driven digital marketing strategies tailored to your specific business goals.We have deep expertise in delivering comprehensive solutions that drive results, such as SEO for international markets, web and app development, and social media marketing for all type of companies.
                                </p>
                            </div>
                            <div className="cta section__content-cta ">
                                <div className="single">
                                    <h5 className="fw-7">12+</h5>
                                    <p className="fw-5">years of experience</p>
                                </div>
                                <div className="single">
                                    <h5 className="fw-7">1K</h5>
                                    <p className="fw-5">completed projects</p>
                                </div>
                                <div className="single">
                                    <h5 className="fw-7">120+</h5>
                                    <p className="fw-5">Team members</p>
                                </div>
                            </div>
                            <div className="section__content-cta cta-group text-center d-none d-md-flex">


                                <Link
                                    href="/our-services"
                                    className="btn btn--primary text-capitalize"
                                >
                                    Explore Services
                                </Link>
                                <Link
                                    href="contact-us"
                                    className="btn btn--primary text-capitalize"
                                >
                                    Get In Touch
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="btn btn--primary text-capitalize"
                                >
                                    Explore Portfolio
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={star} alt="Background Star" className="star" />
            <Image src={dotlarge} alt="Background Dot" className="dot-large" />
        </section>
    );
};

export default WhyChooseUs;
