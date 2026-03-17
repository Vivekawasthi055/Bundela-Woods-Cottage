import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Bundela Woods</h3>
            <p className="footer-about">
              A premium wooden cottage stay in the heart of Khajuraho, offering
              an exclusive blend of nature, comfort, and luxury near UNESCO
              World Heritage temples.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="internal-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="internal-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="internal-link">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="internal-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="internal-link">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="internal-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="icon">📍</span>
                <span>Khajuraho, Madhya Pradesh, India</span>
              </li>
              <li>
                <span className="icon">📞</span>
                <a href="tel:+918878366225">
                  <span>+91 88783 66225</span>
                </a>
              </li>

              <li>
                <span className="icon">✉️</span>
                <a href="mailto:bundelawoodskhajuraho@gmail.com">
                  <span>bundelawoodskhajuraho@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
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
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Bundela Woods Cottage & Restaurant. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
