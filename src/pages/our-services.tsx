import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/service-sections/ServiceMain";
import VisionToReality from "@/components/containers/service-sections/service-detail/vision-to-reality";
import DevelopmentProcess from "@/components/containers/service-sections/service-detail/development-process";
import Head from "next/head";


const OurServices = () => {

  return (
    <>
      <Head>
        <title>Our Services || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
        <meta
          name="description"
          content=" Empower your business to lead the industry with cutting-edge IT solutions. Our comprehensive services harness the power of technology to propel your company to the forefront of innovation and success"
          key="desc"
        />
      </Head>
      <Layout header={2} footer={2} video={0}>
        <CmnBanner title="Our Services" navigation="Our Services" content="Empower your business to lead the industry with cutting-edge IT solutions. Our comprehensive services harness the power of technology to propel your company to the forefront of innovation and success" />
        <ServiceMain />
        <VisionToReality />
        <DevelopmentProcess className="last-sec agency" />
      </Layout>
    </>
  );
};

export default OurServices;
