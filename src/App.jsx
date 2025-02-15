import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Attorneys from "./pages/Attorneys";
import CaseStudy from "./pages/CaseStudy";
import FAQs from "./pages/FAQs";
import Testimonials from "./pages/Testimonials";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Adds space to prevent content overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
