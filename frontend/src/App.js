import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RunningBanner from "./components/RunningBanner";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import WarningSection from "./components/WarningSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <RunningBanner />
      <HeroSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <WarningSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;