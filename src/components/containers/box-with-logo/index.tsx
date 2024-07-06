
import Image, { StaticImageData } from "next/image";
import { Card } from "../card";
import style from "./box-with-logo.module.css";
import Logo from "../../../../public/images/schedule-call/logoW.png";
import { Button } from "../button";
import Link from "next/link";

interface BoxWithLogoProps {
    Id?: string,
    Heading?: string,
    Paragraph?: string,
    className?: string,
    Logo?: Boolean,
    ButtonLink?: string | undefined,
    ButtonText?: string,
    Img?: StaticImageData | string | any,
    HoverImg?: StaticImageData | string | any,
    HoverImgClass?: string,
    ImgClass?: string,
    structureClass?: string,
    LogoImg?: string
    key?: any
    bottomBar?: Boolean;
    bottomBarClass?: string;
    stack?: string;
    duration?: string;
    country?: string;
    numberboxClass?: string;
}
const BoxWithLogo = (props: BoxWithLogoProps) => {
    return (
        <>
            <div className={props?.structureClass} key={props?.key}>
                <Card className={`${style.box} ${props?.className}`}>
                    {
                        !!Boolean(props?.Logo) && (
                            <Image className={`bg-black ${style.logo} ${props?.LogoImg}`} src={Logo} alt='' />
                        )
                    }
                    <div className="">
                        {
                            !!Boolean(props?.Id) && (
                                <div className={`${style.numberBox} ${props?.numberboxClass}`}>
                                    {props?.Id}
                                </div>)
                        }
                       
                    </div>


                    {
                        !!Boolean(props?.Img) && (
                            <Image className={`${props?.ImgClass}`} src={props?.Img || ''} alt="" />
                        )
                    }
                    {
                        !!Boolean(props?.HoverImg) && (
                            <Image className={`${props?.HoverImgClass}`} src={props?.HoverImg || ''} alt="" />
                        )
                    }
                    <h3 className={`text-black ${style.Heading}`}>
                        {props?.Heading}
                    </h3>
                    <p className={`${style.Paragraph}`}>
                        {props?.Paragraph}
                    </p>

                    {
                        props?.ButtonLink && (
                            <Link className="w-100 d-inline-block" href={props?.ButtonLink}>
                                <Button className="w-100 d-inline-block">
                                    {props?.ButtonText}
                                </Button>
                            </Link>
                        )
                    }

                    {
                        !!Boolean(props?.bottomBar) && (
                            <>
                                < div className={` d-flex justify-content-between ${props?.bottomBarClass}`}>
                                    <div>
                                        <p className="text-black">{props?.stack} </p>
                                    </div>
                                    <div className="d-flex align-items-center">

                                        <i className="fa fa-clock mx-2" aria-hidden="true"> </i> <p className="text-black">{props?.duration} </p>
                                    </div>
                                </div >
                                <p className="text-black">{props?.country} </p>
                            </>

                        )
                    }
                </Card>
            </div>
        </>
    )
}

export default BoxWithLogo
