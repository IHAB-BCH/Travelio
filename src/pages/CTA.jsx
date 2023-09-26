import PlaneIcon from "../assets/images/title-icon.svg";
import Button from "../components/Button";
function CTA() {
  return (
    <div className="flex justify-center items-center mt-32 p-36 pb-36 mb-16 rounded-3xl bg-misty-rose">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5 mx-28 leading-1">
          Prepare Yourself & Let's Explore The Beauty Of The World
          <img src={PlaneIcon} alt="" className="inline-block ml-3 w-10 pb-2" />
        </h1>
        <p className="text-granite-gray mb-7">
          We have many special offers especially for you.
        </p>
        <Button
          content={"Get Started"}
          className={
            "text-lg shadow-lg hover:shadow-sm transition-all duration-200 hover:bg-majoreller-hover"
          }
        />
      </div>
    </div>
  );
}

export default CTA;
