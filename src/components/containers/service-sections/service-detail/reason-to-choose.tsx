import { ReasonToChooseData } from "@/utiles/options/service-details/reason-to-choose-data"
import BoxWithLogo from "../../box-with-logo"
import GeneralHeading from "../../general-heading"
import styles from "./services-detail.module.css"
import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen"
import { useEffect, useState } from "react"
import { Button } from "../../button"

const ReasonToChoose = (data: any) => {
    const isItMobile = useCheckMobileScreen();
    const [itemsToShow, setItemsToShow] = useState(isItMobile ? 3 : 6);

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + (1));
    };
    useEffect(() => {
        setItemsToShow(isItMobile ? 3 : 6);
    }, [isItMobile]);
    return (
        <>
            <div className="bg-white section ">
                <div className="container">
                    <div className="section__header text-center">
                        <div className="sub-title text-black">
                            Reasons to Choose Our Services
                            <i className="fa fa-arrow-down"></i>
                        </div>
                        <GeneralHeading content={` Benefits Of Choosing Our ${data?.data?.banner?.ServiceTitle} Services`} className="text-black text-start text-md-center mx-3" />
                    </div>
                    <div className="row">
                        {
                            ReasonToChooseData.slice(0, itemsToShow).map((v) => {
                                return (
                                    <>
                                        <BoxWithLogo
                                            structureClass={`col-lg-4 mt-4 text-black `}
                                            className={styles?.ReasonhBox}
                                            LogoImg={styles?.ReasonhLogoImage}
                                            numberboxClass={`${styles?.numberBox}`}
                                            Logo
                                            Id={v?.id}
                                            Heading={v?.title}
                                            Paragraph={v?.description}
                                        />
                                    </>
                                )
                            })
                        }

                        {itemsToShow < ReasonToChooseData.length && (
                            <div className="text-center mt-3">
                                <Button className=" px-5 mt-5 w-100 " onClick={handleLoadMore}>
                                    Load More
                                </Button>
                            </div>)}


                    </div>
                </div>
            </div>

        </>
    )
}

export default ReasonToChoose
