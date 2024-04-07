import Link from "next/link"
import style from "./menu.module.css"
import { ServiceData } from "@/utiles/options/ServiceData"
const ServiceDropdown = () => {
    return (
        <li className="navbar__item navbar__item--has-children nav-fade">
            <button
                aria-label="dropdown menu"
                className="navbar__dropdown-label"
            >
                <Link href={'/our-services'}>
                Services
                </Link>
            </button>
            <ul className={`navbar__sub-menu  ${style.ServiceDropdown} `}>
                <div className="row">
                    {
                        ServiceData.map((v, index) => {
                            return (
                                <>
                                    <div className="col-lg-3" key={index}>
                                        <li>
                                            <Link href={`/services/${v?.Link}/`}>
                                              

                                                {v?.banner.ServiceTitle}</Link>
                                        </li>
                                    </div>
                                </>
                            )
                        })
                    }



                </div>

            </ul>
        </li>
    )
}

export default ServiceDropdown
