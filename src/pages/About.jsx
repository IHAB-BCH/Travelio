import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import SendIcon from "../assets/images/send.svg";
import Logo from "../components/Logo";
function About() {
  return (
    <section id="about">
      <div className="grid grid-cols-5 items-start grid-rows-1 gap-10 mb-8 border-b border-gray-400 pb-20">
        <div>
          <div>
            <Logo ClassName={"mb-6"} />
            <p className="mb-6 text-granite-gray">
              We always make our customer happy by providing as many choices as
              possible
            </p>
            <div className="flex items-center gap-3">
              <img src={FacebookIcon} alt="" className="w-4 cursor-pointer" />
              <img src={InstagramIcon} alt="" className="w-4 cursor-pointer" />
              <img src={TwitterIcon} alt="" className="w-4 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-xl font-medium mb-3" href="#">
            About
          </button>
          <button className=" text-granite-gray hover:text-majorelle-blue transition-all duration-150">
            <a href="#">About Us</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Features</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">New</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Menu</a>
          </button>
        </div>
        <div className="flex flex-col gap-3  ">
          <button className="text-xl font-medium mb-3" href="#">
            Company
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Why Company</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Partner With Us</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">FAQ</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Blog</a>
          </button>
        </div>
        <div className="flex flex-col gap-3  ">
          <button className="text-xl font-medium mb-3" href="#">
            Support
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Account </a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Support Center</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Feedback</a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Contact Us </a>
          </button>
          <button className="hover:text-majorelle-blue transition-all duration-150 text-granite-gray">
            <a href="#">Accessibility</a>
          </button>
        </div>
        <div>
          <h1 className="mb-5 text-xl font-medium">Get In Touch</h1>
          <p className="mb-4 text-granite-gray">
            Question or feedback? We'd love to hear from you.
          </p>
          <div className="flex items-center justify-center border border-gray-400 rounded-full">
            <input
              type="text"
              className="rounded-full text-xl bg-nav-bg  placeholder:text-sm pl-2 h-12 w-40 outline-none "
              placeholder="Email Address "
            />
            <button className="bg-majorelle-blue w-10 rounded-full p-2">
              <img src={SendIcon} alt="" className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-1">
          <p className="text-granite-gray ">&copy; 2023 Made by</p>
          <p className="text-majorelle-blue font-medium">IHAB BOUCHIA</p>
        </div>
        <div className="flex items-center gap-10">
          <a href="#" className="block text-granite-gray">
            Terms and Conditions
          </a>
          <a href="#" className="text-granite-gray">
            Privacy and Policy
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
