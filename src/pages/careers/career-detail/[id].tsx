
import GeneralHeading from '@/components/containers/general-heading';
import Layout from '@/components/layout/Layout';
import { CareerData } from '@/utiles/options/career-data';
import styles from "../../../components/containers/career-box/career-box.module.css"
import { useRouter } from 'next/router'
import FormFields from '@/components/containers/form-feilds';
import ApplyForm from '@/components/containers/apply-form';
const CareerDetails = () => {
  const router = useRouter()
  const UpdatedArray = CareerData.filter(obj => obj.id === router.query.id);
  const v = UpdatedArray[0]

  return (

    <>
      <Layout header={2} footer={2} themeBlack >
        <div className="bg-white ">
          <div className="container">
            <div className='custom-section-padding mt-5'>
              <GeneralHeading content={v?.title} className='text-black title-anim' />

              <div className="row ">
                <div className="col-md-7 mt-4 ">
                  <div className={styles?.careersubheading}>
                    <h4 className='text-black '>Overview</h4>
                    <p className='text-dark  mt-3'>{v?.Description?.overview}</p>
                  </div>
                  <div className={styles?.careersubheading}>
                    <h4 className='text-black '>Responsibilities</h4>
                    <ul className='mt-3'>
                      {
                        v?.Description?.Responsibilities.map((r, index) => (
                          <li className='text-dark mx-3' style={{ listStyle: "disc" , }} key={index}>
                            {r}
                          </li>))
                      }
                    </ul>
                  </div>


                  <div className={styles?.careersubheading}>
                    <h4 className='text-black '>Benefits</h4>
                    <ul className='mt-3'>
                      {
                        v?.Description?.Benefits.map((r, index) => (
                          <li className='text-dark mx-3' style={{ listStyle: "disc" }} key={index}>
                            {r}
                          </li>))
                      }
                    </ul>
                  </div>
                  <div className={styles?.careersubheading}>
                    <h4 className='text-black '>What you can expect from us after applying</h4>
                    <p className='text-dark  mt-3'>Once you Have applied, sit back and relax while we get to work on our side! You can expect to hear back from us within 3 working days. Our recruitment team will call you up on the provided contact number for initial screening. Good luck!</p>
                  </div>
                </div>
                <div className={`col-lg-5 mt-4 text-black ${styles?.applysection}`}>
                  <ApplyForm  data={v}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

    </>

  )
}

export default CareerDetails
