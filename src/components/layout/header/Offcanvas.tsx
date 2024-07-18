import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import { ServiceData } from "@/utiles/options/ServiceData";
import { socialLinks } from "@/utiles/options/sociallinks";
import SociaLinks from "@/components/containers/social-links";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, [setOpenNav]); // Added setOpenNav to the dependency array

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo mt-5">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu "
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item nav-fade">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="/about">About</Link>
                </li>

                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "/services"
                    )}`}
                    onClick={() => handleSubmenu("/services")}
                  >
                    Services
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("/services")}`}>
                    <li>
                      <Link href="/our-services">All Services</Link>
                    </li>
                    {
                      ServiceData.map((v) => {
                        return (
                          <>
                            <li>
                              <Link href={`/services/${v?.Link}`}>{v?.banner?.ServiceTitle}</Link>
                            </li>
                          </>
                        )
                      })
                    }

                  </ul>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="/careers">Careers</Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact-us" className="btn btn--secondary">
                Lets Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href={`${socialLinks?.Facebook}`}
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href={`${socialLinks?.Youtube}`}
              target="_blank"
              aria-label="share us on youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link
              href={`${socialLinks?.Linkedin}`}
              target="_blank"
              aria-label="share us on linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href={`${socialLinks?.Instagram}`}
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
