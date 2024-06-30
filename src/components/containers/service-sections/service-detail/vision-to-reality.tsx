import style from "./services-detail.module.css"
import LadyCall from "../../../../../public/images/VisionToReailty.jpg"
import Logo from "/public/images/schedule-call/logoW.png"
import Image from "next/image"
import BorderBox from "../../border-box"
import GeneralHeading from "../../general-heading"
import { Button } from "../../button"
import { VisionToRealtyData } from "@/utiles/options/service-details/vision-to-reality-data"
import Link from "next/link"

const VisionToReality = () => {

    return (
        <div className="section__content bg-white  section" data-aos="zoom-out">
            <div className="container py-5">
                <div className="content text-center">
                    <div className="sub-title text-black d-inline-block">
                        Vision to Reality
                        <i className=" fa-solid fa-arrow-down"></i>
                    </div>
                    <GeneralHeading content="Process of Ideation to Implementation" textBlack className="text-start text-md-center mx-3" />
                </div>
                <div className="row my-5 align-items-center">
                    <div className={`col-lg-6  ${style.VisionToRealityLeftColImg} position-relative`}>
                        <div>
                            <Image src={Logo} className={`position-absolute d-lg-block d-none  ${style.VisionToRealityLogoImg}`} width={80} alt="" />
                        </div>
                        <Image className={`${style.VisionToRealityLeftImg} `} src={LadyCall} alt="" />
                    </div>
                    <div className={`col-lg-6 text-black ${style.VisionToRealityboxCol}`}>
                        {VisionToRealtyData.map((d, index) => {
                            return (
                                <BorderBox
                                    key={index}
                                    Heading={d?.Name}
                                    SubHeading={d?.step}
                                    Paragraph={d?.content}
                                    ThemeBlack={true}
                                    Arrow
                                />
                            )
                        })}
                        <Link href="/contact-us">
                            <Button className={`${style.VisionToRealityButton} font-bold `} >

                                Schedule A Call
                            </Button>
                        </Link>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default VisionToReality
