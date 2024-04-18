import Link from "next/link"
interface NavItemProps{
title ? : string , 
url ? : string
}
const NavItem = (props : NavItemProps) => {
    return (
        <li className="navbar__item nav-fade mx-3">
             {props.url && <Link href={props.url}>{props.title}</Link>}
        </li>
    )
}

export default NavItem
