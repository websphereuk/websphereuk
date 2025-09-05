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
interface HomeProps {
  Title?: string,
  Description?: string

}

const Home = ({ Title, Description }: HomeProps) => {

  const ImageUrl = "https://websphereuk.com/images/websphereseo.png"
  return (
    <>
      <Head>
        <title>{Title}</title>


        <meta name="title" content={Title} />
        <meta name="description" content={Description} />
        <link rel="canonical" href="https://websphereuk.com/" />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Description} />
        <meta property="og:url" content="https://websphereuk.com/" />
        <meta property="og:image" content={ImageUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />






        <meta name="robots" content="index, follow" />
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
export async function getStaticProps() {
  return {
    props: {
      Title: 'Home || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services',
      Description: 'WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies',
    },
  };
}




