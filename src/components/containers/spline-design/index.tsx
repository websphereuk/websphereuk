import GeneralHeading from "../general-heading"

import styles from "./spline.module.css"
const SplineDesign = () => {
    const VideoSource = '/video/night-snow.mp4'

    return (
        <div className={`position-relative d-none d-lg-block h-100 ${styles.spline}`}>
           
            <video autoPlay muted loop={true} className="w-100">
                <source src={VideoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="position-absolute  w-100 " style={{ top: "5%" }}>
                <GeneralHeading content="Websphere UK Digital Solution" className="pt-5 text-center" />
                <iframe src='https://my.spline.design/react3dwebsite-aea54912fc71fa526e48473fa9a647d3/' frameBorder='0' width='100%' height='700px'></iframe>
            </div>
        </div>
     
    )
}

export default SplineDesign;
