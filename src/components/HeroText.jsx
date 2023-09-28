import PlaneIcon from "../assets/images/title-icon.svg";
import HeroBanner from "../assets/images/hero-banner.png";
import HeroBtnImg from "../assets/images/hero-button-img.jpg";
import PlayBtn from "../assets/images/playBtn.svg";
function HeroText() {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-row ">
          <button className="flex gap-1 text-light-coral bg-misty-rose py-3 px-6 rounded-full cursor-default mb-7">
            Explore The World
            <img src={PlaneIcon} alt="" />
          </button>
          <p className="text-7xl font-bold mb-10">
            It&apos;s a Big World Out There, Go Explore
          </p>
          <p className="text-granite-gray pr-52 leading-8">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex items-center gap-5 mt-10">
            <button className="bg-red-salsa rounded-full py-3 px-8  text-white hover:bg-english-vermillon transition-all duration-100">
              Plan a Trip &rarr;
            </button>
            <img src={HeroBtnImg} alt="" className="rounded-full w-16" />
            <img src={PlayBtn} alt="" className="w-10 m-minus cursor-pointer" />
            <p className="ml-6 text-neutral-600 font-semibold hover:text-majorelle-blue cursor-pointer">
              Watch our Story
            </p>
          </div>
        </div>

        <img src={HeroBanner} className="w-1/2" alt="" />
      </div>
    </div>
  );
}

export default HeroText;
