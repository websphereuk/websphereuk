import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";
import NavItem from "./menu/nav-item";
import ServiceDropdown from "./menu/service-dropdown";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
  themeBlack?: boolean;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav, themeBlack }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = `primary-navbar cmn-nav ${themeBlack && "bg-black"}`;

  const combinedClasses = `${scrolled ? " navbar-active" : " "
    } ${defaultClasses}`;

  let logoSrc = logo;



  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className={`header `}>
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <NavItem title="HOME" url="/" />
                      <NavItem title="ABOUT US" url="/about-us" />
                      <ServiceDropdown />
                      <NavItem title="PORTFOLIO" url="/portfolio" />
                      <NavItem title="CAREERS" url="/careers" />


                    </ul>
                  </div>
                  <div className="navbar__options resposive-talk-button">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="/contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
