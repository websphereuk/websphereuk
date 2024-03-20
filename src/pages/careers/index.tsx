import CareerBox from "@/components/containers/career-box"
import SearchBox from "@/components/containers/search-box"
import Layout from "@/components/layout/Layout"
import CmnBanner from "@/components/layout/banner/CmnBanner"

const Careers = () => {
    return (
        <>

            <Layout header={2} footer={2}>


                <CmnBanner title="Careers" navigation="Careers" content={`.`} />
                <CareerBox />
            </Layout>


        </>
    )
}

export default Careers
