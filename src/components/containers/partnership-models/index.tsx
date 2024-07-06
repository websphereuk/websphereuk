import Image from "next/image";
import { DashedBorderIcon } from "../../../../public/icons/svg"
import { Button } from "../button";
import GeneralHeading from "../general-heading"
import style from "./partnerships-models.module.css";
import { Card } from "../card";
import BoxWithLogo from "../box-with-logo";
import { PartnershipsModelsData } from "@/utiles/options/patnerships-models-data";
const PartnershipsModels = () => {

    return (

        <>
            <div className={`  w-100 text-black ${style.partnershipsModels}`}>
                <div className="section__content container text-md-center">
                    <div className="sub-title text-black">
                        Types of Partnership Models
                    </div>
                    <GeneralHeading textBlack content="Innovative Partnership Strategies" />
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        {PartnershipsModelsData.map((v, index) => {
                            return (
                                <BoxWithLogo
                                    key={index}
                                    structureClass="col-lg-4 mt-4"
                                    Logo
                                    Id={v?.Id}
                                    Heading={v?.Heading}
                                    Paragraph={v?.Paragraph}
                                    ButtonText={v?.ButtonText}
                                    ButtonLink={v?.ButtonLink}
                                />
                            )
                        })}



                    </div>

                </div>
            </div>
        </>
    )
}

export default PartnershipsModels
