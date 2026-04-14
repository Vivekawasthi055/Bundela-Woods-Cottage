import React from "react";
import { Helmet } from "react-helmet";
import "./Reviews.css";

function Reviews() {
  const guestReviews = [
    {
      id: 1,
      name: "Ritik Vishwakarma",
      rating: 5,
      date: "March 2026",
      review:
        "Such a nice place for stay and food is also very delicious must try 💯.",
      location: "India",
      platform: "Google",
      platformLink:
        "https://www.google.com/travel/search?q=bundela%20woods%20cottage%20and%20restaurant&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72887412%2C72958624%2C73059275%2C73064764%2C73249150%2C121522131&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4Mzk4MmU1MDAxYjQyOTMzOToweDg0MWZkMTdiOWEyYzY5MBIaEhQKBwjqDxADGAESBwjqDxADGAIYATICEAA&qs=CAEyE0Nnb0lrSTJMemZ1aV82QUlFQUU4AkIJCZDGorkX_UEIQgkJkMaiuRf9QQg&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiQxdr-kMqTAxUAAAAAHQAAAAAQCA",
    },
    // {
    //   id: 2,
    //   name: "Emily Watson",
    //   rating: 5,
    //   date: "December 2025",
    //   review:
    //     "One of the most unique stays we have experienced in India. The 100% wooden construction gives such a warm, natural feeling. Staff was incredibly helpful and the location is perfect for exploring Khajuraho. Highly recommended!",
    //   location: "London, UK",
    //   platform: "Booking.com",
    //   platformLink:
    //     "https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html",
    // },
    // {
    //   id: 3,
    //   name: "Priya Patel",
    //   rating: 5,
    //   date: "November 2025",
    //   review:
    //     "The standard room with the tree view inside was such a unique experience! Never seen anything like it. The property is well-maintained, peaceful, and the restaurant serves delicious food. Will definitely visit again.",
    //   location: "Ahmedabad, India",
    //   platform: "TripAdvisor",
    //   platformLink:
    //     "https://www.tripadvisor.com/Hotel_Review-g297647-d34128119-Reviews-Bundela_Woods_Cottage_And_Restaurant-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html",
    // },
    // {
    //   id: 4,
    //   name: "David Miller",
    //   rating: 4,
    //   date: "October 2025",
    //   review:
    //     "Beautiful property with excellent wooden architecture. The rooms are comfortable and clean. Staff is very courteous. Only minor issue was the Wi-Fi speed, but otherwise a great stay. Perfect for families.",
    //   location: "New York, USA",
    //   platform: "Google",
    //   platformLink:
    //     "https://www.google.com/maps/place/Bundela+Woods+Cottage+And+Restaurant",
    // },
    // {
    //   id: 5,
    //   name: "Anjali Verma",
    //   rating: 5,
    //   date: "September 2025",
    //   review:
    //     "Loved everything about Bundela Woods! The ambiance is so serene and calming. The wooden interiors are premium quality and give a luxurious yet natural feel. Great for couples looking for a romantic getaway.",
    //   location: "Delhi, India",
    //   platform: "Booking.com",
    //   platformLink:
    //     "https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html",
    // },
    // {
    //   id: 6,
    //   name: "Thomas Anderson",
    //   rating: 5,
    //   date: "August 2025",
    //   review:
    //     "Exceptional hospitality and beautiful property. The deluxe room was spacious with a lovely balcony. Close to all major Khajuraho attractions. The garden area is perfect for morning walks. Highly satisfied!",
    //   location: "Sydney, Australia",
    //   platform: "Expedia",
    //   platformLink: "https://www.expedia.com/",
    // },
  ];

  const platforms = [
    {
      name: "Google",
      rating: "5",
      reviews: "8+",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          alt="Google"
          className="plat-logo-img"
          loading="lazy"
        />
      ),
      link: "https://www.google.com/travel/search?q=bundela%20woods%20cottage%20and%20restaurant&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72887412%2C72958624%2C73059275%2C73064764%2C73249150%2C121522131&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4Mzk4MmU1MDAxYjQyOTMzOToweDg0MWZkMTdiOWEyYzY5MBIaEhQKBwjqDxADGAESBwjqDxADGAIYATICEAA&qs=CAEyE0Nnb0lrSTJMemZ1aV82QUlFQUU4AkIJCZDGorkX_UEIQgkJkMaiuRf9QQg&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjA0NvqhOqSAxUAAAAAHQAAAAAQBA",
      color: "#4285F4",
      badge: "Most Popular",
    },
    // {
    //   name: "Booking.com",
    //   rating: "8.7",
    //   reviews: "80+",
    //   logo: <span className="plat-logo-text booking-logo">booking</span>,
    //   link: "https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html#tab-reviews",
    //   color: "#003580",
    //   badge: null,
    // },
    // {
    //   name: "TripAdvisor",
    //   rating: "4.5",
    //   reviews: "60+",
    //   logo: <span className="plat-logo-emoji">🦉</span>,
    //   link: "https://www.tripadvisor.com/Hotel_Review-g297647-d34128119-Reviews-Bundela_Woods_Cottage_And_Restaurant-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html",
    //   color: "#00AA6C",
    //   badge: null,
    // },
  ];

  const platformMeta = {
    Google: {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          alt="Google"
          width="13"
          height="13"
        />
      ),
      color: "#4285F4",
    },
    "Booking.com": {
      icon: <span className="rc-pill-booking">b.</span>,
      color: "#003580",
    },
    TripAdvisor: {
      icon: <span className="rc-pill-emoji">🦉</span>,
      color: "#00AA6C",
    },
    Expedia: {
      icon: <span className="rc-pill-emoji">✈️</span>,
      color: "#00355F",
    },
  };

  const renderStars = (rating) => "⭐".repeat(rating);

  return (
    <div className="reviews-page">
      <Helmet>
        <title>Hotel Reviews | Bundela Woods Cottage Guest Reviews</title>

        <meta
          name="description"
          content="Read real guest reviews of Bundela Woods Cottage in Khajuraho. Rated highly on Google, Booking.com & TripAdvisor. Trusted boutique hotel near temples."
        />

        <meta
          name="keywords"
          content="Khajuraho hotel reviews, Bundela Woods reviews, best hotel in Khajuraho reviews, guest reviews Khajuraho"
        />
        <link rel="canonical" href="https://www.bundelawoods.com/reviews" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Bundela Woods Cottage & Restaurant",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Khajuraho",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              reviewCount: "250",
            },
          })}
        </script>
      </Helmet>
      {/* ── HERO ── */}
      <section className="reviews-hero">
        <div className="reviews-hero-overlay" />
        <div className="reviews-hero-content">
          <h1 className="fade-in-up">Guest Reviews</h1>
          <p className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            What Our Guests Say About Us
          </p>
        </div>
      </section>

      {/* ── PLATFORM RATINGS ── */}
      <section className="section platform-overview">
        <div className="container">
          <div className="platform-intro reveal">
            <h2>Rated Highly Across All Platforms</h2>
            <p>Trusted by guests worldwide on every major booking platform</p>
          </div>
          <div className="platform-cards reveal">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
                style={{ "--plat-color": p.color }}
              >
                {p.badge && <span className="plat-badge">{p.badge}</span>}
                <div className="plat-logo">{p.logo}</div>
                <div className="plat-name">{p.name}</div>
                <div className="plat-rating">{p.rating}</div>
                <div className="plat-stars">⭐⭐⭐⭐⭐</div>
                <div className="plat-count">{p.reviews} Reviews</div>
                <div className="plat-cta">View Reviews →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITE A REVIEW ── */}
      <section className="section review-actions">
        <div className="container">
          <div className="action-content reveal">
            <h2>Share Your Experience</h2>
            <p>
              Your feedback helps us improve and helps other travelers make
              informed decisions
            </p>
            <div className="review-buttons">
              {/* Google */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJOZNCGwDlgjkRkMaiuRf9QQg"
                target="_blank"
                rel="noopener noreferrer"
                className="write-review-btn google-review-btn"
              >
                <span className="wrb-icon">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="wrb-content">
                  <span className="wrb-sub">Rate us on</span>
                  <span className="wrb-main">Google</span>
                </span>
                <span className="wrb-stars">★★★★★</span>
              </a>

              {/* TripAdvisor */}
              <a
                href="https://www.tripadvisor.com/UserReviewEdit-g297647-d34128119-Bundela_Woods_Cottage_And_Restaurant-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html"
                target="_blank"
                rel="noopener noreferrer"
                className="write-review-btn tripadvisor-review-btn"
              >
                <span className="wrb-icon wrb-owl">🦉</span>
                <span className="wrb-content">
                  <span className="wrb-sub">Rate us on</span>
                  <span className="wrb-main">TripAdvisor</span>
                </span>
                <span className="wrb-stars">★★★★★</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUEST REVIEWS GRID ── */}
      <section className="section guest-reviews">
        <div className="container">
          <div className="section-title reveal">
            <h2>What Our Guests Are Saying</h2>
            <p>Real experiences from travelers who stayed with us</p>
          </div>
          <div className="reviews-grid">
            {guestReviews.map((review, index) => {
              const meta = platformMeta[review.platform] || {};
              return (
                <div
                  key={review.id}
                  className="review-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div className="reviewer-details">
                        <h4>{review.name}</h4>
                        <p className="reviewer-location">{review.location}</p>
                        <a
                          href={review.platformLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="review-platform-pill"
                          style={{ "--pill-color": meta.color || "#888" }}
                          title={`Read on ${review.platform}`}
                        >
                          <span className="pill-icon">{meta.icon}</span>
                          <span className="pill-label">
                            From {review.platform}
                          </span>
                          <span className="pill-arrow">↗</span>
                        </a>
                      </div>
                    </div>
                    <div className="review-meta">
                      <div className="review-stars">
                        {renderStars(review.rating)}
                      </div>
                      <p className="review-date">{review.date}</p>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>"{review.review}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="section trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card reveal">
              <div className="trust-icon">✓</div>
              <h3>Verified Reviews</h3>
              <p>
                All reviews are from verified guests who have actually stayed at
                Bundela Woods
              </p>
            </div>
            <div className="trust-card reveal">
              <div className="trust-icon">⭐</div>
              <h3>High Ratings</h3>
              <p>
                Consistently rated 4.5+ stars across all major booking platforms
              </p>
            </div>
            {/* Changed from "Award Winning" */}
            <div className="trust-card reveal">
              <div className="trust-icon">🤝</div>
              <h3>Happy Guests</h3>
              <p>
                Over 250 satisfied guests from across the world who left with
                smiles and lifelong memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section reviews-cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Experience It Yourself</h2>
            <p>
              Book your stay and create your own memorable experience at Bundela
              Woods
            </p>
            <a
              href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
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

export default Reviews;
