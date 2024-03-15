import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import AnimatedText from "@/components/containers/animated-text";
import SociaLinks from "@/components/containers/social-links";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer-two section pb-0">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="logo">
                <Link href="/">
                  <Image className="my-3 " width={248} src={logo} priority alt="Image" />
                </Link>
              </div>
              <div className="paragraph">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online. From website design
                  and development.
                </p>
              </div>


            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-7 offset-xxl-1">
            <div className="footer-two__right ">

              <div className="section__content-cta mt-0 text-lg-end">
                <AnimatedText content="websphereuk@gmail.com" />
              </div>
              <div className="section__content-cta">
                <SociaLinks />
              </div>


              {/* <div className="footer__single-meta section__content-cta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  901 N Pitt Str., Suite 170 Alexandria, USA
                </Link>
                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  (406) 555-0120
                </Link>
                <Link href="mailto:info@websphere.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@websphere.com
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-xl-6">
              <div className="footer__copyright-text text-center text-xl-start">
                <p>
                  Copyright &copy;
                  <span id="copyYear">{currentYear}</span> web sphere by{" "}
                  <Link
                    href="https://themeforest.net/user/UltraDevs"
                    target="_blank"
                  >
                    {" "}
                    UltraDevs
                  </Link>{" "}
                  . All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <ul className="justify-content-center justify-content-xl-end">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about-us">About</Link>
                </li>
                <li>
                  <Link href="our-services">Services</Link>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
