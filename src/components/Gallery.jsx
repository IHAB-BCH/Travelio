import Photo1 from "../assets/images/gallery-1.jpg";
import Photo2 from "../assets/images/gallery-2.jpg";
import Photo3 from "../assets/images/gallery-3.jpg";
import Photo4 from "../assets/images/gallery-4.jpg";
import Photo5 from "../assets/images/gallery-5.jpg";
import Photo6 from "../assets/images/gallery-6.jpg";
function Gallery() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-x-4 justify-center items-center">
      <div className="flex items-center gap-5 justify-center ">
        <img src={Photo1} alt="" className="w-1/3 rounded-3xl img" />
        <img src={Photo2} alt="" className="w-1/3 rounded-3xl img" />
      </div>
      <img
        src={Photo3}
        alt=""
        className="col-start-2 row-start-1 row-span-2 justify-self-center items-center rounded-3xl img2"
      />
      <img
        src={Photo4}
        alt=""
        className="row-start-1 col-start-3 justify-self-end items-center rounded-3xl"
      />
      <img
        src={Photo5}
        alt=""
        className="row-start-2 col-start-1 justify-self-start items-center rounded-3xl"
      />
      <img
        src={Photo6}
        alt=""
        className="col-start-3 justify-self-end items-center rounded-3xl"
      />
    </div>
  );
}

export default Gallery;
