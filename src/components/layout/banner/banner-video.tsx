const BannerVideo = () => {
const VideoSource = '/video/bannerVideo.mp4'
    return (
        <video autoPlay muted loop={true} className="w-100">
            <source src={VideoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    );
};

export default BannerVideo;
