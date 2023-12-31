import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-scroll";

function PageNav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setSticky(scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky pt-5 w-full top-0  z-50 transition-all ease-in-out duration-300 ${
        sticky ? "pt-2 pb-2  bg-nav-bg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex gap-12 cursor-pointer">
          {/* <NavItem href="#">Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Pricing</NavItem>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Contact</NavItem> */}
          <Link
            to="/"
            spy={true}
            smooth={true}
            className="hover:text-majorelle-blue"
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="services"
            className="hover:text-majorelle-blue"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="pricing"
            className="hover:text-majorelle-blue"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Pricing
          </Link>
          <Link
            to="experience"
            className="hover:text-majorelle-blue"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="hover:text-majorelle-blue"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-majorelle-blue">
            Login
          </a>
          <Button
            href={"#"}
            content={"Sing Up"}
            className={"hover:bg-majoreller-hover transition-all duration-100"}
          />
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
