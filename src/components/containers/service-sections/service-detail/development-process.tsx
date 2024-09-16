import { DevelopmentPhaseData } from "@/utiles/options/service-details/development-phase-data";
import React, { useState } from "react";
import SlideText from "../../slide-text";


interface DevelopmentProcessProps {
    className? : string;
}
const DevelopmentProcess = (props : DevelopmentProcessProps) => {


    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={`section   ux-process  ${props?.className}`}>
            <div className="row justify-content-center">

                <div className="col-12 col-lg-12">
                    <div className="section__header text-center">
                        <span className="sub-title">
                            Navigating the Development Journey
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
            <SlideText content=" Work Process" />
                        
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="service-f-wrapper mx-3">
                            {DevelopmentPhaseData.map((item, index) => (
                                <div
                                    onClick={() => handleToggle(index)}
                                    key={index}
                                    className={`service-f-single fade-top ${activeIndex === index ? " service-f-single-active" : ""
                                        }`}
                                >
                                    <div className="single-item">
                                        <div className="intro-btn">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                    <div className="single-item p-single p-sm body-cn">
                                        <p>{item.content}</p>
                                    </div>
                                    <button
                                        className="toggle-service-f"
                                        onClick={() => handleToggle(index)}
                                    ></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
