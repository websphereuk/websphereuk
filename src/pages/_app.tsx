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
import Script from "next/script";

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
     <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WD2HSZVD');`,
        }}
      />

      {/* Google Tag Manager (noscript) - Body */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WD2HSZVD"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Head>
        <title>
          WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
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
