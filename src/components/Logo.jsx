import { Link } from "react-scroll";
import MyLogo from "../assets/images/logo.svg";
function Logo({ ClassName }) {
  return (
    <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
      <img src={MyLogo} alt="logo" className={` cursor-pointer ${ClassName}`} />
    </Link>
  );
}

export default Logo;
