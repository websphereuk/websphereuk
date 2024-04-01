import { ServiceData } from "@/components/containers/home/service-sections/ServiceData";
import Banner from "@/components/containers/home/service-sections/service-detail/banner";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import Layout from "@/components/layout/Layout";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import { useRouter } from "next/router";

const Services = () => {
    const router = useRouter()
    const UpdatedArray = ServiceData.filter(obj => obj.Link === router.query.id);
    const v = UpdatedArray[0]
    return (
        <Layout themeBlack={true} header={2} footer={2} video={true}>
            <Banner title={v?.banner?.ServiceTitle} para={v?.banner?.ServicePara} />
            <UxProcessTwo />
        </Layout>
    )
}

export default Services
