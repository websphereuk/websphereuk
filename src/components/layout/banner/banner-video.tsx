import React, { useState } from 'react';

import useCheckMobileScreen from "@/components/hook/use-check-mobile-screen";
import Image from 'next/image';
import DeskfallbackImage from "../../../../public/images/webspheredesk.png"
import MobilefallbackImage from "../../../../public/images/webspherembl.png"
const BannerVideo = () => {
    const isItMobile = useCheckMobileScreen();
    const [videoLoaded, setVideoLoaded] = useState(false);
    const VideoSource = '/video/bannerVideo.mp4'
    const MobileVideoSource = '/video/MobileVideo.mp4'
     // Path to your fallback image

    return (
        <>
            {
                !isItMobile && (
                    <video autoPlay muted loop={true}
                        onCanPlay={() => setVideoLoaded(true)}
                        style={{ display: !videoLoaded ? 'none' : 'block' }}
                        className="w-100">

                        <source src={
                            VideoSource

                        } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
            {
                !!isItMobile && (
                    <video autoPlay muted loop={true}
                        onCanPlay={() => setVideoLoaded(true)}
                        style={{ display: !videoLoaded ? 'none' : 'block' }}
                        className="w-100 ">
                        <source src={
                            MobileVideoSource
                        } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
            {!videoLoaded && !isItMobile && (
                //Desktop Fall Back Image 
                <Image
                    src={DeskfallbackImage}
                    alt="Fallback"
                    className="w-100"
                />
            )}
            
            {!videoLoaded && !!isItMobile && (
                //Mobile FallBack IMage 
                <Image
                    src={MobilefallbackImage}
                    alt="Fallback"
                    className="w-100"
                />
            )}

        </>

    );
};

export default BannerVideo;
//import React, { useState } from 'react';
// import useCheckMobileScreen from '@/components/hook/use-check-mobile-screen';

// const BannerVideo = () => {
//     const [videoLoaded, setVideoLoaded] = useState(false);
//     const [videoError, setVideoError] = useState(false);
//     const isItMobile = useCheckMobileScreen();
//     const VideoSource = '/video/bannerVideo.mp4';
//     const MobileVideoSource = '/video/MobileVideo.mp4';
//     const fallbackImage = '/images/fallback-image.jpg'; // Path to your fallback image

//     return (
//         <>
//             {!videoLoaded && !videoError && (
//                 <img
//                     src={fallbackImage}
//                     alt="Fallback"
//                     className="w-100"
//                 />
//             )}
//             <video
//                 autoPlay
//                 muted
//                 loop={true}
//                 className={`w-100 ${!videoLoaded ? 'hidden' : ''}`}
//                 onCanPlay={() => setVideoLoaded(true)}
//                 onError={() => setVideoError(true)}
//                 style={{ display: !videoLoaded && !videoError ? 'none' : 'block' }}
//             >
//                 <source src={isItMobile ? MobileVideoSource : VideoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </>
//     );
// };

// export default BannerVideo;
