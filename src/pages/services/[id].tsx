import { ServiceData } from "@/utiles/options/ServiceData";
import Banner from "@/components/containers/service-sections/service-detail/banner";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Feature from "@/components/containers/service-sections/service-detail/feature";
import ReasonToChoose from "@/components/containers/service-sections/service-detail/reason-to-choose";

const Services = () => {
    const router = useRouter()
    const UpdatedArray = ServiceData.filter(obj => obj.Link === router.query.id);
    const v = UpdatedArray[0]
    return (
        <Layout themeBlack={true} header={2} footer={2} video={true}>
            <Banner title={v?.banner?.ServiceTitle} para={v?.banner?.ServicePara} />
            <Feature data={v} />
            <ReasonToChoose />
            <UxProcessTwo />
        </Layout>
    )
}

export default Services
