import React from "react";
import Layout from "@/components/layout/Layout";
import TeamMembers from "@/components/containers/TeamMembers";
import AboutUsBanner from "@/components/layout/banner/about-us-banner";
import WhyChooseUs from "@/components/containers/why-choose-us";
import SliderServices from "@/components/containers/slider-services";
import OurStory from "@/components/containers/our-story";
import OurTheory from "@/components/containers/our-theory";
import OurMission from "@/components/containers/OurMission";

import Head from "next/head";
const AboutUs = () => {

  return (
    <>
      <Head>
        <title>About Us || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
        <meta
          name="description"
          content=" WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies"
          key="desc"
        />
      </Head>
      <Layout themeBlack header={2} footer={2} video={0}>
        <AboutUsBanner />
        <WhyChooseUs />
        <OurStory />
        <SliderServices />
        <OurMission />
        <TeamMembers />
        <OurTheory className="award last-sec" />
      </Layout>
    </>
  );
};

export default AboutUs;
