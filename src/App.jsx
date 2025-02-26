import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Attorneys from "./pages/Attorneys";
import CaseStudy from "./pages/CaseStudy";
import FAQs from "./pages/FAQs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

// Create theme with the gold accent color
const theme = createTheme({
  palette: {
    primary: {
      main: '#AB835C',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <div className="pt-16 flex flex-col min-h-screen"> {/* Ensures footer stays at the bottom */}
            <div className="flex-grow"> {/* Allows content to expand while keeping footer at the bottom */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/practice-areas" element={<PracticeAreas />} />
                <Route path="/attorneys" element={<Attorneys />} />
                <Route path="/case-study" element={<CaseStudy />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;