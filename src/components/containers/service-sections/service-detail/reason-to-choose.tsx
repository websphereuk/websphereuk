import BoxWithLogo from "../../box-with-logo"
import GeneralHeading from "../../general-heading"
import styles from "./services-detail.module.css"
const ReasonToChooseData = [
    {
        id: "01 ",
        title: "Decades of Expertise",
        description: " ",
    }
]
const ReasonToChoose = () => {
    return (
        <>
            <div className="bg-white section ">
                <div className="container">
                    <div className="section__header text-center">
                        <div className="sub-title text-black">
                            Reasons to Choose Our Services
                            <i className="fa fa-arrow-down"></i>
                        </div>
                        <GeneralHeading content=" Benefits Of Choosing Our Services" className="text-black" />
                    </div>
                    <div className="row">


                        <BoxWithLogo
                            structureClass={`col-lg-4 mt-4 text-black `}
                            className={styles?.ReasonhBox}
                            LogoImg={styles?.ReasonhLogoImage}
                            numberboxClass={`${styles?.numberBox}`}
                            Logo
                            Id={`03`}
                            Heading={`Decades of Expertise`}
                            Paragraph={`Our extensive experience of over 6 years, coupled with the successful delivery of 1000+ projects in this service domain, reflects our commitment to excellence and proficiency in tackling diverse IT challenges. With each project, we have garnered invaluable insights and honed our skills to ensure that our clients receive top-notch solutions tailored to their specific needs.`}
                        />

                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReasonToChoose
