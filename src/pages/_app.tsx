import React, { Suspense, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

// custom icons
import "public/icons/glyphter/css/websphere.css";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";
// main scss
import "@/styles/main.scss";
import Loader from "@/components/containers/loader";

import gsap from "gsap";

import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true); // Initialize as true

  useEffect(() => {
    // Wait for the loader to run for a certain time, then hide it and show content
    const timer = setTimeout(() => {
      gsap.to(".loader", {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        onComplete: () => {
          setLoading(false); // Set loading to false only after the loader animation completes
          gsap.fromTo(
            ".content",
            { opacity: 0 },
            { duration: 0.5, opacity: 1 }
          );
        },
      });
    }, 1500); // Set the loader timeout to 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      {!loading && (
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <ToastContainer />
            <DefaultSeo {...defaultSEOConfig} />
            <Component {...pageProps} />
          </Suspense>
        </div>
      )}

      {loading && (
        <div className="loader-bg">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
    </>
  );
}
