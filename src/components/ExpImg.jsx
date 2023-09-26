import ExperienceBanner from "../assets/images/experience-banner.png";
import ExpShape from "../assets/images/exp-shape.svg";
function ExpImg() {
  return (
    <>
      <div className="w-700 relative">
        <img src={ExperienceBanner} alt="" className="w-500" />
        <img
          src={ExpShape}
          alt=""
          className="w-28 absolute top-72 left-0 ml-m-"
        />
      </div>
    </>
  );
}

export default ExpImg;
