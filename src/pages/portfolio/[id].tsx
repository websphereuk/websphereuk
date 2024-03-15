
import Layout from '@/components/layout/Layout';
import { ProjectData } from '@/utiles/options/portfolio-data';
import { useRouter } from 'next/router'
const Portfolio = () => {
    const router = useRouter()
    const UpdatedArray = ProjectData.filter(obj => obj.id === router.query.id);
    const v = UpdatedArray[0]
    return (

        <>
            <Layout themeBlack={true} header={2} footer={1} video={true}>

               <div className='custom-section-padding'>
               <h2>{v?.projectHeading}</h2>
                <h2>{v?.id}</h2>
                <p>{v?.projectParagraph}</p>
               </div>
                {/* Add any other properties you want to display */}
            </Layout>

        </>

    )
}

export default Portfolio
