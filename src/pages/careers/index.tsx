import CareerBox from "@/components/containers/career-box"
import SearchBox from "@/components/containers/search-box"
import Layout from "@/components/layout/Layout"
import CmnBanner from "@/components/layout/banner/CmnBanner"
import Head from "next/head"

const Careers = () => {
    return (
        <>
            <Head >
                <title>{`Careers at Web Sphere UK -  Choose the right path now`}</title>
                <meta
                    name="description"
                    content={` At Web Sphere UK , we provide our employees with unlimited growth potential. Check out our careers page to find the right job for you!`}
                    key="desc"
                />
            </Head>
            <Layout header={2} footer={2}>


                <CmnBanner title="Careers" navigation="Careers" content={`.`} />
                <CareerBox />
            </Layout>


        </>
    )
}

export default Careers
