import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Bundela Woods Cottage & Restaurant</title>

        <meta
          name="description"
          content="Learn about Bundela Woods Cottage & Restaurant – a premium boutique hotel in Khajuraho offering luxury wooden cottages near UNESCO temples."
        />

        <meta
          name="keywords"
          content="about Bundela Woods, best hotel in Khajuraho, boutique hotel Khajuraho, luxury cottage Khajuraho, hotel near Khajuraho temples"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="fade-in-up">About Bundela Woods</h1>
          <p className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            Where Craftsmanship Meets Nature
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content reveal">
              <h2>Our Story</h2>
              <p>
                Bundela Woods Cottage & Restaurant was born from a vision to
                create a unique hospitality experience that celebrates the
                natural beauty of wood and the cultural richness of Khajuraho.
                Built entirely with premium quality wood, our cottage stands as
                a testament to sustainable luxury and thoughtful design.
              </p>
              <p>
                Every beam, every panel, and every detail has been carefully
                selected and crafted to create a warm, inviting atmosphere that
                connects guests with nature while providing modern comfort. Our
                commitment to quality extends beyond the physical structure to
                encompass every aspect of your stay.
              </p>
              <p>
                With only 8 exclusive rooms, we've deliberately chosen intimacy
                over scale, ensuring that each guest receives personalized
                attention and a truly exclusive experience. This isn't just a
                place to stay—it's a sanctuary where the warmth of wood meets
                the serenity of nature.
              </p>
              <p>
                Explore our{" "}
                <Link to="/rooms" className="internal-link">
                  luxury rooms in Khajuraho
                </Link>{" "}
                or plan your visit through our{" "}
                <Link to="/contact" className="internal-link">
                  contact page
                </Link>
                .
              </p>
            </div>
            <div className="story-image reveal">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Exterior view of Bundela Woods Cottage"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-image reveal">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
                alt="Premium wooden cottage interior"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="vision-content reveal">
              <h2>Our Vision & Philosophy</h2>
              <div className="philosophy-item">
                <h3>Sustainable Luxury</h3>
                <p>
                  We believe luxury doesn't have to come at the expense of
                  nature. Our 100% wooden construction uses responsibly sourced
                  materials, creating a space that's both opulent and
                  environmentally conscious.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Cultural Connection</h3>
                <p>
                  Located in the heart of Khajuraho, we serve as a bridge
                  between the ancient heritage of this UNESCO World Heritage
                  Site and contemporary comfort, offering guests a deeper
                  connection to local culture.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Personalized Experience</h3>
                <p>
                  With limited rooms and attentive service, we create bespoke
                  experiences tailored to each guest's preferences, ensuring
                  your stay is not just comfortable but truly memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-title reveal">
            <h2>Why Choose Bundela Woods</h2>
            <p>What makes us special</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon">🌲</div>
              <h3>100% Premium Wooden Build</h3>
              <p>
                Crafted entirely from high-quality wood, our cottage offers a
                unique aesthetic and natural warmth that concrete structures
                simply cannot match. Every room tells a story of craftsmanship.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">🏠</div>
              <h3>Limited Rooms for Privacy</h3>
              <p>
                With only 8 rooms, we ensure an intimate, exclusive experience.
                No crowds, no noise—just peace, personalized service, and the
                attention you deserve.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">🌿</div>
              <h3>Peaceful Natural Environment</h3>
              <p>
                Surrounded by greenery and designed to harmonize with nature,
                our property offers a tranquil escape from the chaos of daily
                life. Wake up to birdsong and fresh air.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon">📍</div>
              <h3>Prime Location</h3>
              <p>
                Strategically located near Khajuraho's famous temples and
                airport, we offer convenience without compromising on serenity.
                The best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title reveal">
            <h2>Our Services</h2>
            <p>Comprehensive hospitality for a complete experience</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80"
                  alt="Accommodation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-content">
                <h3>Premium Accommodation</h3>
                <p>
                  Our 7 deluxe rooms with private balconies and 1 unique
                  standard room with tree view offer unmatched comfort. Each
                  room features modern amenities, air conditioning, plush
                  bedding, and elegant wooden interiors.
                </p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                  alt="Restaurant"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-content">
                <h3>In-house Restaurant</h3>
                <p>
                  Savor delicious local and international cuisine prepared with
                  fresh ingredients. Our restaurant offers a warm, inviting
                  atmosphere perfect for breakfast, lunch, or dinner.
                </p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80"
                  alt="Room Service"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-content">
                <h3>24/7 Room Service</h3>
                <p>
                  Enjoy the convenience of in-room dining any time of day or
                  night. Our attentive staff ensures your comfort with prompt
                  and courteous service.
                </p>
              </div>
            </div>
            <div className="service-card reveal">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                  alt="Travel Assistance"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-content">
                <h3>Travel & Tour Assistance</h3>
                <p>
                  Let us help you explore Khajuraho. We can arrange guided tours
                  to temples, transportation, and local experiences to make your
                  visit unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Amenities */}
      <section className="section detailed-amenities">
        <div className="container">
          <div className="section-title reveal">
            <h2>Complete Amenities</h2>
            <p>Everything you need for a perfect stay</p>
          </div>
          <div className="amenities-columns">
            <div className="amenities-col reveal">
              <h4>Room Features</h4>
              <ul>
                <li>✓ Air Conditioning</li>
                <li>✓ Premium Bedding</li>
                <li>✓ Private Bathrooms</li>
                <li>✓ Hot Water 24/7</li>
                <li>✓ Wooden Interiors</li>
                <li>✓ Balcony (Deluxe Rooms)</li>
                <li>✓ LED TV</li>
                <li>✓ Tea/Coffee Maker</li>
              </ul>
            </div>
            <div className="amenities-col reveal">
              <h4>Property Features</h4>
              <ul>
                <li>✓ Free High-Speed Wi-Fi</li>
                <li>✓ In-house Restaurant</li>
                <li>✓ Garden & Outdoor Seating</li>
                <li>✓ Free Parking</li>
                <li>✓ 24/7 Reception</li>
                <li>✓ CCTV Security</li>
                <li>✓ Power Backup</li>
                <li>✓ Laundry Service</li>
              </ul>
            </div>
            <div className="amenities-col reveal">
              <h4>Guest Services</h4>
              <ul>
                <li>✓ 24/7 Room Service</li>
                <li>✓ Tour Arrangements</li>
                <li>✓ Airport Transfers</li>
                <li>✓ Travel Desk</li>
                <li>✓ Concierge Service</li>
                <li>✓ Housekeeping</li>
                <li>✓ Pet Friendly</li>
                <li>✓ Wake-up Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-box reveal">
            <h2>Ready to Experience Bundela Woods?</h2>
            <p>
              Book your stay and discover the perfect blend of nature, luxury,
              and heritage
            </p>
            <div className="cta-buttons">
              <a
                href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Book Now
              </a>
              <Link to="/rooms" className="btn btn-secondary btn-about">
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
