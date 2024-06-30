import React from 'react';
import style from "./general-heading.module.css";

interface GeneralHeadingProps {
    textBlack?: boolean;
    textWhite?: boolean;
    content: string;
    className?: string;
}

const GeneralHeading: React.FC<GeneralHeadingProps> = ({ textBlack, textWhite, content, className }) => {
    return (
        <div
            className={`${style.typography} ${textBlack ? "text-black" : ""} ${textWhite ? "text-white" : ""} ${className || ""}`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default GeneralHeading;
