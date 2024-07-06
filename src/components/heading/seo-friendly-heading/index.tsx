import React from 'react';
import style from "./seo-friendly-heading.module.css";

interface SeoFriendlyHeadingProps {
    textBlack?: boolean;
    textWhite?: boolean;
    content: string;
    className?: string;
}

const SeoFriendlyHeading: React.FC<SeoFriendlyHeadingProps> = ({ textBlack, textWhite, content, className }) => {
    return (
        <h1
            className={`${style.typography} ${textBlack ? "text-black" : ""} ${textWhite ? "text-white" : ""} ${className || ""}`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default SeoFriendlyHeading;
