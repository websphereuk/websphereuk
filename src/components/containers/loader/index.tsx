import Image from "next/image";
import Logo from "/public/images/logo.png";
import style from "./loader.module.css"
const Loader = () => {
  return (
      <div className={` ${style.loader}`}>
        <Image src={Logo} alt="logo"  />
        <div className="loading-dots">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
      </div>
  );
};

export default Loader;
