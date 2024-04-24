
import BannerSlides from '@/components/containers/project-detail/banner-slides';
import ProjectDetailsMain from '@/components/containers/project/ProjectDetailsMain';
import UxProcess from '@/components/containers/service-details/UxProcess';
import DevelopmentProcess from '@/components/containers/service-sections/service-detail/development-process';
import Layout from '@/components/layout/Layout';
import { ProjectData } from '../../utiles/options/portfolio-data';
import { useRouter } from 'next/router'
const Portfolio = () => {
    const router = useRouter()
    const UpdatedArray = ProjectData.filter(obj => obj.id === router.query.id);
    const v = UpdatedArray[0]
    return (

        <>
            <Layout themeBlack={true} header={2} footer={2} video={true}>
                <BannerSlides data={v} />
                <ProjectDetailsMain data={v} />
                <DevelopmentProcess  className='agency last-sec'/>

            </Layout>

        </>

    )
}

export default Portfolio
