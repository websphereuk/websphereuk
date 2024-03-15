import GeneralHeading from "../general-heading"


const SplineDesign = () => {
    const VideoSource = '/video/night-snow.mp4'

    return (
        <div className="position-relative h-100">
            <video autoPlay muted loop={true} className="w-100">
                <source src={VideoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="position-absolute  w-100 " style={{ top: "5%" }}>
                <GeneralHeading content="Web Sphere Digital Solution" className="pt-5 text-center" />
                <iframe src='https://my.spline.design/react3dwebsite-aea54912fc71fa526e48473fa9a647d3/' frameBorder='0' width='100%' height='800px'></iframe>
            </div>
        </div>
    )
}

export default SplineDesign
