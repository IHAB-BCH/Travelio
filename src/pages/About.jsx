import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import SendIcon from "../assets/images/send.svg";
import Logo from "../components/Logo";
function About() {
  return (
    <section>
      <div className="grid grid-cols-5 items-start grid-rows-1 gap-10 mb-8 border-b border-gray-400 pb-20">
        <div>
          <div>
            <Logo ClassName={"mb-6"} />
            <p className="mb-6 text-granite-gray">
              We always make our customer happy by providing as many choices as
              possible
            </p>
            <div className="flex items-center gap-3">
              <img src={FacebookIcon} alt="" className="w-4" />
              <img src={InstagramIcon} alt="" className="w-4" />
              <img src={TwitterIcon} alt="" className="w-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-xl font-medium mb-3" href="#">
            About
          </button>
          <button className=" text-granite-gray" href="#">
            About Us
          </button>
          <button className=" text-granite-gray" href="#">
            Features
          </button>
          <button className=" text-granite-gray" href="#">
            New
          </button>
          <button className=" text-granite-gray" href="#">
            Menu
          </button>
        </div>
        <div className="flex flex-col gap-3  ">
          <button className="text-xl font-medium mb-3" href="#">
            Company
          </button>
          <button className=" text-granite-gray" href="#">
            Why Company
          </button>
          <button className=" text-granite-gray" href="#">
            Partner With Us
          </button>
          <button className=" text-granite-gray" href="#">
            FAQ
          </button>
          <button className=" text-granite-gray" href="#">
            Blog
          </button>
        </div>
        <div className="flex flex-col gap-3  ">
          <button className="text-xl font-medium mb-3" href="#">
            Support
          </button>
          <button className=" text-granite-gray" href="#">
            Account
          </button>
          <button className=" text-granite-gray" href="#">
            Support Center
          </button>
          <button className=" text-granite-gray" href="#">
            Feedback
          </button>
          <button className=" text-granite-gray" href="#">
            Contact Us
          </button>
          <button className=" text-granite-gray" href="#">
            Accessibility
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
          <p className="text-granite-gray ">Copyright Made by</p>
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
