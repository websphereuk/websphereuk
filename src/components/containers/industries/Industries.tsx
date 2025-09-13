import Image from "next/image"

import style from "./industries.module.css";
import { Card } from "../card";
import GeneralHeading from "../general-heading";
import { industriesCard } from "@/utiles/options/industries-data";
const Industries = () => {
  const para = " As a top player in technology, we, under the Websphere UK banner, specialize in creating cutting-edge web applications and software solutions. Focused on surpassing industry standards, our commitment to excellence ensures innovative and reliable products. Our track record speaks for itself, with a flawless 100% success rate. At Websphere UK, we stay ahead of the curve, using our expertise to deliver services that truly impress our clients."
  const MainHeading = "Leading with Innovation and Excellence"

  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="section__content text-center">
          <div className="sub-title ">
            Elevating Tech Solutions
          </div>
          <div className="row align-items-center py-5 my-md-5">
            <div className="col-lg-6 ">
              <div className={` text-start ${style?.sectionInfo}`}>
              
                <GeneralHeading content={MainHeading} />
                <p className={`py-5 ${style?.para}`}>{para}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {
                  industriesCard.map((v) => (
                    <>
                      <div className={`col-lg-4 col-sm-6 `}>
                        <Card className={` d-flex flex-column align-items-center text-center bg-white my-4 ${style?.box} ${style.shahdowHover}`}>
                          <>
                            <Image width={50} src={v?.icon} alt={v?.altTag} />
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
