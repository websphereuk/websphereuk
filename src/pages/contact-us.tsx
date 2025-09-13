import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import MultiStepForm from "@/components/containers/multi-step-form";
import Head from "next/head";

const ContactUs = () => {
  <Head>
    <title>Contact Us || Websphere Uk | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
    <meta
      name="description"
      content="Contact Websphere Uk today! We'd love to hear from you. Whether you have questions, need assistance, or want to discuss how we can help your business thrive, our team is here to assist you."
      key="desc"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://websphereuk.com/contact-us" />
    <meta property="og:title" content="Contact Us || Websphere Uk | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services" />
    <meta property="og:description" content="Contact Websphere Uk today! We'd love to hear from you. Whether you have questions, need assistance, or want to discuss how we can help your business thrive, our team is here to assist you." />
    <meta property="og:url" content="https://websphereuk.com/contact-us" />
    <meta property="og:type" content="website" />
  </Head>
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Contact Us" navigation="Contact Us" content="We'd love to hear from you! Whether you have questions, need assistance, or want to discuss how we can help your business thrive, our team is here to assist you. Reach out to us through the form below, give us a call, or send us an email. Let's start the conversation today!" />
      <MultiStepForm />
    </Layout>
  );
};

export default ContactUs;
