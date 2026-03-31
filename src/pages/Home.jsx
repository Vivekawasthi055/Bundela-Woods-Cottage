import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.css";
import BookingWidget from "../components/BookingWidget";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774778347/img1_bg1bkb.jpg",
    "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774778348/img2_yjxjhv.jpg",
    "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774778344/img3_ndq0nv.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bookingUrl =
    "https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html";

  return (
    <div className="home-page">
      <Helmet>
        <title>
          Bundela Woods Cottage & Restaurant | Premium Boutique Stay in
          Khajuraho
        </title>

        <meta
          name="description"
          content="Looking for the best hotel in Khajuraho? Stay at Bundela Woods Cottage & Restaurant – premium wooden cottages near UNESCO temples. Book your luxury stay today."
        />

        <meta
          name="keywords"
          content="best hotel in Khajuraho, luxury hotel Khajuraho, boutique hotel Khajuraho, cottages near Khajuraho temples, Khajuraho resort"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slideshow">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            Bundela Woods Cottage & Restaurant
          </h1>
          <p
            className="hero-subtitle fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A Premium Wooden Stay in the Heart of Khajuraho
          </p>
          <div
            className="hero-highlights fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="highlight-item">
              <span className="highlight-icon">🌲</span>
              <span>100% Premium Wooden Cottage</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🏠</span>
              <span>Only 8 Exclusive Rooms</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🕌</span>
              <span>Near Khajuraho Temples & Airport</span>
            </div>
          </div>
          <div
            className="hero-buttons fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Book Now
            </a>
            <Link to="/rooms" className="btn btn-secondary home-btn-second">
              Explore Rooms
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ====== LUXURY BOOKING BAR ====== */}
      <div className="booking-bar-section">
        <BookingWidget />
      </div>

      {/* Small About Section */}
      <section className="section home-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2>Where Nature Meets Luxury</h2>
              <p>
                Bundela Woods Cottage & Restaurant is a unique boutique stay
                built entirely with premium quality wood. Designed to blend
                nature with comfort, our cottage offers a peaceful environment,
                warm wooden interiors, and a personalized stay experience near
                Khajuraho UNESCO World Heritage temples, making it one of the
                best hotels in Khajuraho.
              </p>
              <p>
                Each room is crafted with attention to detail, offering modern
                amenities while maintaining an authentic connection to nature.
                Experience the warmth of wood, the serenity of our surroundings,
                and the luxury of exclusive hospitality.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image reveal">
              <img
                src="https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774947004/IMG_3718_nx6ji4.jpg"
                alt="Luxury wooden cottage interior in Khajuraho hotel"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Overview */}
      <section className="section rooms-overview">
        <div className="container">
          <div className="section-title reveal">
            <h2>Rooms Crafted for Comfort & Nature</h2>
            <p>
              Experience premium wooden cottages with modern amenities and
              scenic views
            </p>
          </div>
          <div className="rooms-grid">
            <div className="room-card reveal">
              <div className="room-image">
                <img
                  src="https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3748_bkduey.jpg"
                  alt="Deluxe room in best hotel in Khajuraho with wooden interior"
                  loading="lazy"
                  decoding="async"
                />
                <div className="room-overlay">
                  <Link to="/rooms/deluxe" className="btn btn-gold">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="room-info">
                <h3>Deluxe Room</h3>
                <p>
                  Spacious wooden room with private balcony and scenic views.
                  Perfect for couples and families seeking comfort and
                  tranquility.
                </p>
                <ul className="room-features">
                  <li>🛏️ King Size Bed</li>
                  <li>🌅 Private Balcony</li>
                  <li>❄️ Air Conditioning</li>
                  <li>📶 Free Wi-Fi</li>
                </ul>
              </div>
            </div>

            <div className="room-card reveal">
              <div className="room-image">
                <img
                  src="https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784772/IMG_3982_lwtkpx.jpg"
                  alt="Standard wooden cottage room in Khajuraho near temples"
                  loading="lazy"
                  decoding="async"
                />
                <div className="room-overlay">
                  <Link to="/rooms/standard" className="btn btn-gold">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="room-info">
                <h3>Standard Room</h3>
                <p>
                  Unique room with a tree view inside, offering an immersive
                  natural experience while maintaining modern comfort and
                  luxury.
                </p>
                <ul className="room-features">
                  <li>🛏️ Comfortable King Bed</li>
                  <li>🌳 Tree View Inside</li>
                  <li>❄️ Air Conditioning</li>
                  <li>📶 Free Wi-Fi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section amenities-section">
        <div className="container">
          <div className="section-title reveal">
            <h2>Premium Amenities & Facilities</h2>
            <p>Everything you need for a comfortable and memorable stay</p>
          </div>
          <div className="amenities-grid">
            {[
              {
                icon: "📶",
                title: "Free Wi-Fi",
                desc: "High-speed internet throughout the property",
              },
              {
                icon: "❄️",
                title: "Air Conditioning",
                desc: "Climate control in all rooms",
              },
              {
                icon: "🍽️",
                title: "In-house Restaurant",
                desc: "Fresh local and international cuisine",
              },
              {
                icon: "🅿️",
                title: "Free Parking",
                desc: "Secure parking for all guests",
              },
              {
                icon: "🌳",
                title: "Garden Area",
                desc: "Beautiful landscaped gardens",
              },
              {
                icon: "🐾",
                title: "Pet Friendly",
                desc: "Your furry friends are welcome",
              },
              {
                icon: "🛎️",
                title: "Room Service",
                desc: "24/7 in-room dining available",
              },
              {
                icon: "🤝",
                title: "24/7 Assistance",
                desc: "Round-the-clock guest support",
              },
            ].map((amenity, index) => (
              <div
                key={index}
                className="amenity-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="amenity-icon">{amenity.icon}</div>
                <h4>{amenity.title}</h4>
                <p>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Khajuraho */}
      <section className="section khajuraho-section">
        <div className="container">
          <div className="khajuraho-content">
            <div className="khajuraho-text reveal">
              <h2>Discover the Heritage of Khajuraho</h2>
              <p>
                Khajuraho is a UNESCO World Heritage Site, famous for its
                stunning ancient temples, rich culture, and architectural
                brilliance. Built between 950 and 1050 AD by the Chandela
                dynasty, these temples showcase exquisite sculptures and
                intricate stone carvings that attract visitors from around the
                world.
              </p>
              <p>
                Staying at Bundela Woods places you close to this incredible
                history while enjoying the peace of nature and modern comfort.
                Experience the perfect blend of cultural exploration and
                relaxation.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Plan Your Visit
              </Link>
            </div>
            <div className="khajuraho-image reveal">
              <img
                src="https://images.unsplash.com/photo-1713712183547-f3db600111e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Khajuraho Temples"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section attractions-section">
        <div className="container">
          <div className="section-title reveal">
            <h2>Nearby Attractions</h2>
            <p>Explore the wonders near Bundela Woods</p>
          </div>
          <div className="attractions-grid">
            {[
              {
                name: "Kandariya Mahadeva Temple",
                distance: "2.7 km",
                image:
                  "https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Lakshmana Temple",
                distance: "2.7 km",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Khajuraho-Lakshmana_temple.JPG",
              },
              {
                name: "Vaman Temple",
                distance: "3.4 km",
                image:
                  "https://plus.unsplash.com/premium_photo-1697730379259-822bae7942e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Duladeo Temple",
                distance: "2.6 km",
                image:
                  "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Khajuraho Airport",
                distance: "2.9 km",
                image:
                  "https://www.vvipflight.com/blog/isols-vvipflight-data/uploads/2023/08/WhatsApp-Image-2023-08-16-at-12.09.12-1.jpeg",
              },
              {
                name: "Raneh Falls",
                distance: "20 km",
                image:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ed/cc/53/raneh-falls.jpg?w=1400&h=-1&s=1",
              },
              {
                name: "Pandav Caves and Fall",
                distance: "40 km",
                image:
                  "https://www.pannalive.com/wp-content/uploads/tourist-places/pandav-fall-and-caves4.jpg",
              },
              {
                name: "Panna Tiger Reserve",
                distance: "45 km",
                image:
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/f2/6b/ca.jpg",
              },
            ].map((attraction, index) => (
              <div key={index} className="attraction-card reveal">
                <div className="attraction-image">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="attraction-info">
                  <h4>{attraction.name}</h4>
                  <p className="distance">📍 {attraction.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Location */}
      <section className="section map-section">
        <div className="container">
          <div className="section-title reveal">
            <h2>Find Us Here</h2>
            <p>Bundela Woods Cottage & Restaurant, Khajuraho</p>
          </div>
          <div className="map-container reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.948815120259!2d79.91720047515109!3d24.831423977948138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982e5001b429339%3A0x841fd17b9a2c690!2sBundela%20Woods%20Cottage%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1770803486494!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bundela Woods Location"
            ></iframe>
          </div>
          <div className="map-address reveal">
            <p>📍 Khajuraho, Madhya Pradesh, India</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section gallery-preview">
        <div className="container">
          <div className="section-title reveal">
            <h2>Glimpses of Bundela Woods</h2>
            <p>Experience the beauty and serenity</p>
          </div>
          <div className="preview-grid">
            {[
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
              "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784767/IMG_3976_e9m4dd.jpg",
              "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784780/IMG_4498_of6l8p.jpg",
            ].map((img, index) => (
              <div key={index} className="preview-image reveal">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="gallery-cta reveal">
            <Link to="/gallery" className="btn btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>
              Experience the warmth of wood, comfort of luxury, and calm of
              nature
            </h2>
            <p>
              Book your exclusive stay at Bundela Woods Cottage & Restaurant
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-large"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
