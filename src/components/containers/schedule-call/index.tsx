import GeneralHeading from "../general-heading"
import style from "./schedule.module.css"
import LadyCall from "../../../../public/images/schedule-call/thinking.300bce33.png"
import Logo from "../../../../public/images/schedule-call/logoW.png"
import Image from "next/image"
import { Button } from "../button"
import BorderBox from "../border-box"
import { ScheduleCallData } from "../../../utiles/options/schedule-call-data"
const ScheduleCall = () => {

    return (
        <div className="section__content bg-white " data-aos="zoom-out">
            <div className="container py-5">
                <div className="content text-center">
                    <div className="sub-title text-black d-inline-block">
                        Project Mastery
                        <i className=" fa-solid fa-arrow-down"></i>
                    </div>
                    <GeneralHeading content="Mastering Project Excellence" textBlack />
                </div>
                <div className="row my-5 align-items-center">
                    <div className={`col-lg-6  ${style.LeftColImg} position-relative`}>
                        <div>
                            <Image src={Logo} className={`position-absolute d-lg-block d-none  ${style.LogoImg}`} width={80} alt="" />
                        </div>
                        <Image className={`${style.LeftImg} `} src={LadyCall} alt="" />
                    </div>
                    <div className={`col-lg-6 text-black ${style.boxCol}`}>
                        {ScheduleCallData.map((d, index) => {
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
                        <Button className={`${style.Button} font-bold `} >Schedule A Call</Button>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default ScheduleCall
