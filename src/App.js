import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";

// import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/service" element={<Service />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Router> */}
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Service />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
