import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";

const BannerVideo = () => {
    const isItMobile = useCheckMobileScreen();
    const VideoSource = '/video/bannerVideo.mp4'
    const MobileVideoSource = '/video/MobileVideo.mp4'
    return (
        <>
            {
                !isItMobile && (
                    <video autoPlay muted loop={true} className="w-100">
                        <source src={
                            VideoSource

                        } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
            {
                !!isItMobile && (
                    <video autoPlay muted loop={true} className="w-100 ">
                        <source src={
                            MobileVideoSource
                        } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }

        </>

    );
};

export default BannerVideo;
