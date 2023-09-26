import PageNav from "./components/PageNav";
import About from "./pages/About";
import CTA from "./pages/CTA";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import PhotoGallery from "./pages/PhotoGallery";
import Service from "./pages/Service";
import TopPlaces from "./pages/TopPlaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="pricing" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
