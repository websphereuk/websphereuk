import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/service-sections/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import VisionToReality from "@/components/containers/service-sections/service-detail/vision-to-reality";
import DevelopmentProcess from "@/components/containers/service-sections/service-detail/development-process";
import OurTheory from "@/components/containers/our-theory";

const OurServices = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" content="Empower your business to lead the industry with cutting-edge IT solutions. Our comprehensive services harness the power of technology to propel your company to the forefront of innovation and success" />
      <ServiceMain />
      <VisionToReality />
      <DevelopmentProcess className="last-sec agency"/>
    </Layout>
  );
};

export default OurServices;
