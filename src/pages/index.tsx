import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/about-us-banner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import BannerVideo from "@/components/layout/banner/banner-video";
import ServiceMain from "@/components/containers/home/service-sections/ServiceMain";
import Industries from "@/components/containers/industries/Industries";
import gsap from "gsap";
import Loader from "@/components/containers/loader";
import ScheduleCall from "@/components/containers/schedule-call/index";
import PartnershipsModels from "@/components/containers/partnership-models";
import Testimonial from "@/components/containers/testimonial";
import OurTheory from "@/components/containers/our-theory";
import SplineDesign from "@/components/containers/spline-design";
import Portfolio from "@/components/containers/portfolio";
import Problem from "@/components/containers/portfolio/problem";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";
import AnimatedText from "@/components/containers/animated-text";

const Home = () => {

  return (

    <>
      <Layout themeBlack={true} header={2} footer={2} video={false}>
        <BannerVideo />
        <ServiceMain ThemeBlack />
        <ScheduleCall />
        < Industries />
        <Portfolio />
        {/* <Problem/> */}
        <OurTheory className="bg-black" />
        <PartnershipsModels />
        <SplineDesign />
        {/* <ClientFeedbackMain /> */}
        <Testimonial />

      </Layout>
    </>

  );
};

export default Home;

