import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RoomsBookingWidget from "../components/RoomsBookingWidget";

import "./Rooms.css";

function Rooms() {
  const rooms = [
    {
      id: "deluxe",
      name: "Deluxe Room",
      subtitle: "Luxury with a View",
      image:
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3748_bkduey.jpg",
      description:
        "Spacious wooden room with private balcony offering scenic views of our lush gardens. Perfect for couples and families seeking comfort and tranquility.",
      features: [
        "King Size Bed",
        "Private Balcony",
        "Scenic Garden View",
        "Air Conditioning",
        "Premium Wooden Interiors",
        "En-suite Bathroom",
        "Free Wi-Fi",
        "LED TV",
        "Tea/Coffee Maker",
      ],
      maxOccupancy: "2 Guests",
      roomSize: "183 sq ft",
      available: 7,
    },
    {
      id: "standard",
      name: "Standard Room",
      subtitle: "Nature Inside",
      image:
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784772/IMG_3982_lwtkpx.jpg",
      description:
        "Our unique room featuring a living tree view inside the space, offering an immersive natural experience while maintaining modern comfort and luxury.",
      features: [
        "Comfortable King Bed",
        "Unique Tree View Inside",
        "Natural Wooden Ambiance",
        "Air Conditioning",
        "Premium Furnishings",
        "En-suite Bathroom",
        "Free Wi-Fi",
        "LED TV",
        "Tea/Coffee Maker",
        "Reading Corner",
      ],
      maxOccupancy: "2 Guests",
      roomSize: "151 sq ft",
      available: 1,
    },
  ];

  return (
    <div className="rooms-page">
      <Helmet>
        <title>
          Luxury Rooms | Book Wooden Cottage Rooms Near Khajuraho Temples
        </title>

        <meta
          name="description"
          content="Book luxury rooms in Khajuraho at Bundela Woods Cottage. Premium wooden rooms near temples with modern amenities. Reserve your stay today."
        />

        <meta
          name="keywords"
          content="rooms in Khajuraho, luxury rooms Khajuraho, hotel rooms near Khajuraho temples, deluxe room Khajuraho, cottage rooms Khajuraho"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="rooms-hero">
        <div className="rooms-hero-overlay"></div>
        <div className="rooms-hero-content">
          <h1 className="fade-in-up">Our Rooms</h1>
          <p className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            8 Exclusive Wooden Sanctuaries
          </p>
        </div>
      </section>

      {/* Rooms Booking Widget — overlaps hero from below */}
      <RoomsBookingWidget />

      {/* Rooms Intro */}
      <section className="section rooms-intro">
        <div className="container">
          <div className="intro-content reveal">
            <h2>Choose Your Perfect Retreat</h2>
            <p>
              Each room at Bundela Woods is a carefully crafted sanctuary, built
              entirely with premium quality wood. Whether you choose our
              spacious Deluxe Rooms with private balconies or our unique
              Standard Room with an inside tree view, you'll experience the
              perfect blend of nature, luxury, and comfort.
            </p>
            <p>
              Learn more{" "}
              <Link to="/about" className="internal-link">
                about our hotel in Khajuraho
              </Link>{" "}
              or check guest experiences on our{" "}
              <Link to="/reviews" className="internal-link">
                reviews page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="section rooms-listing">
        <div className="container">
          <div className="rooms-cards">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`room-detail-card reveal ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
              >
                <div className="room-detail-image">
                  <img
                    src={room.image}
                    alt={`${room.name} in Bundela Woods Cottage & Restaurant`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="room-badge">
                    {room.available} {room.available === 1 ? "Room" : "Rooms"}{" "}
                    Available
                  </div>
                </div>

                <div className="room-detail-content">
                  <div className="room-header">
                    <h2>{room.name}</h2>
                    <p className="room-subtitle">{room.subtitle}</p>
                  </div>

                  <p className="room-description">{room.description}</p>

                  <div className="room-specs">
                    <div className="spec-item">
                      <span className="spec-icon">👥</span>
                      <span>{room.maxOccupancy}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-icon">📏</span>
                      <span>{room.roomSize}</span>
                    </div>
                  </div>

                  <div className="room-features-list">
                    <h4>Room Features</h4>
                    <div className="features-grid">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="room-actions">
                    <Link to={`/rooms/${room.id}`} className="btn btn-primary">
                      View Full Details
                    </Link>
                    <a
                      href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="section common-features">
        <div className="container">
          <div className="section-title reveal">
            <h2>All Rooms Include</h2>
            <p>Standard amenities across all our accommodations</p>
          </div>

          <div className="common-grid">
            {[
              {
                icon: "🌲",
                title: "100% Wooden Construction",
                desc: "Premium quality wood throughout",
              },
              {
                icon: "❄️",
                title: "Climate Control",
                desc: "Individual AC in every room",
              },
              { icon: "🛁", title: "Modern Bathrooms", desc: "Hot water 24/7" },
              {
                icon: "📶",
                title: "Free Wi-Fi",
                desc: "High-speed internet access",
              },
              {
                icon: "☕",
                title: "Tea/Coffee",
                desc: "In-room beverage facilities",
              },
              {
                icon: "📺",
                title: "Entertainment",
                desc: "LED TV with channels",
              },
              {
                icon: "🧹",
                title: "Daily Housekeeping",
                desc: "Fresh linens daily",
              },
              {
                icon: "🛎️",
                title: "24/7 Service",
                desc: "Round-the-clock assistance",
              },
            ].map((feature, index) => (
              <div key={index} className="common-card reveal">
                <div className="common-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section booking-cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to Book Your Stay?</h2>
            <p>Experience the luxury of wood and the comfort of nature</p>
            <a
              href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-large"
            >
              Reserve Your Room Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
