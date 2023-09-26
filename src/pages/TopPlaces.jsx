import Places from "../components/Places";
import Italy from "../assets/images/destination-1.jpg";

import Pakistan from "../assets/images/destination-2.jpg";
import Dubai from "../assets/images/destination-3.jpg";
import Maldives from "../assets/images/destination-4.jpg";
import Thailand from "../assets/images/destination-5.jpg";
import Turky from "../assets/images/destination-6.jpg";
import Button from "../components/Button";
function TopPlaces() {
  return (
    <div>
      <div>
        <p className="font-medium text-lg text-majorelle-blue text-center mb-6">
          TOP DESTINATIONS
        </p>
        <h1 className="font-bold text-5xl text-center">
          Explore Top Destinations
        </h1>
        <div className="flex items-center justify-center">
          <div className="mt-14 grid grid-rows-2 grid-cols-3 ">
            <Places
              imageSrc={Italy}
              price={340}
              title={"Enjoy the Beauty of the del Pincio"}
              description={"Roma, Italy"}
              rate={4.7}
              reviews={"11.1k"}
            />
            <Places
              imageSrc={Pakistan}
              price={340}
              title={"Enjoy the Beauty of the Pakistan Monument"}
              description={"Islamabad, Pakistan"}
              rate={4.6}
              reviews={"16.9k"}
            />
            <Places
              imageSrc={Maldives}
              price={340}
              title={"Enjoy the Beauty of the Ko Tao"}
              description={"Island in the Gulf of Thailand"}
              rate={4.7}
              reviews={"70"}
            />
            <Places
              imageSrc={Dubai}
              price={340}
              title={"Enjoy the Beauty of the Burj Khalifa"}
              description={"Skyscraper in Dubai"}
              rate={4.7}
              reviews={"120k"}
            />

            <Places
              imageSrc={Thailand}
              price={340}
              title={"Enjoy the Beauty of the Milaidhoo"}
              description={"Island in the Maldives"}
              rate={4.5}
              reviews={985}
            />
            <Places
              imageSrc={Turky}
              price={340}
              title={"Enjoy the Beauty of the Grand Mecidiye Mosque"}
              description={"Mosque in Istanbul, Türkiye"}
              rate={4.8}
              reviews={"29.6K"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button content={"View All Destinations"} href={"#"} />
      </div>
    </div>
  );
}

export default TopPlaces;
