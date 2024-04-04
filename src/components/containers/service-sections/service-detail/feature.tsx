import Image from "next/image"
import { Button } from "../../button"
import { Card } from "../../card"
import GeneralHeading from "../../general-heading"
import style from "./services-detail.module.css"
import Girl from "../../../../../public/images/updated-s.png"

const Feature = (data: any) => {
    console.log('====================================');

    console.log(data?.data?.customServices, 'data?.data?.customServices');
    console.log('====================================');
    return (
        <>
            <div className="section agency">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="section__header text-center">
                            <div className="sub-title">

                            Tailored Solutions for Your Needs
                            <i className="fa fa-arrow-down"></i>
                            </div>
                            <GeneralHeading className="text-start mx-3 text-md-center" content={`Unleashing the Power of ${data?.data?.banner?.ServiceTitle} Services`} />
                        </div>
                        <div className={`col-lg-6 ${style?.ImageSection} `}>
                            <Image src={Girl} alt="" />
                        </div>
                        <div className={`col-lg-6 px-3 ${style?.featureSection}`}>
                            <div className={`row ${style?.Row}`}>
                                {
                                    data?.data?.customServices.map((v: any) => {
                                        return (
                                            <>
                                                <div className={`col-md-6 ${style.ColSection}`}>
                                                    <Card className={`bg-white fade-wrapper text-black ${style?.cardSection}`}>
                                                        <h5 className="text-black">{v?.title}</h5>
                                                        <p className="mt-2 text-black">{v?.description}</p>

                                                    </Card>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Feature
