import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import AboutUsBanner from "@/components/layout/banner/about-us-banner";
import WhyChooseUs from "@/components/containers/why-choose-us";
import HomeTwoOffer from "@/components/containers/home-two/HomeTwoOffer";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import SliderServices from "@/components/containers/slider-services";
import OurStory from "@/components/containers/our-story";
import OurTheory from "@/components/containers/our-theory";
import OurMission from "@/components/containers/OurMission";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import HomeThreePortfolio from "@/components/containers/home-three/HomeThreePortfolio";
import SlideText from "@/components/containers/slide-text";

const AboutUs = () => {
  return (
    <Layout themeBlack header={2} footer={2} video={0}>
      <AboutUsBanner />
      <WhyChooseUs />
      <OurStory />
      <SliderServices />
      <OurMission />
      <TeamMembers />
      <OurTheory className="award last-sec" />
    </Layout>
  );
};

export default AboutUs;
