import React, { useState, useEffect } from "react";
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
    "Indoor",
    "Outdoor",
    "Garden",
    "Parking",
  ];

  const galleryItems = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766746126/holi-tour_p2wli7.jpg",
      category: "indoor",
      type: "image",
      title: "Deluxe Room",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      category: "indoor",
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
    //DELUXE ROOM IMAGES 06 to 23
    {
      id: 6,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780393/IMG_5321_kfdefw.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Room with Balcony",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780392/IMG_4506_o3slea.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Room Bathroom",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780389/IMG_4504_v50jus.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Room Interior",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780388/IMG_4494_zly0v7.jpg",
      category: "rooms",
      type: "image",
      title: "Premium Wooden Room",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780387/IMG_4501_bdzb2g.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Balcony Room",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780386/IMG_4498_sxvhk4.jpg",
      category: "rooms",
      type: "image",
      title: "Bathroom",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780384/IMG_3995_icjdjd.jpg",
      category: "rooms",
      type: "image",
      title: "Luxury Room",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780383/IMG_3994_iboyrr.jpg",
      category: "rooms",
      type: "image",
      title: "Wooden Room",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780383/IMG_3988_q4yh5r.jpg",
      category: "rooms",
      type: "image",
      title: "Balcony View",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780380/IMG_3987_ecgwnt.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Room Balcony",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780378/IMG_3958_erdiog.jpg",
      category: "rooms",
      type: "image",
      title: "Toilet",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780378/IMG_3965_fvclo4.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Full Room",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780377/IMG_3964_igjipg.jpg",
      category: "rooms",
      type: "image",
      title: "Room View",
    },
    {
      id: 19,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780376/IMG_3962_lanbo5.jpg",
      category: "rooms",
      type: "image",
      title: "Bedroom Deluxe",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780375/IMG_3960_zj9b5k.jpg",
      category: "rooms",
      type: "image",
      title: "Bedroom",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3957_x6mxlp.jpg",
      category: "rooms",
      type: "image",
      title: "Bathroom",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780374/IMG_3748_bkduey.jpg",
      category: "rooms",
      type: "image",
      title: "Full Deluxe Room View",
    },
    {
      id: 23,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774780373/IMG_3745_vvngca.jpg",
      category: "rooms",
      type: "image",
      title: "Deluxe Bedroom",
    },
    {
      id: 24,
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
      category: "lobby",
      type: "image",
      title: "Lobby Seating",
    },
    {
      id: 25,
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Restaurant",
    },
    {
      id: 26,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Dining Space",
    },
    {
      id: 27,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Sunrise View",
    },
    {
      id: 28,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Evening Ambiance",
    },
    {
      id: 29,
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "parking",
      type: "image",
      title: "Parking Area",
    },

    //STANDARD ROOM IMAGES 30 to 40
    {
      id: 30,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784772/IMG_3982_lwtkpx.jpg",
      category: "rooms",
      type: "image",
      title: "Standard Tree View Room",
    },
    {
      id: 31,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784783/IMG_4503_pgprp7.jpg",
      category: "rooms",
      type: "image",
      title: "Tree View in Standard Room",
    },
    {
      id: 32,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784776/IMG_3983_zbdbz0.jpg",
      category: "rooms",
      type: "image",
      title: "Tree View Full Room",
    },
    {
      id: 33,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784774/IMG_4504_ulmoda.jpg",
      category: "rooms",
      type: "image",
      title: "Room in Bundela Woods",
    },
    {
      id: 34,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784767/IMG_3976_e9m4dd.jpg",
      category: "rooms",
      type: "image",
      title: "Tree View",
    },
    {
      id: 35,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784761/IMG_3750_ndgstl.jpg",
      category: "rooms",
      type: "image",
      title: "Bathroom",
    },
    {
      id: 36,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784780/IMG_4498_of6l8p.jpg",
      category: "rooms",
      type: "image",
      title: "Standard Room Bathroom",
    },
    {
      id: 37,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784767/IMG_3972_u5pnoq.jpg",
      category: "rooms",
      type: "image",
      title: "Entry Standard Room",
    },
    {
      id: 38,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784760/IMG_3749_wqlgvt.jpg",
      category: "rooms",
      type: "image",
      title: "Toilet",
    },
    {
      id: 39,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784766/IMG_3957_f2dngd.jpg",
      category: "rooms",
      type: "image",
      title: "Bathroom in Bundela Woods",
    },
    {
      id: 40,
      url: "https://res.cloudinary.com/dxulakqzd/image/upload/f_auto,q_auto,w_1600/v1774784773/IMG_4497_jqxmpg.jpg",
      category: "rooms",
      type: "image",
      title: "Bathroom",
    },
    {
      id: 41,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Evening Ambiance",
    },
    {
      id: 42,
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "parking",
      type: "image",
      title: "Parking Area",
    },
    {
      id: 43,
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
      category: "lobby",
      type: "image",
      title: "Lobby Seating",
    },
    {
      id: 44,
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Restaurant",
    },
    {
      id: 45,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      category: "indoor",
      type: "image",
      title: "Dining Space",
    },
    {
      id: 46,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Sunrise View",
    },
    {
      id: 47,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Evening Ambiance",
    },
    {
      id: 48,
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "parking",
      type: "image",
      title: "Parking Area",
    },
    {
      id: 49,
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      category: "outdoor",
      type: "image",
      title: "Evening Ambiance",
    },
    {
      id: 50,
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "parking",
      type: "image",
      title: "Parking Area",
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
