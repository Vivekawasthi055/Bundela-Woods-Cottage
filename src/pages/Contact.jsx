import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    setFormStatus("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setFormStatus("");
    }, 5000);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Bundela Woods Cottage | Hotel in Khajuraho</title>

        <meta
          name="description"
          content="Contact Bundela Woods Cottage & Restaurant in Khajuraho. Call, email or visit our hotel near Khajuraho temples. Book your stay easily."
        />

        <meta
          name="keywords"
          content="contact hotel in Khajuraho, Bundela Woods contact, hotel phone Khajuraho, hotel near Khajuraho temples contact"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Bundela Woods Cottage & Restaurant",
            image:
              "https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto/v1766746123/holi3_mwmgeh.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Khajuraho",
              addressLocality: "Khajuraho",
              addressRegion: "Madhya Pradesh",
              postalCode: "471606",
              addressCountry: "IN",
            },
            telephone: "+918878366225",
            email: "bundelawoodskhajuraho@gmail.com",
            url: "https://www.bundelawoods.com/",
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="fade-in-up">Contact Us</h1>
          <p className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            We're Here to Help
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info reveal">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have questions or ready to book your stay? Reach out to us and
                we'll be happy to assist you with all your queries.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>
                      Bundela Woods Cottage & Restaurant
                      <br />
                      Khajuraho, Madhya Pradesh (Near Khajuraho Temples)
                      <br />
                      India - 471606
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Phone (24/7 Booking Available)</h4>
                    <a href="tel:+918878366225">
                      <p>+91 88783 66225</p>
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:bundelawoodskhajuraho@gmail.com">
                      <p>bundelawoodskhajuraho@gmail.com</p>
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <h4>Reception Hours</h4>
                    <p>
                      24/7 Available
                      <br />
                      Always here to help
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a
                    href="https://share.google/cAwz1UuEKKIDvue9N"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google"
                    className="tooltip"
                    data-tooltip="Google Profile"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </a>
                  {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="tooltip" data-tooltip="Facebook Page">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a> */}
                  <a
                    href="https://www.instagram.com/bundelawoods"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="tooltip"
                    data-tooltip="Instagram Page"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g297647-d34128119-Bundela_Woods_Cottage_And_Restaurant-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TripAdvisor"
                    className="tooltip"
                    data-tooltip="TripAdvisor Profile"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.494 2.353H0l2.35 1.368a9.994 9.994 0 00-1.328 3.534.515.515 0 10.988.292 8.97 8.97 0 011.196-3.193l1.738 1.003a7.447 7.447 0 105.276 12.735A7.422 7.422 0 0012 22.705a7.422 7.422 0 001.78-.318 7.447 7.447 0 105.276-12.735l1.738-1.003a8.97 8.97 0 011.196 3.193.515.515 0 10.988-.292 9.994 9.994 0 00-1.328-3.534L24 6.648h-4.512c-2.156-1.57-4.825-2.353-7.494-2.353h.012zm-5.24 5.925a5.415 5.415 0 11-.002 10.83 5.415 5.415 0 01.001-10.83zm10.48 0a5.415 5.415 0 11-.001 10.83 5.415 5.415 0 01.001-10.83zM6.766 13.286a2.58 2.58 0 100 5.16 2.58 2.58 0 000-5.16zm10.48 0a2.58 2.58 0 100 5.16 2.58 2.58 0 000-5.16z" />
                    </svg>
                  </a>
                  {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="tooltip" data-tooltip="Twitter / X">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper reveal">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>

                {formStatus && <div className="form-status">{formStatus}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-location">
        <div className="container">
          <div className="section-title reveal">
            <h2>Find Us Here</h2>
            <p>Visit us at our location in Khajuraho</p>
          </div>
          <div className="map-wrapper reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.948815120259!2d79.91720047515109!3d24.831423977948138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982e5001b429339%3A0x841fd17b9a2c690!2sBundela%20Woods%20Cottage%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1770803486494!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bundela Woods Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section quick-actions">
        <div className="container">
          <div className="actions-grid">
            <div className="action-card reveal">
              <div className="action-icon">📅</div>
              <h3>Book Directly</h3>
              <p>
                Reserve your room on Booking.com for the best rates and instant
                confirmation
              </p>
              <a
                href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Book Now
              </a>
            </div>

            <div className="action-card reveal">
              <div className="action-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                Speak directly with our team for personalized assistance and
                special requests
              </p>
              <a href="tel:+918878366225" className="btn btn-secondary">
                Call Now
              </a>
            </div>

            <div className="action-card reveal">
              <div className="action-icon">✉️</div>
              <h3>Email Us</h3>
              <p>Send us your queries and we'll respond within 24 hours</p>
              <a
                href="mailto:bundelawoodskhajuraho@gmail.com"
                className="btn btn-secondary"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
