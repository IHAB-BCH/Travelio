import PageNav from "./components/PageNav";
import About from "./pages/About";
import CTA from "./pages/CTA";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import PhotoGallery from "./pages/PhotoGallery";
import Service from "./pages/Service";
import TopPlaces from "./pages/TopPlaces";

function App() {
  return (
    <div>
      <PageNav />
      <Hero />
      <Service />
      <TopPlaces />
      <Experience />
      <PhotoGallery />
      <CTA />
      <About />
    </div>
  );
}

export default App;
