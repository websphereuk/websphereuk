import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorMain from "@/components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Error" navigation="Error" content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL for spelling mistakes." />
      <ErrorMain />
      
    </Layout>
  );
};

export default ErrorPage;
