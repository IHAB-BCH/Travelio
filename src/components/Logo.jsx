import MyLogo from "../assets/images/logo.svg";
function Logo({ ClassName }) {
  return <img src={MyLogo} alt="logo" className={ClassName} />;
}

export default Logo;
