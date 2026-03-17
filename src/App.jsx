import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppWidget from "./components/WhatsAppWidget";

import "./App.css";

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Force initial check for elements already in viewport
    const forceInitialCheck = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const rect = element.getBoundingClientRect();
        // If element is already in viewport, show it immediately
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.classList.add("active");
        }
      });
    };

    // Run initial check immediately and after a small delay
    forceInitialCheck();
    setTimeout(forceInitialCheck, 50);
    setTimeout(forceInitialCheck, 100);

    // Using IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // Optional: remove class when out of view for re-animation
            // Comment out next line if you want elements to stay visible
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "-50px", // Trigger 50px before element enters viewport
      },
    );

    // Observe all reveal elements
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => observer.observe(element));

    // Also listen to resize event
    window.addEventListener("resize", forceInitialCheck);

    // Cleanup
    return () => {
      window.removeEventListener("resize", forceInitialCheck);
      reveals.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollReveal />
      <div className="app">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Bundela Woods Cottage & Restaurant",
            url: "https://www.bundelawoods.com",
            telephone: "+918878366225",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Khajuraho",
              addressRegion: "Madhya Pradesh",
              postalCode: "471606",
              addressCountry: "IN",
            },
          })}
        </script>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomType" element={<RoomDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
