
import Image, { StaticImageData } from "next/image";
import { Card } from "../card";
import style from "./box-with-logo.module.css";
import Logo from "../../../../public/images/schedule-call/logoW.png";
import { Button } from "../button";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IndexInfo } from "typescript";
interface BoxWithLogoProps {
    Id?: string,
    Heading?: string,
    Paragraph?: string,
    className?: string,
    Logo?: Boolean,
    ButtonLink?: string | undefined,
    ButtonText?: string,
    Img?: StaticImageData | string | any ,
    HoverImg?: StaticImageData | string | any ,
    HoverImgClass?: string,
    ImgClass?: string,
    structureClass?: string,
    LogoImg?: string 
    key?: any
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
                    {
                        !!Boolean(props?.Id) && (
                            <div className={`${style.numberBox}`}>
                                {props?.Id}
                            </div>)
                    }

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
                    <div className={`${style.Heading}`}>
                        {props?.Heading}
                    </div>
                    <p className={`${style.Paragraph}`}>
                        {props?.Paragraph}
                    </p>
                    {
                        props?.ButtonLink && (
                            <Button className="w-100 d-inline-block">
                                <Link href={props?.ButtonLink}>
                                    {props?.ButtonText}
                                </Link>
                            </Button>
                        )
                    }
                </Card>
            </div>
        </>
    )
}

export default BoxWithLogo
