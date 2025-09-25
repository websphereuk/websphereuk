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
import { NextSeo } from "next-seo";
interface HomeProps {
  Title?: string,
  Description?: string

}

const Home = ({ Title, Description }: HomeProps) => {

  const ImageUrl = "https://websphereuk.com/images/websphereseo.png"
  return (
    <>

{/* <NextSeo
        title="Digital Marketing Agency in Pakistan | Websphere UK"
        description="Grow your business with Websphere UK – Pakistan’s trusted digital marketing agency offering SEO, web development, and IT solutions."
        canonical="https://websphereuk.com/"
        openGraph={{
          url: "https://websphereuk.com/",
          title: "Digital Marketing Agency in Pakistan | Websphere UK",
          description:
            "SEO, web development, app design, and IT solutions by Websphere UK.",
          images: [
            {
              url: "https://websphereuk.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Websphere UK Services",
            },
          ],
          site_name: "Websphere UK",
        }}
        twitter={{
          handle: "@websphereuk",
          site: "@websphereuk",
          cardType: "summary_large_image",
        }}
      /> */}

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
      Title: 'Home || Websphere UK | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services',
      Description: 'Websphere UK skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies',
    },
  };
}




