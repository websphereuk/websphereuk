import { socialLinks } from "@/utiles/options/sociallinks"
import Link from "next/link"

const SociaLinks = () => {
    return (
        <div className=" social justify-content-start justify-content-lg-end">
            <Link href={`${socialLinks?.Facebook}`} target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
            </Link>
            <Link href={`${socialLinks?.Youtube}`} target="_blank">
                <i className="fa-brands fa-youtube"></i>
                <span>Youtube</span>
            </Link>
            <Link href={`${socialLinks?.Linkedin}`} target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>Linkedin</span>
            </Link>
            <Link href={`${socialLinks?.Instagram}`} target="_blank">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
            </Link>

        </div>
    )
}

export default SociaLinks
