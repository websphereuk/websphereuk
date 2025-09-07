import Image from "next/image"
import Arrow from "../../../../public/images/schedule-call/arrow.png"
import style from "./border-box.module.css"
interface BorderBoxProps {
    SubHeading?: string,
    Heading?: string,
    Paragraph?: string,
    Arrow?: Boolean,
    ThemeBlack  : Boolean , 
    key : any 
}
const BorderBox = (props: BorderBoxProps) => {
    return (
        <>
            <div key={props?.key} className={`${style.box} d-md-flex ${props?.ThemeBlack && `${style.BlackHoverBox}`} `}>
                {
                    !!Boolean(props?.Arrow) && (
                        <div>
                            <Image className={`position-absolute ${style.arrowIcon}`} width={120} src={Arrow} alt="Next Step Arrow" />
                        </div>
                    )
                }

                <div>
                    <div className={`text-black ${style.boxsubheading}`}>{props?.SubHeading}</div>
                    <div className={`text-black ${style.boxheading}`}>{props?.Heading}</div>
                    <p className={`text-black ${style.boxpara}`}>{props?.Paragraph}</p>
                </div>
            </div>
        </>
    )
}

export default BorderBox
