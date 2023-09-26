// import { useEffect, useRef, useState } from "react";
// import Logo from "./Logo";
// function PageNav() {
//   const ref = useRef();
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       const scrollY = window.scrollY;
//       setSticky(scrollY > 100);
//     }
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <nav
//         ref={ref}
//         className={`flex items-center justify-between pt-5 transition ease-in-out duration-200 ${
//           sticky ? "fixed w-1272 bg-nav-bg z-50 pb-5" : ""
//         }`}
//       >
//         <Logo />
//         <div className="flex gap-12 ">
//           <button className="hover:text-majorelle-blue transition-all ease-linear duration-100">
//             <a href="#">Home</a>
//           </button>
//           <button className="hover:text-majorelle-blue transition-all ease-linear duration-100">
//             <a href="#">About</a>
//           </button>
//           <button className="hover:text-majorelle-blue transition-all ease-linear duration-100">
//             <a href="#">Pricing</a>
//           </button>
//           <button className="hover:text-majorelle-blue transition-all ease-linear duration-100">
//             <a href="#">Services</a>
//           </button>
//           <button className="hover:text-majorelle-blue transition-all ease-linear duration-100">
//             <a href="#">Contact</a>
//           </button>
//         </div>
//         <div>
//           <button>
//             <a href="#" className="mr-8 block">
//               Login
//             </a>
//           </button>
//           <button className="py-3 px-8 bg-majorelle-blue  rounded-full text-white ">
//             <a href="#">Sign Up</a>
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default PageNav;
// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import Button from "./Button";

// function PageNav() {
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       const scrollY = window.scrollY;
//       setSticky(scrollY > 100);
//     }
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={` flex items-center justify-between pt-5 pb-2  z-50 transition-all ease-in-out duration-300 ${
//         sticky ? " bg-nav-bg  fixed" : ""
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <Logo />
//         <div className="flex gap-12 ">
//           <NavItem href="#">Home</NavItem>
//           <NavItem href="#">About</NavItem>
//           <NavItem href="#">Pricing</NavItem>
//           <NavItem href="#">Services</NavItem>
//           <NavItem href="#">Contact</NavItem>
//         </div>
//         <div className="flex items-center space-x-4">
//           <NavItem href="#">Login</NavItem>
//           <Button content={"Sing Up"} href={"#"} />
//         </div>
//       </div>
//     </nav>
//   );
// }

// function NavItem({ href, children, className }) {
//   return (
//     <a
//       href={href}
//       className={`hover:text-majorelle-blue transition-all ease-linear duration-100 ${className}`}
//     >
//       {children}
//     </a>
//   );
// }

// export default PageNav;
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

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
        <div className="flex gap-12 ">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Pricing</NavItem>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Contact</NavItem>
        </div>
        <div className="flex items-center space-x-4">
          <NavItem href="#">Login</NavItem>
          <Button href={"#"} content={"Sing Up"} />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children, className }) {
  return (
    <a
      href={href}
      className={`hover:text-majorelle-blue transition-all ease-linear duration-100 ${className}`}
    >
      {children}
    </a>
  );
}

export default PageNav;
