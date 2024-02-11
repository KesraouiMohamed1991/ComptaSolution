import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Hero from "./pages/Hero";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Formations from "./pages/Formations";
import Creation from "./pages/Creation";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formation" element={<Formations />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
