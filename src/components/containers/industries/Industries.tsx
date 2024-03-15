import Image from "next/image"
import HealthCare from "../../../../public/images/industries/healthcare.png";
import RealEstate from "../../../../public/images/industries/rental.png";
import Restaurant from "../../../../public/images/industries/restaurant-building.png";
import Tourism from "../../../../public/images/industries/tourism.png";
import Edu from "../../../../public/images/industries/online-learning.png";
import Ecommrece from "../../../../public/images/industries/online-shop.png";
import style from "./industries.module.css";
import { Card } from "../card";
const Industries = () => {
  const para = " As a top player in technology, we, under the WebSphere banner, specialize in creating cutting-edge web applications and software solutions. Focused on surpassing industry standards, our commitment to excellence ensures innovative and reliable products. Our track record speaks for itself, with a flawless 100% success rate. At WebSphere, we stay ahead of the curve, using our expertise to deliver services that truly impress our clients."
  const industriesCard = [
    { title: 'Medical & Health Care', icon: HealthCare },
    { title: 'Food & Restaurant Industry', icon: Restaurant },
    { title: 'Hospitality & Tourism', icon: Tourism },
    { title: 'Property Market Sector', icon: RealEstate },
    { title: 'Academic & Online Educations', icon: Edu },
    { title: 'Online Retail Sector', icon: Ecommrece }

  ]
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="section__content text-center">
          <div className="sub-title ">
          Elevating Tech Solutions
          </div>
          <div className="row align-items-center py-5 my-5">
            <div className="col-md-6 ">
              <div className={` text-start ${style?.sectionInfo}`}>
                <span className={` ${style?.Heading} text-left`}>Leading with Innovation and Excellence</span>
                <p className={`py-5 ${style?.para}`}>{para}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {
                  industriesCard.map((v) => (
                    <>
                      <div className="col-md-4">
                        <Card className={` d-flex flex-column align-items-center text-center bg-white my-4 ${style.shahdowHover}`}>
                          <>
                            <Image width={50} src={v?.icon} alt="" />
                            <p className="mt-2 font-size-18 font-weight-600 text-black ">{v?.title}</p>
                          </>
                        </Card>
                      </div>
                    </>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries
