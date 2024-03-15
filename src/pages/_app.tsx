import React, { Suspense, useEffect, useState } from "react";
import type { AppProps } from "next/app";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

// custom icons
// import "public/icons/glyphter/css/";
import "public/icons/glyphter/css/websphere.css";

// main scss
import "@/styles/main.scss";
import Loader from "@/components/containers/loader";
import gsap from "gsap";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".loader", {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        onComplete: () => {
          setLoading(true);
          gsap.fromTo(
            ".content",
            { opacity: 0 },
            { duration: 0.5, opacity: 1 }
          );
        },
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (


    <>
      <div className="loader-bg">
        <div className="loader">

          {!loading && <Loader />}
        </div>
      </div>
      <div className="content">

        {
          loading && (
            <>
              <Suspense fallback={<div>Loading...</div>}>

                <Component {...pageProps} />
              </Suspense>
            </>
          )
        }
      </div>

    </>
  );
}
