import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "public/images/footer/footer-three-thumb.png";
import logo from "public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
         
          <div className="">
            <div className="group-wrapper row">
              <div className="footer-three__group col-12 col-lg-4">
                <div className="intro">
                  <h5>Germany</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@websphere.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@websphere.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group  col-12 col-lg-4">
                <div className="intro">
                  <h5>India</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@websphere.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@websphere.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group  col-12 col-lg-4">
                <div className="intro">
                  <h5>India</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@websphere.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@websphere.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default FooterThree;
