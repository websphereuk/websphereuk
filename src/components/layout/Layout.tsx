import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useRouter } from "next/router";
import Header from "./header/Header";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThree from "./header/HeaderThree";
import HeaderFour from "./header/HeaderFour";
import HeaderFive from "./header/HeaderFive";
import Footer from "./footer/Footer";
import FooterTwo from "./footer/FooterTwo";
import FooterThree from "./footer/FooterThree";
import FooterFour from "./footer/FooterFour";
import FooterFive from "./footer/FooterFive";
import VideoModal from "./VideoModal";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";
import { title } from "process";
import { Metadata } from "next";
import Script from "next/script";

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  video?: React.ReactNode;
  themeBlack?: Boolean;
};
export const metadata: Metadata = {
  title: {
    default: "WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services",
    template: "%s - Web Sphere Uk "
  },
  description: "WebSphere LLC specializes in innovative web and mobile app development, e-commerce solutions, blockchain technology, AI &amp; ML, and more. Catering to diverse industries, our expert team delivers cutting-edge technology solutions to transform your business vision into reality. Discover how we can upscale your digital presence",
}


const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
  themeBlack,
}: LayoutProps) => {

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".topy-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  const classMappings: Record<string, string> = {
    "/index-light": "home-light",
    "/index-two-light": "home-two-light",
    "/index-three-light": "home-three-light",
    "/index-four-light": "home-four-light",
    "/index-five-light": "home-five-light",
  };

  const classNameForCurrentPath = classMappings[router.pathname] || "";

  let additionalClasses = " ";

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${openNav ? " body-active" : ""
    } ${classNameForCurrentPath}`;

  // fade animation
  useEffect(() => {
    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType(".title-anim");
    const titleAnims = document.querySelectorAll(".title-anim");

    titleAnims.forEach((titleAnim) => {
      const charElements = titleAnim.querySelectorAll(".char");

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  return (

    <Fragment>
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

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/public/favicon.png"
          type="image/x-icon"
        />
        <title>Home || WebSphere | Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
        <meta name="keywords" content="WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies" />
        <meta
          name="description"
          content="WebSphere skyrockets brands to international success through powerful website design, software & custom development, and proven SEO & content marketing strategies"
        />

      </Head>
      <div className={combinedClassName}>
        {header === 1 && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 2 && (
          <HeaderTwo
            themeBlack={themeBlack ? true : false}
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 3 && (
          <HeaderThree
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 4 && (
          <HeaderFour
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 5 && (
          <HeaderFive
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        <main>{children}</main>
        {footer === 1 && <Footer />}
        {footer === 2 && <FooterTwo />}
        {footer === 3 && <FooterThree />}
        {footer === 4 && <FooterFour />}
        {footer === 5 && <FooterFive />}
        {video ? <VideoModal /> : null}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>

  );
};

export default Layout;
