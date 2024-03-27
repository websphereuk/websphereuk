import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import AnimatedText from "@/components/containers/animated-text";
import SociaLinks from "@/components/containers/social-links";
import { Card } from "@/components/containers/card";
import GeneralHeading from "@/components/containers/general-heading";
import styles from "./footer.module.css"
import { Button } from "@/components/containers/button";
import FooterAddress from "./footer-address";
const FooterTwo = () => {
  const currentYear = new Date().getFullYear();


  return (
    <div className="bg-footerblue w-100 ">
      <div className="d-flex justify-content-center " >
        <Card className={`${styles?.footerCard}   `}>
          <div className="d-lg-flex  justify-content-between align-items-center" >
            <div className="text-start">
              <h5 className={`mb-4 ${styles?.subheading}`} >Reach Out To Us</h5>
              <p style={{ maxWidth: "500px" }}>Technology is on our nerves. We don’t just build solutions, we create brands. Opting for our services is choosing excellence for your business.</p>
            </div>
            <div>
              <Link href={'/contact-us'}>
                <Button className="bg-white text-black px-5 mt-4">

                  Schedule A Call
                </Button>
              </Link>
            </div>
          </div>


        </Card>
      </div>
      <footer className="footer-two bg-footerblue w-100 mt-big-margin  section pb-0">
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
              </div>
            </div>
          </div>
        </div>


        <FooterAddress />


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
    </div>
  );
};

export default FooterTwo;
