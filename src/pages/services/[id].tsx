import { ServiceData } from "@/utiles/options/ServiceData";
import Banner from "@/components/containers/service-sections/service-detail/banner";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Feature from "@/components/containers/service-sections/service-detail/feature";
import ReasonToChoose from "@/components/containers/service-sections/service-detail/reason-to-choose";
import DevelopmentProcess from "@/components/containers/service-sections/service-detail/development-process";
import ScheduleCall from "@/components/containers/schedule-call";
import SlideText from "@/components/containers/slide-text";
import VisionToReality from "@/components/containers/service-sections/service-detail/vision-to-reality";
import ServiceFaqs from "@/components/containers/service-sections/service-detail/service-faqs";
import Head from "next/head";

const Services = () => {
    const router = useRouter()
    const UpdatedArray = ServiceData.filter(obj => obj.Link === router.query.id);
    const v = UpdatedArray[0]
    return (
        <>
            <Head>
                <title>{`${v?.banner?.ServiceTitle} || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services`}</title>
                <meta
                    name="description"
                    content={v?.banner?.ServicePara}
                    key="desc"
                />
            </Head>
            <Layout themeBlack={true} header={2} footer={2} >
                <Banner data={v} />
                <Feature data={v} />
                <ReasonToChoose data={v} />
                <DevelopmentProcess />
                <VisionToReality />
                <ServiceFaqs data={v} />
            </Layout>
        </>
    )
}

export default Services
