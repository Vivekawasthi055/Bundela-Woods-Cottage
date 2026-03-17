import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import "./RoomDetail.css";

function RoomDetail() {
  const { roomType } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const roomsData = {
    deluxe: {
      name: "Deluxe Room",
      subtitle: "Luxury with Scenic Views",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      ],
      description:
        "Our Deluxe Rooms are the epitome of comfort and luxury at Bundela Woods. Featuring premium wooden interiors throughout, each room offers a private balcony with stunning views of our lush gardens and surrounding nature. Perfect for couples seeking a romantic getaway or families wanting spacious accommodation.",
      features: [
        "King Size Bed with premium mattress",
        "Private Balcony with garden/nature views",
        "Premium quality wooden furniture and flooring",
        "Individual air conditioning with temperature control",
        "En-suite bathroom with modern fixtures",
        "Hot and cold water 24/7",
        "Complimentary high-speed Wi-Fi",
        "LED TV with satellite channels",
        "Tea and coffee making facilities",
        "Mini refrigerator",
        "Work desk and comfortable seating",
        "Wardrobe with ample storage",
        "Room service available 24/7",
        "Daily housekeeping",
        "Complimentary toiletries",
      ],
      viewType: "Garden & Nature Views from Private Balcony",
      maxOccupancy: "2-3 Guests",
      roomSize: "183 sq ft",
      bedType: "King Size",
      available: 7,
    },
    standard: {
      name: "Standard Room",
      subtitle: "Unique Tree View Experience",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      ],
      description:
        "Our unique Standard Room offers an extraordinary experience with a living tree view inside the room itself. This one-of-a-kind accommodation seamlessly blends nature with modern comfort, creating an intimate connection with the environment while maintaining all the luxuries of contemporary hospitality.",
      features: [
        "Comfortable King Size Bed",
        "Unique tree view inside the room",
        "Premium wooden interiors and furniture",
        "Individual air conditioning",
        "Modern en-suite bathroom",
        "Hot and cold water 24/7",
        "Complimentary high-speed Wi-Fi",
        "LED TV with channels",
        "Tea and coffee facilities",
        "Cozy reading corner",
        "Wardrobe with storage",
        "Natural ambiance with modern amenities",
        "24/7 room service",
        "Daily housekeeping",
        "Complimentary toiletries",
      ],
      viewType: "Living Tree Inside Room (Unique Experience)",
      maxOccupancy: "2 Guests",
      roomSize: "151 sq ft",
      bedType: "King Size",
      available: 1,
    },
  };

  const room = roomsData[roomType];

  if (!room) {
    return (
      <div className="room-not-found">
        <div className="container">
          <h2>Room Not Found</h2>
          <Link to="/rooms" className="btn btn-primary">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + room.images.length) % room.images.length,
    );
  };

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="room-detail-page">
      <Helmet>
        <title>
          {room.name} in Khajuraho | Book Luxury Hotel Room - Bundela Woods
        </title>

        <meta
          name="description"
          content={`Book ${room.name} in Khajuraho at Bundela Woods Cottage. Luxury wooden hotel rooms near temples with modern amenities and nature views.`}
        />

        <meta
          name="keywords"
          content={`hotel rooms in Khajuraho, ${room.name} Khajuraho, luxury hotel Khajuraho, best rooms in Khajuraho`}
        />
      </Helmet>
      {/* Room Header */}
      <section className="room-detail-header">
        <div className="container">
          <div className="header-content reveal">
            <h1>{room.name}</h1>
            <p className="room-subtitle-detail">{room.subtitle}</p>
            <div className="room-quick-info">
              <span>📏 {room.roomSize}</span>
              <span>👥 {room.maxOccupancy}</span>
              <span>🛏️ {room.bedType}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="section image-slider-section">
        <div className="container">
          <div className="slider-container reveal">
            <div className="main-image">
              <img
                src={room.images[currentImage]}
                alt={`${room.name} - image ${currentImage + 1}`}
                loading="lazy"
                decoding="async"
              />
              <button
                className="slider-btn prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="slider-btn next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            <div className="thumbnail-container">
              {room.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImage ? "active" : ""}`}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={img}
                    alt={`${room.name} - image ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="section room-info-section">
        <div className="container">
          <div className="room-info-grid">
            <div className="room-description-box reveal">
              <h2>About This Room</h2>
              <p>{room.description}</p>

              <div className="room-highlights">
                <div className="highlight-box">
                  <h4>🌅 View Type</h4>
                  <p>{room.viewType}</p>
                </div>
                <div className="highlight-box">
                  <h4>👥 Maximum Occupancy</h4>
                  <p>{room.maxOccupancy}</p>
                </div>
                <div className="highlight-box">
                  <h4>📐 Room Size</h4>
                  <p>{room.roomSize}</p>
                </div>
                <div className="highlight-box">
                  <h4>✨ Availability</h4>
                  <p>
                    {room.available} {room.available === 1 ? "Room" : "Rooms"}
                  </p>
                </div>
              </div>
            </div>

            <div className="room-features-box reveal">
              <h2>Room Features & Amenities</h2>
              <ul className="detailed-features">
                {room.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section booking-section">
        <div className="container">
          <div className="booking-box reveal">
            <h2>Ready to Book This Room?</h2>
            <p>Experience the luxury of {room.name} at Bundela Woods</p>
            <div className="booking-actions">
              <a
                href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-large"
              >
                Book Now on Booking.com
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us for Inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="section other-rooms">
        <div className="container">
          <div className="section-title reveal">
            <h2>Explore Our Other Rooms</h2>
          </div>
          <div className="other-rooms-grid">
            {Object.keys(roomsData)
              .filter((key) => key !== roomType)
              .map((key) => {
                const otherRoom = roomsData[key];
                return (
                  <div key={key} className="other-room-card reveal">
                    <div className="other-room-image">
                      <img
                        src={otherRoom.images[0]}
                        alt={otherRoom.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="other-room-content">
                      <h3>{otherRoom.name}</h3>
                      <p>{otherRoom.subtitle}</p>
                      <Link to={`/rooms/${key}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomDetail;
