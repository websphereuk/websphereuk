import React, { useState } from "react";
import Image from "next/image";
import faqs from "public/images/faqs.png";

const ServiceFaqs = (data: any) => {
    const [imgTab, setImgTab] = useState<number | null>(null); // Initialize imgTab state to null


    return (
        <section className="section agency last-sec faq ">
            <div className="container">
                <div className="row gaper my-4 align-items-center">
                    <div className="col-12  text-center">
                        <div className="section__header text-start mb-0 text-center">
                            <span className="sub-title">
                                {`${data?.data?.banner?.ServiceTitle} Faqs`}
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                            <h2 className="title title-anim text-center mb-5">
                                Answers to Frequently Posed Questions 
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="row gaper align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="faq__thumb fade-left">
                            <Image src={faqs} alt="Image" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="accordion" id="accordion">
                            {/* Map through faqs array to generate FAQ items */}
                            {data?.data?.serviceFaqs.map((faq: any, index: any) => (
                                <div
                                    key={index}
                                    className={"accordion-item content__space fade-top" + (imgTab === index ? " faq-one-active" : "")}
                                >
                                    <h5 className="accordion-header" id={"heading" + index}>
                                        <button
                                            className={(imgTab === index ? "  " : " collapsed") + " accordion-button"}
                                            onClick={() => setImgTab(imgTab === index ? -1 : index)}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={"#collapse" + index}
                                            aria-expanded={imgTab === index ? "true" : "false"}
                                            aria-controls={"collapse" + index}
                                        >
                                            {faq.question}
                                        </button>
                                    </h5>
                                    <div
                                        id={"collapse" + index}
                                        className={`accordion-collapse collapse${imgTab === index ? " show " : ""}`}
                                        aria-labelledby={"heading" + index}
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFaqs;
