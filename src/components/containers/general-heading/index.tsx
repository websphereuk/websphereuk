
import style from "./general-heading.module.css";
interface GeneralHeadingProps {
    textBlack?: Boolean,
    textWhite?: Boolean,
    content: string , 
    className?:string,
}
const GeneralHeading = (props: GeneralHeadingProps) => {
    return (
        <div className={`${style.typography} ${props?.textBlack && "text-black"} ${props?.textWhite && "text-white"} ${props?.className}`}>
            {props?.content}
        </div>
    )
}

export default GeneralHeading
