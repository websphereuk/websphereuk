import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import BannerVideo from "@/components/layout/banner/banner-video";
import ServiceMain from "@/components/containers/service-sections/ServiceMain";
import Industries from "@/components/containers/industries/Industries";
import ScheduleCall from "@/components/containers/schedule-call/index";
import PartnershipsModels from "@/components/containers/partnership-models";
import Testimonial from "@/components/containers/testimonial";
import OurTheory from "@/components/containers/our-theory";
import SplineDesign from "@/components/containers/spline-design";
import Portfolio from "@/components/containers/portfolio";
import Head from "next/head";

const Home = () => {

  return (
    <>
      <Head>
        <title>Home  || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
        <meta
          name="description"
          content=" WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies"
          key="desc"
        />
      </Head>
      <Layout themeBlack={true} header={2} footer={2} video={false}>
        <BannerVideo />
        <ServiceMain ThemeBlack />
        <ScheduleCall />
        < Industries />
        <Portfolio />
        <OurTheory className="bg-black" />
        <PartnershipsModels />
        <SplineDesign />
        <Testimonial />

      </Layout>
    </>

  );
};

export default Home;

