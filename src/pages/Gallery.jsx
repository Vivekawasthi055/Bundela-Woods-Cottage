import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);

  const categories = [
    "All",
    "Rooms",
    "Lobby",
    "Indoor",
    "Outdoor",
    "Garden",
    "Parking",
  ];

  const galleryItems = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      category: "rooms",
      type: "image",
      title: "Deluxe Room",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      category: "rooms",
      type: "image",
      title: "Standard Room",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Wooden Interiors",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Cottage Exterior",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      category: "lobby",
      type: "image",
      title: "Reception Area",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Outdoor Seating",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      category: "rooms",
      type: "image",
      title: "Room Interior",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Common Area",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      category: "rooms",
      type: "image",
      title: "Bedroom View",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      category: "rooms",
      type: "image",
      title: "Bathroom",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1587874412284-b5c9ec6f8fd9?w=800&q=80",
      category: "garden",
      type: "image",
      title: "Garden Pathway",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
      category: "garden",
      type: "image",
      title: "Lush Gardens",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Restaurant Area",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Dining Space",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Sunrise View",
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Evening Ambiance",
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "parking",
      type: "image",
      title: "Parking Area",
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
      category: "lobby",
      type: "image",
      title: "Lobby Seating",
    },
  ];

  const videoItems = [
    {
      id: "v1",
      url: "1fDn7a4TvwI",
      category: "outdoor",
      type: "video",
      title: "Property Tour",
      thumbnail:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    },
    {
      id: "v2",
      url: "qemqQHaeCYo",
      category: "rooms",
      type: "video",
      title: "Room Showcase",
      thumbnail:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80",
    },
  ];

  const allItems = [...galleryItems, ...videoItems];

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter(
          (item) => item.category === activeCategory.toLowerCase(),
        );

  const imageItems = filteredItems.filter((item) => item.type === "image");

  useEffect(() => {
    setTimeout(() => {
      const reveals = document.querySelectorAll(".gallery-item");
      reveals.forEach((element, index) => {
        element.classList.remove("active");
        setTimeout(() => {
          element.classList.add("active");
        }, index * 30);
      });
    }, 50);
  }, [activeCategory]);

  const openLightbox = (index) => {
    const item = filteredItems[index];
    if (item.type === "image") {
      const imageIndex = imageItems.findIndex((img) => img.id === item.id);
      if (imageIndex !== -1) {
        setCurrentImageIndex(imageIndex);
        setLightboxOpen(true);
      }
    } else if (item.type === "video") {
      setCurrentVideo(item);
      setVideoLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const closeVideoLightbox = () => {
    setVideoLightboxOpen(false);
    setCurrentVideo(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageItems.length) % imageItems.length,
    );
  };

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery | Bundela Woods Cottage Images & Videos</title>

        <meta
          name="description"
          content="Explore Bundela Woods Cottage gallery in Khajuraho. View luxury wooden rooms, garden, restaurant, and hotel property images near Khajuraho temples."
        />

        <meta
          name="keywords"
          content="Khajuraho hotel gallery, hotel images Khajuraho, Bundela Woods photos, hotel rooms images Khajuraho"
        />
      </Helmet>
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="fade-in-up">Gallery</h1>
          <p className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            Visual Journey Through Bundela Woods
          </p>
        </div>
      </section>

      <section className="section gallery-content">
        <div className="container">
          <div className="gallery-filter reveal active">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category.toLowerCase() ? "active" : ""}`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                <span> {category}</span>
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item reveal active"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {item.type === "image" ? (
                  <>
                    <img
                      src={item.url}
                      alt={`${item.title} at Bundela Woods Cottage in Khajuraho`}
                    />
                    <div className="gallery-overlay">
                      <span className="gallery-icon">🔍</span>
                      <span className="gallery-title">{item.title}</span>
                    </div>
                  </>
                ) : (
                  <div className="video-item">
                    <img
                      src={item.thumbnail}
                      alt={`${item.title} video preview of hotel`}
                      className="video-thumbnail"
                    />
                    <div className="video-overlay">
                      <span className="play-icon">▶</span>
                    </div>
                    <div className="video-info">
                      <span className="gallery-title">{item.title}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button
            className="lightbox-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>
          <button
            className="lightbox-btn next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageItems[currentImageIndex].url}
              alt={`${imageItems[currentImageIndex].title} - Bundela Woods hotel in Khajuraho`}
            />
            <div className="lightbox-caption">
              {imageItems[currentImageIndex].title}
            </div>
          </div>
          <div className="lightbox-counter">
            {currentImageIndex + 1} / {imageItems.length}
          </div>
        </div>
      )}

      {videoLightboxOpen && currentVideo && (
        <div className="lightbox video-lightbox" onClick={closeVideoLightbox}>
          <button className="lightbox-close" onClick={closeVideoLightbox}>
            ✕
          </button>
          <div
            className="lightbox-content video-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.url}?autoplay=1`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lightbox-caption">{currentVideo.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
