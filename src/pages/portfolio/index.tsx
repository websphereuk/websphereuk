import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioCard from "@/components/containers/main-portfolio/portfolio-card";
import CaseStudyGallery from "@/components/containers/main-portfolio/case-study-gallery";
import PortfolioMain from "@/components/containers/PortfolioMain";
import ProjectMain from "@/components/containers/project/ProjectMain";
import PartnershipsModels from "@/components/containers/partnership-models";
import Testimonial from "@/components/containers/testimonial";

const OurPortfolio = () => {
    return (
        <Layout header={2} footer={2} video={0}>
            <CmnBanner title="Portfolio" navigation="Case Study" content="Explore our portfolio showcasing cutting-edge IT solutions that have transformed businesses across various industries." />
            <PortfolioCard />
            < PartnershipsModels/>
            <CaseStudyGallery />
            <Testimonial/>
        </Layout>
    );
};

export default OurPortfolio;
