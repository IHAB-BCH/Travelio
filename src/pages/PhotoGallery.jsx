import Gallery from "../components/Gallery";

function PhotoGallery() {
  return (
    <section>
      <div className="text-center mt-24">
        <p className="text-lg text-majorelle-blue mb-5">PHOTO GALLERY</p>
        <p className="text-5xl font-bold mb-20">Photo's From Travelers</p>
        <Gallery />
      </div>
    </section>
  );
}

export default PhotoGallery;
