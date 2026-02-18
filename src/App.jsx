import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const map = {
      "/": "top",
      "/services": "services",
      "/about": "about",
      "/process": "process",
      "/testimonials": "testimonials",
      "/faq": "faq",
      "/contact": "contact",
    };

    const id = map[location.pathname];

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-base dark:text-text"
    >
      <ScrollToSection />

      <Header />

      {/* Dummy routes ONLY for URL */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/services" element={null} />
        <Route path="/about" element={null} />
        <Route path="/process" element={null} />
        <Route path="/testimonials" element={null} />
        <Route path="/faq" element={null} />
        <Route path="/contact" element={null} />
      </Routes>

      <main id="main">
        <section id="top">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <About />
        <Process />
        <Testimonials />
        <FAQ />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;