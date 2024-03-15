import Link from "next/link"

const SociaLinks = () => {
    return (
        <div className=" social justify-content-start justify-content-lg-end">
            <Link href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
            </Link>
            <Link href="https://www.pinterest.com/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>Linkedin</span>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
            </Link>

        </div>
    )
}

export default SociaLinks
