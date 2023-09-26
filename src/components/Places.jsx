import StarIcon from "../assets/images/star.svg";
function Places({
  imageSrc,
  title,
  description,
  price,
  className,
  rate,
  reviews,
}) {
  return (
    <div className={`inline-block w-350 mx-10 my-7 ${className}`}>
      <div className="relative">
        <img src={imageSrc} alt="" className="rounded-3xl mb-6" />
        <button className="absolute top-6 bg-white  text-majorelle-blue font-semibold rounded-full w-20 py-2   right-4">{`$${price}`}</button>
      </div>
      <p className="text-xl font-semibold mb-3">{title}</p>
      <span className="text-granite-gray text-sm">{description}</span>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-1 bg-sunglow-alpha px-2 py-1 rounded-lg text-gray-600">
          <img src={StarIcon} alt="" className="w-4" />
          <p>{rate}</p>
        </div>
        <p className="text-gray-700">{`(${reviews} Review)`}</p>
      </div>
    </div>
  );
}

export default Places;
