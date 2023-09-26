import Service1 from "../assets/images/service-icon-1.svg";
import Service2 from "../assets/images/service-icon-2.svg";
import Service3 from "../assets/images/service-icon-3.svg";

function Cards() {
  return (
    <section>
      <div className="my-16 flex items-center gap-16">
        <div>
          <h3 className="text-majorelle-blue font-semibold">WHAT WE SERVE</h3>
          <p className="text-5xl font-semibold mt-8 mb-7">Top Values For You</p>
          <span className="text-granite-gray">
            Try a variety of benefits when uses our services.
          </span>
        </div>
        <div className="bg-sunglow-alpha py-8 px-5 rounded-xl w-80">
          <img src={Service1} alt="" className="w-12" />
          <p className="py-4 text-xl font-semibold ">Lot Of Choices</p>
          <span className="text-granite-gray">
            Total 460+ destination that we work with.
          </span>
        </div>
        <div className="bg-red-salsa-alpha5 py-8 px-5 rounded-xl w-80 mt-20">
          <img src={Service2} alt="" className="w-12" />
          <p className="py-4 text-xl font-semibold ">Best Tour Guide</p>
          <span className="text-granite-gray">
            Our tour guide with +15 years of experience.
          </span>
        </div>
        <div className="bg-majorelle-blue-alpha5 py-8 px-5 rounded-xl w-80">
          <img src={Service3} alt="" className="w-12" />
          <p className="py-4 text-xl font-semibold ">Easy Booking</p>
          <span className="text-granite-gray">
            With an easy and fast ticket purchase process.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Cards;
