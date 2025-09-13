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
                <title>{`${v?.banner?.ServiceTitle} || Websphere UK | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services`}</title>
                <meta
                    name="description"
                    content={v?.banner?.ServicePara}
                    key="desc"
                />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`https://websphereuk.com/service/${router.query.id}`} />
                <meta property="og:title" content={`${v?.banner?.ServiceTitle} || Websphere UK | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services`} />
                <meta property="og:description" content={v?.banner?.ServicePara} />
                <meta property="og:url" content={`https://websphereuk.com/service/${router.query.id}`} />
                <meta property="og:type" content="article" />
                <meta name="robots" content="index, follow" />
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
