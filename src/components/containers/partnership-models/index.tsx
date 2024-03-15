import Image from "next/image";
import { DashedBorderIcon } from "../../../../public/icons/svg"
import { Button } from "../button";
import GeneralHeading from "../general-heading"
import style from "./partnerships-models.module.css";
import { Card } from "../card";
import { PartnershipsModelsData } from "./patnerships-models-data";
import BoxWithLogo from "../box-with-logo";
const PartnershipsModels = () => {

    return (

        <>
            <div className={`  w-100 text-black ${style.partnershipsModels}`}>
                <div className="section__content container text-center">
                    <div className="sub-title text-black">
                        Types of Partnership Models
                    </div>
                    <GeneralHeading content="Innovative Partnership Strategies" />
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        {PartnershipsModelsData.map((v , index) => {
                            return (
                               <div key={index}>
                                 <BoxWithLogo
                                    structureClass="col-md-4"
                                    Logo
                                    Id={v?.Id}
                                    Heading={v?.Heading}
                                    Paragraph={v?.Paragraph}
                                    ButtonText={v?.ButtonText}
                                    ButtonLink={v?.ButtonLink}
                                />
                               </div>
                            )
                        })}



                    </div>

                </div>
            </div>
        </>
    )
}

export default PartnershipsModels
