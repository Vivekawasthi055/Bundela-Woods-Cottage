import React, { useState, useEffect } from "react";
import { galleryItems, videoItems } from "../data/galleryData";
import { Helmet } from "react-helmet";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const categories = [
    "All",
    "Rooms",
    "Lobby",
    "Restaurant",
    "Outdoor",
    // "Garden",
    "Parking",
    "Videos",
  ];

  const allItems = [...galleryItems, ...videoItems];

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter(
          (item) => item.category === activeCategory.toLowerCase(),
        );

  const visibleGallery = filteredItems.slice(0, visibleItems);

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

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxOpen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

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
            {visibleGallery.map((item, index) => (
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
                      loading="lazy"
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
          {visibleItems < filteredItems.length && (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                className="btn btn-primary"
                onClick={() => setVisibleItems((prev) => prev + 8)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            if (touchStart - touchEnd > 50) nextImage(); // swipe left
            if (touchEnd - touchStart > 50) prevImage(); // swipe right
          }}
        >
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
              {currentVideo.source === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.url}?autoplay=1`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls autoPlay playsInline className="video-player">
                  <source src={currentVideo.url} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="lightbox-caption">{currentVideo.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
