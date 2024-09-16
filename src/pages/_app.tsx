import React, { Suspense, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

// custom icons
import "public/icons/glyphter/css/websphere.css";

// main scss
import "@/styles/main.scss";
import Loader from "@/components/containers/loader";
import gsap from "gsap";

import { ToastContainer } from 'react-toastify';
import Head from "next/head";

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
      <Head>
        <title>
          WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies" key="desc" />
        <link rel="canonical" href="https://websphereuk.com/" />
        <meta name="p:domain_verify" content="5f4d8ea30723fd63299c2ec859ee75cc" />
      </Head>

      {!loading && (
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <ToastContainer />
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
