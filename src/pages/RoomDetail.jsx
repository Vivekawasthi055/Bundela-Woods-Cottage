import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import "./RoomDetail.css";

function RoomDetail() {
  const { roomType } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const roomsData = {
    deluxe: {
      name: "Deluxe Room",
      subtitle: "Luxury with Scenic Views",
      images: [
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3748_bkduey.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780393/IMG_5321_kfdefw.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780373/IMG_3745_vvngca.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780377/IMG_3964_igjipg.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780378/IMG_3965_fvclo4.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3957_x6mxlp.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780386/IMG_4498_sxvhk4.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780392/IMG_4506_o3slea.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780387/IMG_4501_bdzb2g.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780378/IMG_3958_erdiog.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780383/IMG_3988_q4yh5r.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780389/IMG_4504_v50jus.jpg",
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
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784772/IMG_3982_lwtkpx.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784783/IMG_4503_pgprp7.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784776/IMG_3983_zbdbz0.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784774/IMG_4504_ulmoda.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784767/IMG_3976_e9m4dd.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784761/IMG_3750_ndgstl.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784780/IMG_4498_of6l8p.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784767/IMG_3972_u5pnoq.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784760/IMG_3749_wqlgvt.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784766/IMG_3957_f2dngd.jpg",
        "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784773/IMG_4497_jqxmpg.jpg",
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
            <div
              className="main-image"
              onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={() => {
                if (touchStart - touchEnd > 50) nextImage(); // swipe left
                if (touchEnd - touchStart > 50) prevImage(); // swipe right
              }}
            >
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
